import express from 'express';
import mongoInit from './config/database.js';
import authRouter from './routes/route.js';

mongoInit();
const app = express();

const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res,next) => {
    res.send("<h1>Hi, there welcome to Express</h1>")
});

app.use('/api', authRouter);

app.listen(PORT, (req,res,next) => {
    console.log(`App is running on port ${PORT}`)
})