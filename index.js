const express = require('express');
const conectdb = require('./config/dbconn');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

conectdb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})