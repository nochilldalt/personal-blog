import * as mysql from "mysql";
import config from "../config";
import blogs from "./queries/blogs";
import tags from "./queries/tags";
import blogtags from "./queries/blogtags";
import users from "./queries/users";
import tokens from "./queries/tokens"

const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: any) => {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

export default {
  blogs,
  tags,
  blogtags,
  users,
  tokens
};
