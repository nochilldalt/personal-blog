import * as React from 'react'
import { useState, useEffect } from 'react'
import { ITag } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router-dom';
import { User, AccessToken, json } from '../utils/api-services';

const Compose: React.FC<ComposeProps> = props => {

    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [selectedTag, setSelectTag] = useState<string>('1')
    const [tags, setTags] = useState<ITag[]>([])

    useEffect(() => {
        (async () => {
            try {
                let tags = await json('/api/tags')
                setTags(tags)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    const submitBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let msg: any = await json('/api/blogs', 'POST', {
                title,
                content,
                selectedTag,
                userid: User.userid
            })
            // let r = await fetch('/api/blogs', {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": `Bearer ${AccessToken}`
            //     },
            //     body: JSON.stringify({
            //         title,
            //         content,
            //         selectedTag,
            //         userid: User.userid
            //     })
            // })
            // let msg: any = await r.json();
            props.history.push(`/details/${msg.insertId}`);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="card shadow m-1 p-1">
            <div className="card-body">
                <form>
                    <h4>Create Blog</h4>
                    <br />
                    <input className="form-control" placeholder="Title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                    <br />
                    <textarea className="form-control" rows={20} placeholder="Write your Blog here" value={content} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} />
                    <br />
                    <select className="form-control w-50 " value={selectedTag} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectTag(e.target.value)}>
                        {tags.map(tag => {
                            return (
                                <option value={tag.id} key={tag.id}>{tag.name}</option>
                            )
                        })}
                    </select>
                    <br />
                    <br />
                    <button className="btn btn-secondary mx-auto w-50 btn-block" onClick={submitBlog}>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

interface ComposeProps extends RouteComponentProps { }

export default Compose