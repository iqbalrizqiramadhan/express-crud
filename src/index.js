require('dotenv').config()
const PORT=process.env.PORT ||5000;
const express = require ('express');

const  clubRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/log')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use(`/club`, clubRoutes);


app.listen (PORT, () => {
    console.log(`server berhasil di runing di port ${PORT}`);
})