const express = require("express");
const connectDB = require("./src/Database/db");
const cors = require("cors");
const bookRoutes = require("./src/Routes/Bookroutes"); // ✅ added your route
const userRouter = require("./src/Routes/Userroutes");

require("dotenv").config({
    path: './src/config/.env'
});

const app = express();
const port = process.env.PORT || 5000; 
const db_url = process.env.MONGO_URL; 

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", bookRoutes); // ✅ all book routes accessible at /api/books
app.use("api", userRouter); // ✅ all user routes accessible at /api/users
app.use("/api/users",userRouter)

// Base route
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// Start server
app.listen(port, async () => {
    try {
        await connectDB(db_url);
        console.log(`Server is running on http://localhost:${port}`);
    } catch (err) {
        console.log("Error in index.js", err);
    }
});
