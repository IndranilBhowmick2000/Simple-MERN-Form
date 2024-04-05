const express= require('express');
const userrouter= require('./routes/userroute');
const cors= require('cors');



//create object
const app= express();

app.use(cors());
//middleware for getting data to api
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/batch',userrouter);

const port=4000;



//listen
app.listen(port,()=>{
    console.log(`server is running in the port${port}`);
})