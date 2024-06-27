const express = require("express");
const router = express.Router();
const File = require("./imgmodels");

// Endpoint POST para subir imágenes
router.post("/upload-image", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    let uploadedFile = req.files.file;

    if (!uploadedFile.mimetype.startsWith("image/")) {
      return res.status(400).send("Only image files are allowed.");
    }

    const file = new File({
      filename: uploadedFile.name,
      contentType: uploadedFile.mimetype,
      data: uploadedFile.data,
    });

    await file.save();
    res.send("Image uploaded successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint GET para obtener todos los archivos
router.get("/files", async (req, res) => {
  try {
    // Encuentra todos los archivos en la base de datos, excluyendo el campo 'data' para no enviar los datos binarios
    const files = await File.find({}, "-data");
    res.json(files);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;
