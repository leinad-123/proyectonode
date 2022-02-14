const UserFields = `
    firstName: String
    lastName: String
    email: String
    password: String
`;

export default `
    type User {
        _id: ID
        ${UserFields}
    }
    
    input UserInput {
        ${UserFields}
    }

`;
