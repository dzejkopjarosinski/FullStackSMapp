const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');

app.use(express.json());
app.use(cors()); //It whitelists API for the machine so you can make a request 

const postRouter = require('./routes/Posts');

app.use("/posts", postRouter);

db.sequelize.sync().then(()=>
{
app.listen(3001, ()=>{
    console.log("server is running on 3001");
    });
});