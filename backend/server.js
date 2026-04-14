import exp from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import { empAPP } from './emp-api/api.js'
import dotenv from 'dotenv'
dotenv.config()

const app = exp();
app.use(exp.json()); 

// Dynamic CORS configuration to allow local and dynamically generated Vercel URLs
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}))


let db_address = process.env.DB_URL || 'mongodb://localhost:27017/mern_test';
let port = process.env.PORT || 6767;

// Caching DB Connection for Vercel Serverless
let cachedConnection = null;

const connectDB = async () => {
    if (cachedConnection) {
        return cachedConnection;
    }
    try {
        const db = await connect(db_address, {
            serverSelectionTimeoutMS: 5000 // fail fast if unable to reach Mongo
        });
        cachedConnection = db.connection;
        console.log(`The DataBase is connected!`);
        return cachedConnection;
    } catch (err) {
        console.log("Connection refused :", err);
        throw err;
    }
}

// Middleware to ensure Database is connected before serving API routes!
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ message: "Database Connection Failed", error: error.message });
    }
});

// Configure API routes after ensuring DB connection is ready
app.use("/emp", empAPP);

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: "An error Occurred :<", error: err.message });
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log(`Server listening at port : ${port} ...`));
}

export default app;