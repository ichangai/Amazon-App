const mongoose = require('mongoose');
require('dotenv').config()
const url = process.env.MONGODB_URI;
mongoose.connect(url, 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }
     );

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log('Connected');
});

// Models
require('./user');
require('./product');
require('./category');