const express = require('express')
const connectDB = require('./config/db')

const app = express();

// Connect ke database
connectDB();

app.use(express.json({ extented: false}));


// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'))


const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));