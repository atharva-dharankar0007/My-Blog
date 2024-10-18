const mongoose=require('mongoose')
const colors=require('colors')
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDb database ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`MONGO connection error ${error}`.bgRed.white)
    }
}
module.exports=connectDB;