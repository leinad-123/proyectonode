import documentQueries from "./objects/document/document.query";
import userQueries from "./objects/user/user.query";

export default {
  ...documentQueries,
  ...userQueries,
};
