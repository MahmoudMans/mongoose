let mongoose = require('mongoose');
const server = '0.0.0.0/0';
class MyDatabase {
    constructor() {
      this._connect;
    }
    _connect() {
mongoose.connect('mongodb+srv://Mahmoud:Midou2001@cluster0.h0gxs.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })
}
}

module.exports = new MyDatabase();