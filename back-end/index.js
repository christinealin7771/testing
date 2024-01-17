// const express = require('express')
// const cors = require("cors");
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

// const app = express();

// app.use(express.json());


const express = require('express');
const port = 3001; // Change this to your desired port

const app = express();

// To read JSON body
app.use(express.json())

// CORS
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// Routers
const usersRouter = require("./routes/Users")
app.use("/users", usersRouter)

// Connecting to MongoDB 
const mongoose = require('mongoose')
require('dotenv/config') // To get the DB URI

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})