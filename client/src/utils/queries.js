import { gql } from '@apollo/client';

export const GET_USER = gql`
  query USER {
    user {
    _id
    username
    email
    password
    receipts
    }
  }`;

export const GET_RECEIPTS = gql`
  query RECEIPTS {
    receipt {
    _id
    receiptURL 
    receiptName 
    receiptDate
    receiptAmount
    categoryName
    receiptNotes
    }
  }`;

export const QUERY_RECEIPT = gql`
  query RECEIPT($_id: String) {
    RECEIPT(_id: $_id) { 
      _id
    receiptURL 
    receiptName 
    receiptDate
    receiptAmount
    categoryName
    receiptNotes
    }
  }
`;
