const express = require("express");
const router = express.Router();
const URL = require("./urlModel");

// Endpoint POST para subir URLs
router.post("/upload-url", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).send("URL is required.");
    }

    const newUrl = new URL({ url });
    await newUrl.save();
    res.send("URL uploaded successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint GET para obtener todas las URLs
router.get("/urls", async (req, res) => {
  try {
    const urls = await URL.find({});
    res.json(urls);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
