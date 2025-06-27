require('dotenv').config()
const app = require('./src/app')
const {connectTo} = require('./src/config/db.cjs')

const Port = process.env.port || 3000

connectTo().then(() => {
    app.listen(Port, ()=>{
        console.log(`Server is running on ${Port}`)
    })
})