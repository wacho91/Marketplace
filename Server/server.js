const express = require("express")
const mongoose = require("mongoose")
const ookieParser = require("cookie-parser")
const cors = require("cors")
const cookieParser = require("cookie-parser")

//create a database connection -> u can also
//create a separate file for this and import use-that-filter

mongoose-mongoose.connect(
    'mongodb+srv://criskol71:criskol0731@cluster0.ic0te.mongodb.net/'
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`))