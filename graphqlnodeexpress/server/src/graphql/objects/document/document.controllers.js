import Document from "../../../database/model/Document";

export const createDocument = async (document) => {
  try {
    const newDocument = await Document.create(document);
    return newDocument;
  } catch (e) {
    console.log(e);
    return {
      error: true,
      msg: "Ha ocurrido un error",
    };
  }
};
export const getDocuments = async () => {
    try {
      const documents = await Document.find();
      return documents;
    } catch (e) {
      console.log(e);
      return {
        error: true,
        msg: "Ha ocurrido un error",
      };
    }
  };
  
