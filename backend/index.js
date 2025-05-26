import express from 'express'
import  dotenv  from 'dotenv'
import bodyParser from 'body-parser';
import EmailRouter from './routes/Email.route.js';
import cors from 'cors'


dotenv.config()

const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:8080',
        credentials: true, 
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
        allowedHeaders: [
            'Content-Type', 
            'Authorization', 
        ],
    })
);

const PORT=process.env.PORT || 8000

app.get('/',(request,response)=>{
    return response.json({
        message:"server is running",
        success:true,
        error:false
    })
})

app.use('/api',EmailRouter)

app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})