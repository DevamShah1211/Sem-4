const express = require('express');
const app = express();
app.use(express.static("../public/html/"))
app.use(express.static("../public/css/"))
app.use(express.static("../public/image/"))
app.listen(8081, () => { console.log("sever is listen http://localhost:8081") })