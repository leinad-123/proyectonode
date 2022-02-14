import User from "../../../database/model/User";

export const getUser = async (id) => {
  try {
    const searchUser = await User.findById(id);
    return searchUser;
  } catch (e) {
    console.log(e);
    return {
      error: true,
      msg: "Ha ocurrido un error",
    };
  }
};
export const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (e) {
    console.log(e);
    return {
      error: true,
      msg: "Ha ocurrido un error",
    };
  }
};
