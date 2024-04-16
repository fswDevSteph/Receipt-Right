const { Schema, model } = require('mongoose');


const receiptSchema = new Schema({
  receiptURL: {
    type: String,
    required: false
  },
  receiptEmail: {
    type: String,
    required: "must add user email",
    maxlength: 280,
    required: false,
    trim: true,
  },
  receiptDate: {
    type: String,
    required: false,
    trim: true,
  },
  receiptAmount: {
    type: String,
    required: false,
  },

  receiptCategory: {
    type: String,
    required: 'You need to leave a receipt category!',
    maxlength: 25,
  },

  receiptNotes:
  {
    notesText: {
      type: String,
      required: false,
      maxlength: 1500,
    },
  },
});

const Receipt = model('receipt', receiptSchema);

module.exports = Receipt;
