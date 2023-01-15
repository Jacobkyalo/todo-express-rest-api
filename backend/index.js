const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const routerRoutes = require("./routes/todos");

const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URI, () =>
    console.log("Database connected successfully")
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todos", routerRoutes);

app.listen(port, () => console.log(`Server is running at port ${port}`));
