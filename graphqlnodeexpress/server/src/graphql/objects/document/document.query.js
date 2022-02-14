import getDocuments from "./document.controllers";

export default {
  documents: async (parent, args, context) => {
    return await getDocuments();
  },
};
