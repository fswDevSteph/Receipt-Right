import { gql } from '@apollo/client';

//1st block defines variable names on left : and data types on the right

//2nd block defines the query itself (to send back an object with the same variable names as the first block)


//3rd bock defines the mutation itself (to send back an object with the same variable names as the first block)


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



export const ADD_RECEIPT = gql`
mutation addReceipt($receiptEmail: String!, $receiptCategory: String!) {
  addReceipt(receiptEmail: $receiptEmail, receiptCategory: $receiptCategory) {
    receiptCategory
  }
}
`;

export const REMOVE_RECEIPT = gql`
  mutation removeReceipt($receiptId: ID!) {
    removeReceipt(receiptId: $receiptId) {
      _id
      receiptURL
      receiptName
      receiptDate
      receiptAmount
      receiptCategory
      receiptNotes
    }
  }
`;
