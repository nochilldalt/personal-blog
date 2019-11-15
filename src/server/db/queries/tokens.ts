import { Query } from '../index'

const insert = (userid: number) => Query('INSERT INTO tokens (userid) VALUE (?)',[[userid]])

const update = (token:string, id:number) => Query('UPDATE tokens SET token = ? WHERE id = ?',[token, id])

const match = (token:string, userid:number, id:number) => Query('SELECT * FROM tokens WHERE token=? AND userid=? AND id=?',[token, userid, id])

export default{
    insert,
    update,
    match
}