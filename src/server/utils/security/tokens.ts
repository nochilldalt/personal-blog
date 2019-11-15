import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
import db from "../../db";
import config from "../../config";

export const createToken = async (payload: IPayload) => {
  try {
    let result: any = await db.tokens.insert(payload.userid);
    payload.tokenid = result.insertId;
    payload.unique = crypto.randomBytes(32).toString("hex");
    let token = await jwt.sign(payload, config.secret);
    await db.tokens.update(token, payload.tokenid);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const validateToken = async (token: string) => {
  try {
    let payload:IPayload = <IPayload>jwt.decode(token)
    let [validToken]:any = await db.tokens.match(token, payload.userid, payload.tokenid)
    if (validToken) {
      return payload
    } else {
      return new Error('INVALIED TOKEN')
    }
  } catch (error) {
    console.log(error)
  }
}

interface IPayload {
  userid: number;
  tokenid?: number;
  unique?: string;
}
