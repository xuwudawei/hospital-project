var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;




const uri =
  "mongodb+srv://admin:admin@cluster0.ezivhvc.mongodb.net/hospitalDB?authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(uri.toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
    autoIndex: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

module.exports = { mongoose };