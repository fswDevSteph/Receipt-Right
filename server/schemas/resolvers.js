const { User, Receipt } = require('../models');
const { signToken, EmailError, PasswordError } = require('../utils/auth');
const bcrypt = require('bcrypt');
const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('receipts');
    },
    receipts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Receipt.find(params).sort({ createdAt: -1 });
    },

    receiptCategories: async () => {
      // Fetch all receipts from your database
      const receipts = await Receipt.find();

      // Extract the categories from the receipts
      const categories = receipts.map(receipt => receipt.receiptCategory);

      // Remove duplicates
      const uniqueCategories = [...new Set(categories)];

      return uniqueCategories;
    },

    receipt: async (parent, { receiptId }) => {
      return Receipt.findOne({ _id: receiptId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('receipts');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashedPassword });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw EmailError;
      }

      const correctPw = await user.isCorrectPassword(password);


      if (!correctPw) {
        throw PasswordError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addReceipt: async (parent, { receiptCategory, receiptEmail }, context) => {
      const newReceipt = new Receipt({ receiptCategory, receiptEmail });
      await newReceipt.save();
      return newReceipt;
    },

    removeReceipt: async (parent, { receiptId }, context) => {
      if (context.user) {
        const receipt = await Receipt.findOneAndDelete({
          _id: receiptId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { receipt: receipt._id } }
        );

        return receipt;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
