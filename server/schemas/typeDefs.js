const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    receipts: [Receipt]
  }

  type Receipt {
    _id: ID
    receiptEmail : String
    receiptDate: String
    receiptAmount: String
    receiptCategory: String!
    receiptNotes: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    receipts: [Receipt]
    receiptCategories: [String]
    receipt(receiptId: ID!): Receipt
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReceipt(
    receiptEmail : String!
    receiptDate: String,
    receiptAmount: String,
    receiptCategory: String!,
    receiptNotes: String
      ): Receipt
    removeReceipt(receiptId: ID!): Receipt
  }
`;

module.exports = typeDefs;
