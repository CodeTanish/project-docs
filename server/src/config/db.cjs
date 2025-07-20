const mongoose = require('mongoose')

const connectTo = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri).then(() => {
            console.log('database connect successfully');
        })
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}
module.exports = {connectTo}