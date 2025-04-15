const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Project'
  }]
});

// Once the schema is defined, create a model using mongoose.model(). 
const User = mongoose.model('User', userSchema);

// You must export your model through module.exports
module.exports = User;