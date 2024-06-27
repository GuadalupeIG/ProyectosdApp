const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const amqp = require('amqplib/callback_api');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Configuración de AWS S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        }
    }),
    limits: { fileSize: 160 * 1024 * 1024 }, // 160 MB
    fileFilter: function (req, file, cb) {
        if (!file.mimetype.match(/\/(pdf|jpg|jpeg|png|gif)$/)) {
            cb(new Error('Solo se permiten archivos PDF e imágenes'));
        } else {
            cb(null, true);
        }
    }
});

// Configuración de RabbitMQ
const rabbitMQUrl = process.env.RABBITMQ_URL;
amqp.connect(rabbitMQUrl, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        const queue = 'file_uploads';

        channel.assertQueue(queue, {
            durable: false
        });

        app.post('/upload', upload.single('file'), (req, res) => {
            const fileData = {
                originalName: req.file.originalname,
                mimeType: req.file.mimetype,
                size: req.file.size,
                location: req.file.location
            };

            channel.sendToQueue(queue, Buffer.from(JSON.stringify(fileData)));
            res.send('Archivo subido y mensaje enviado a la cola');
        });
    });
});

// Conexión a DocumentDB
const dbUri = process.env.DOCUMENTDB_URI;
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const fileSchema = new mongoose.Schema({
    originalName: String,
    mimeType: String,
    size: Number,
    location: String
});
const File = mongoose.model('File', fileSchema);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});