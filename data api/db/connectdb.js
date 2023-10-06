import mongoose from 'mongoose';
const dblink = process.env.MONGODB;


const dbConnection = () => {
    mongoose.connect(dblink)
        .then(() => { console.log("Database Conected") })
        .catch((error) => { console.log("error") });
}

export default dbConnection;