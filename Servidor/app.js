import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path'; 
const app = express(); 

// Middleware 
app.use(morgan('tiny')); 
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Rutas 
// app.use('/api', require('./routes/nota'));
// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), () => { 
    console.log('Example app listening on port '+ app.get('puerto'));
});
// Conexión base de datos

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/prueba'  
// const uri = 'mongodb+srv://Tonilas:michis2021@cluster0.awut8.mongodb.net/test';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, options).then(
    () => { 
        console.log('Conectado satisfactoriamente') 
        },
    err => { err }
);
