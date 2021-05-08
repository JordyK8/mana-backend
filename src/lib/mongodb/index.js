const mongoose = require('mongoose');

// handle error in a more gracefull manner
module.exports = mongoose.createConnection(
  'mongodb://localhost:27017/ch-react-native',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
);