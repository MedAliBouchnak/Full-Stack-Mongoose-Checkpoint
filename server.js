//Installing and setting up Mongoose
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8081;
app.use(express.json())
mongoose.connect(
  "mongodb+srv://MedAli:jilanie323@cluster0.rtmxyri.mongodb.net/?retryWrites=true&w=majority",
  console.log("Database is connected")
);
app.use("/user", require("./Routes/useRoutes"));
app.listen(port, () => console.log("Server is running at port 8081"));
