import { createUser } from "./user.controllers";
export default {
  createUser: async (parent, args, contenxt) => {
    return await createUser(args.user);
  },
};
