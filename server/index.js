const express = require("express");
const routers = require("./routers/index.js");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use("/", routers);
app.listen(port, () => {
    console.log(`Listening from port ${port}!`);
})