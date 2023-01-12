const express = require("express");
const ImageStorage = require("../controllers/ImageStorage-Controller");
const router = express.Router();

router.get("/getImage", ImageStorage.getImage);
router.post("/postImage", ImageStorage.postImage);

module.exports = router;