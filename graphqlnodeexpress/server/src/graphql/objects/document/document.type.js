const DocumentFields = `
  userId: ID
  title: String
  status: DocumentStatus
  content: String
`;

export default `
  type Document {
    _id: ID
    ${DocumentFields}
    createdAt: String
    updatedAt: String
  }
  enum DocumentStatus {
    draft
    published
  }
  input DocumentInput {
    ${DocumentFields}
  }
`;
