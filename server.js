const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//config
dotenv.config()

//routes
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')

//mongodb
connectDB()
//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white);
})
