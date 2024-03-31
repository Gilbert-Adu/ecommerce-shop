const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const http = require("http");

app.use(cors());

app.get("/", async(req, res) => {

    try {
        let result = await axios.get("http://localhost:5000/")
        console.log(result.data)
        res.send("hey ho!")
        
        
    }catch(err) {
        console.log(err);
    }
});
app.listen(3000, () => {
    console.log("listening on 3000")
});