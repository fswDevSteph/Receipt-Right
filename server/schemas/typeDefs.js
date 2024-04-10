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
    receiptName : String!
    receiptDate: String
    receiptAmount: String!
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
    receipt(receiptId: ID!): Receipt
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReceipt(
    receiptName : String!
    receiptDate: String,
    receiptAmount: String!,
    receiptCategory: String!,
    receiptNotes: String
      ): Receipt
    removeReceipt(receiptId: ID!): Receipt
  }
`;
//type mutation 
module.exports = typeDefs;
