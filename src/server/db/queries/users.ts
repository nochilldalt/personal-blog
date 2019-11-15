import { Query } from "../index";

const findEmail = (email: string) =>
  Query("SELECT * FROM users WHERE email=?", [email]);

  const findid = (id: number) =>
  Query("SELECT * FROM users WHERE id=?", [id]);

  const register = (name:string, email:string, password:string) => Query("INSERT INTO users (name, email, password) VALUE (?)", [[name, email, password]])

export default {
  findEmail,
  findid,
  register
};
