import { createDocument } from "./document.controllers";

export default {
  createDocument: async (parent, args, context) => {
    return createDocument(args.document);
  },
};
