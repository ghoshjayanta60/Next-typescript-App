import mongoose from 'mongoose';

export async function connect() {
    try {
       // mongoose.connect(process.env.MONGO_URI!);
       mongoose.connect('mongodb+srv://jayantaghosh928:U0YTnQ8KwYN56X7E@cluster0.by6tiz0.mongodb.net/Mernn',{
        poolSize: 5,
        keepAlive: 1,
        native_parser: true,
        useCreateIndex: true,
        useNewUrlParser: true,
        reconnectInterval: 1000,
        connectTimeoutMS: 30000,
      //  reconnectTries: Number.MAX_VALUEe,

        // User Name & Password
        user: 'jayantaghosh928',
        pass: 'U0YTnQ8KwYN56X7E'
    })
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}