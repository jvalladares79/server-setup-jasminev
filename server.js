import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import 'dotenv/config';


const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("helloooo");
})

app.listen(port, () => {
    console.log("Express server running on port 3000");
})