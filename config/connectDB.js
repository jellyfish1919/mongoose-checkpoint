const mongosse = require('mongoose')


const connectDB =async () => {
    try{
        await mongosse.connect(process.env.DB_URI) ;
        console.log('DB is connected..............')
    } catch (error) {
        console.log('DB  is not CONNECTED !!!',error )
    }
}

module.exports = connectDB 