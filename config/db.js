const { MongoClient } = require('mongodb')
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const connectDB =async()=>{
    try{
        await client.connect()
        console.log('MongoDB connected successfully')

        const object = client.db('portfolio')
        const details = object.collection('details')
        const skills = object.collection('skills')
        return {details, skills}

    }catch (error){
      console.log('Mongodb connection failed')
    }
    client.close()
}

module.exports = connectDB