import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://Abhijeet-Sathua:8797218788Aa@cluster0.ka2fe.mongodb.net/userFiles?retryWrites=true&w=majority';

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