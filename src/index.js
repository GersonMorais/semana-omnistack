const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-moull.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);

// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     return res.send(`Ola ${req.query.name}`);
// });

// app.listen(3333);