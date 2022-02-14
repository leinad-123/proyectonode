import gql from "graphql-tag";
import DocumentType from "./objects/document/document.type";
import UserType from "./objects/user/user.type";

export default gql`
    ${DocumentType}
    ${UserType}
    type Query {
        documents: [Document]
        user(userId: ID!): User
    }
    type Mutation {
        createUser(user: UserInput!): User
        createDocument(document: DocumentInput!): Document
    }
`;
