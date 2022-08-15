console.log("hi, hi, hi");
console.log("servus");


const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.set('view engine', 'pug'); // Specify your template engine


const PORT = process.env.PORT || 3000


// Routes
app.get('/',(req,res)=>{
    res.send('Homepage')
    

});



app.listen(PORT,()=>console.log(`Server Started at Port ${PORT}
=> http://localhost:${PORT}`))