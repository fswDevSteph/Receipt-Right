const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const receiptSchema = new Schema({
  receiptURL: {
    type: String,
    required: 'You need to leave a receipt URL!'
  },
  receiptName: {
    type: String,
    required: 'You need to leave a receipt name!',
    minlength: 5,
    maxlength: 280,
    trim: true,
  },
  receiptDate: {
    type: String,
    required: false,
    trim: true,
  },
  receiptAmount: {
    type: String,
    required: true,
  },

  receiptCategory: {
    type: String,
    required: true,
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
