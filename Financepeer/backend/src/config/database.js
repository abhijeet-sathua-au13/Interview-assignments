import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.mongoURI;

const mongoInit = async() => {
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection established!');
    }
    catch(err){
        console.log(err.message);
    }
}

export default mongoInit;