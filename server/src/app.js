const express = require('express')
const morgan = require('morgan')
const authRouter = require('./router/user.router')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/user', authRouter)
module.exports = app