const mongoose= require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Data')
}

main().then(
    ()=>{console.log("Database connection done");}
).catch(
    (err)=>{console.log(err);}
)

module.exports= mongoose;