const mongoose = require("mongoose");
class Database {
  constructor() {
    this._connect;
  }
  _connect() {
    mongoose
      .connect(
       
mongoose.connect('mongodb+srv://Mahmoud:Midou2001@cluster0.h0gxs.mongodb.net/Cluster0?retryWrites=true&w=majority'),
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      )
      .then(() => {
        console.log("Database connected");
      })
      .catch(() => {
        console.log("Database connection error");
      });
  }
}
module.exports = new Database();