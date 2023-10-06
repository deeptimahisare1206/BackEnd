import express from 'express';
import {} from 'dotenv/config'
import dbConnection from './db/connectdb.js';
import web from './routes/web.js';
import cors from 'cors';



const app = express();
// const port = 3000;
app.use(cors());

const port = process.env.PORT || 5000;
dbConnection();


app.use(express.json());
app.use('/api',web );



app.get('/' ,(req, res) => {
    res.send("<h1>😎😎Hello😎😎</h1>")
})
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})