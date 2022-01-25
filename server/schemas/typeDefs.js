const {gql} = require('apollo-server-express');

const typeDefs = gql`
    input bookInput {
        authors: [String!]
        description: String
        title: String
        bookId:ID!
        image: String
        link: String
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int!
        savedBooks: [Book!]
    }
    type Book {
        _id: ID!
        authors:[String!]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users:[User]
        me:User
    }
    type Mutation{
        addUser(username:String!, email:String!, password:String!): Auth
        login(email:String!, password:String!):Auth
        saveBook(input:bookInput): User
        
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;