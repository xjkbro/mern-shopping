const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');       //mongoose is used to connect to mongoDB database
// const passport = require('passport');
const path = require('path')

const item = require('./routes/api/item');

require('dotenv').config();
const env = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    NODE_ENV: process.env.NODE_ENV,

}

console.log (env.NODE_ENV)
const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json());                //body parser
app.use(express.urlencoded({ extended: false }));

// app.use(passport.initialize());
// require("./config/passport")(passport);

//MongoDB Connection
mongoose
    .connect( env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB database connection established successfully"))
    .catch(err => console.log(err));

//use Routes
app.use('/api/item', item);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});