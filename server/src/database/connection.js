const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://storeflauntdb2:2SGaHZw4sqvdb0Li@cluster0.k8sex.mongodb.net/storeflauntdb2?retryWrites=true&w=majority&appName=Cluster0";
const MONGO_URI = "mongodb+srv://auto:auto@cluster0.wl6ut.mongodb.net/auto?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    try {
        if (!MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        await mongoose.connect(MONGO_URI);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;