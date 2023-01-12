require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const ImageStorageRoute = require("../server/routes/ImageStorage");

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", ImageStorageRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const uri =
  "mongodb+srv://" +
  process.env.MONGODBUSERNAME +
  ":" +
  process.env.MONGODBPASSWORD +
  "@cluster0.wv7gbjb.mongodb.net/?retryWrites=true&w=majority";


mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT);
    console.log("Server listening on port: " + PORT);
  })
  .catch((err) => {
    console.log(err);
  });