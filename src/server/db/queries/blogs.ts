import { Query } from '../index'

const all = () => Query(`SELECT blogs.*, users.name FROM blogs JOIN users ON users.id=blogs.userid`)

const one = (id: number) => Query('SELECT blogs.*, users.name FROM blogs JOIN users ON users.id=blogs.userid WHERE blogs.id=? ', [id])

const post = (title:string, content:string, userid:number) => Query(' INSERT INTO blogs (title, content, userid) VALUE (?)', [[title, content, userid]] )

const edit = (title:string, content:string, id:number) => Query('UPDATE blogs SET title=?, content=? WHERE id=? ', [title , content, id])

const destroy = (id: number) => Query('DELETE FROM blogs WHERE id=?', [id])

const mine = (userid:number) => Query('SELECT * FROM blogs WHERE userid=? ', [userid])

export default{
    all,
    one,
    post,
    edit,
    destroy,
    mine
}