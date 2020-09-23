const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// set up our express app
const app = express();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));

// db user password username: charliedowd   password: 9iPe9hQw2XcJh9T
// mongo atlas connection string: mongodb+srv://charliedowd:<password>@cluster0.ejdj5.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err
    else {
        console.log('MongoDB connection established!')
    }
})