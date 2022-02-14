import { getUser } from "./user.controllers";

export default {
  user: async (parent, args, context) => {
    return await getUser(args.userId);
  },
};
