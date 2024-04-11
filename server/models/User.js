const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  receipts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Receipt',
    },
  ],
});


userSchema.methods.isCorrectPassword = async function (password) {
  // return this.password === password;
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
