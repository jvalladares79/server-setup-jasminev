import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import 'dotenv/config';


const app = express();

const port = 3000;

const db = mysql.createConnection({
    host: 'thresholds-test.mysql.database.azure.com',
    user: 'jvalladares',
    port: 3306,
    password: 'test',
    database: 'jvalladares_tasks',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.send("helloooo");
});

//get request to get all tasks from db
app.get('/tasks', (req, res) => {
    // write the query
    const query = 'SELECT * FROM tasks;';
    // make the query run 
    db.query(query, (err, results) => {
    // handle the query. passing in the parameters from the body
        if (err) {
            console.log(`blah! could not get tasks, error message is '${err}'`); 
            res. status(500).json({ error: 'Error retrieving tasks.'})
        }
            else {
                console.log(results[0]);
                res.json(results);
            }
        })
    })

app.listen(port, () => {
    console.log("Express server running on port 3000");
})