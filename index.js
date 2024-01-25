const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname,"");
app.use(express.static(staticPath));

const port = 8080;
app.listen(port, () => {
    console.log("server up and running on PORT : ", port);
});