const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors");
const axios = require("axios");

dotenv.config();
const PORT = process.env.PORT
const app = express();

app.use(cors());

app.get("/fetch-api", async (req,res)=>{
    try {
        const result = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=52eacbc5074c4604b3d23fcb9c36dc20")
        res.send(result.data.articles);
    } catch (err) {
        res.send({error: "Error fetching news headlines"});
    }
})

app.listen(PORT || 4001, ()=> console.log(`Server Started on http://localhost:${PORT}`))




