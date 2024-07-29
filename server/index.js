const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/authRoute')
const app = express()

// 1) middlewares
app.use(cors())
app.use(express.json())

// 2) route
app.use('/api/auth', authRouter)
// 3) mongo db connection
mongoose
    .connect('mongodb://127.0.0.1:27017/authentication')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((error) => console.error('Failed to connect to MongoDB:', error))

// 4) global error handler
app.use((err, res, req, next) => {
    err.StatusCode = err.StatusCode || 500
    err.status = err.status || 'error'

    res.status(err.StatusCode).json({
        status: err.status,
        message: err.message
    })
})

// 5) server
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`)
})