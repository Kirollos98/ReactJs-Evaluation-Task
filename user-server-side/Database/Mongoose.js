const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ReactJsTask', 
{useNewUrlParser: true, useUnifiedTopology: true});



// const mongoose = require('mongoose');

// module.exports = async () => {
//   // TODO: Move constants to .env file.
//   await mongoose.connect('mongodb://localhost:27017/ReactJsTask', {
//     useNewUrlParser: true, useUnifiedTopology: true
//   });

//   const db = mongoose.connection;

//   db.once('open', () => {
//     console.log('mongoose connection started');
//   });

//   db.on('error', (err) => {
//     console.log('mongoose error:', err);
//     process.exit(1);
//   })
// };
