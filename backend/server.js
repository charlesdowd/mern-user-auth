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