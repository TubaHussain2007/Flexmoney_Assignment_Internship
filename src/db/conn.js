const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const {DB} =  require('../keys');
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=> console.log(`no connection`));