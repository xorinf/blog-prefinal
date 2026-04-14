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

app.use("/emp", empAPP);

let db_address = process.env.DB_URL || 'mongodb://localhost:27017/mern_test';
let port = process.env.PORT || 6767;

// Function to connect DB
const connectDB = async () => {
    try {
        await connect(db_address);
        console.log(`The DataBase is connected!`);
    } catch (err) {
        console.log("Connection refused :", err);
    }
}

connectDB();

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: "An error Occurred :<", error: err.message });
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log(`Server listening at port : ${port} ...`));
}

export default app;