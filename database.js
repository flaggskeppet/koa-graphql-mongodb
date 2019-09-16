const mongoose = require('mongoose');

const initDB = () => {

  'mongodb://localhost/admin',
  mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true });
  // mongoose.connect('mongodb://indrek1:indrek1indrek1@ds213615.mlab.com:13615/koa-graphql', { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;
