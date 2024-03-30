const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

app.get("/", async(req, res) => {

    try {
        let result = await axios.get("http://127.0.0.1:5000/")
        console.log(result.data)
        res.send("hey");

    }catch(err) {
        console.error({"message": err.message});
    }
});
app.listen(3000, () => {
    console.log("listening on 3000")
});