import * as React from 'react'
import { RouteComponentProps } from 'react-router';
import { useEffect, useState } from 'react';
import { IBlog } from '../utils/interfaces';
import { json, User } from '../utils/api-services';

const Edit: React.FC<EditProps> = (props) => {

    const [editBlogs, setEditBlogs] = useState<IBlog[]>([])
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')


    useEffect(() => {
        (async () => {
            try {
                let editBlogs = await json(`/api/blogs/${props.match.params.id}`)
                if (editBlogs.userid !== User.userid) {
                    props.history.push('/profile')
                } else {
                    setEditBlogs(editBlogs);
                    setTitle(editBlogs.title);
                    setContent(editBlogs.content)
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    const editBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let r = await json(`/api/blogs/${props.match.params.id}`, 'PUT', {
                title,
                content
            })
            props.history.push(`/details/${props.match.params.id}`);
        } catch (error) {
            console.log(error)
        }
    }


    const destroyBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let r = await json(`/api/blogs/${props.match.params.id}`, 'DELETE')
            props.history.push(`/`);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card shadow m-1 p-1">
            <div className="card-body">
                <form>
                    <h4> Admin Options</h4>
                    <br />
                    <input className="form-control" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} type="text" />
                    <br />
                    <textarea className="form-control" rows={20} value={content} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} />
                    <br />
                    <button className="btn btn-warning mx-auto w-50 btn-block" onClick={editBlog}>Save Revisions</button>
                    <button className="btn btn-secondary mx-auto w-50 btn-block" onClick={destroyBlog}>Delete Blog</button>
                </form>
            </div>
        </div>
    )
}

interface EditProps extends RouteComponentProps<{ id: string }> { }

export default Edit