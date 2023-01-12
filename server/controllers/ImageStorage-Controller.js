require("dotenv").config();
const mongoose = require("mongoose");
const ImageStorage = require("../models/ImageStorage");

const getImage = async (req, res, next) => {
    res.json({ message: "Get Image!" });
};
const postImage = async (req, res, next) => {
    console.log("Here")
    res.json({ message: "Post Image!" });
};
module.exports.getImage = getImage;
module.exports.postImage = postImage;