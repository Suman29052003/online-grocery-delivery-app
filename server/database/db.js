const mongoose = require('mongoose');

const dbCOnnection = ()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('DataBase connected'))
    .catch(err=>console.log(err));
  
}

module.exports = dbCOnnection;