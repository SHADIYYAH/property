require ('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const app = express()
const port = process.env.port

const detailsRoute = require('./routes/detailsRoute')
const skillsRoute = require('./routes/skillsRoute')

app.use(express.json())
app.use("/api/details", detailsRoute);
app.use("/api/skills", skillsRoute);


// app.get('/', (req,res)=>{
//     res.send('Hello world')
// })
app.get("/", (req, res) => res.send("Hello World!"))

connectDB()

app.listen(port, ()=>{
    console.log(`Server up and running on port ${port}`)
})