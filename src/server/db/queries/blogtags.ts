import { Query } from '../index'

const getForBlog = (blogid: number) => Query('CALL getBlogTags(?)', [blogid])

const insert = (blogid: number, tagid:number)=> Query('INSERT INTO blogtags (blogid, tagid) VALUE (?)', [[blogid, tagid]])

const remove = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid=?',[blogid])

export default{
    getForBlog,
    insert,
    remove
}