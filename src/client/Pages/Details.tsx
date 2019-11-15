import * as React from 'react'
import * as moment from 'moment'
import { RouteComponentProps, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IBlog, IBlogTag } from '../utils/interfaces';
import { json } from '../utils/api-services';

const Details: React.FC<DetailsProps> = props => {

    const [blog, setBlog] = useState<IBlog>({
        title: 'string',
        content: 'string',
        id: 0,
        userid: 0,
        _created: new Date(),
        name: 'string'
    })

    const [blogTags, setBlogTags] = useState<IBlogTag[]>([])

    useEffect(() => {
        (async () => {
            try {
                let blog = await json(`/api/blogs/${props.match.params.id}`)
                setBlog(blog)

                let blogTags = await json(`/api/blogtags/${props.match.params.id}`)
                setBlogTags(blogTags)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <section className="row justify-content-center">

            <article className="col-md-10" key={`Blog${blog.id}`}>
                <div className="card shadow m-1 p-1">
                    <div className="card-body">
                        <h1 className="card-title">{blog.title}</h1>
                        {blogTags.map((blogTag, i) => {
                            return (
                                <span className="badge badge-pill badge-secondary" key={i} >{blogTag.name}</span>
                            )
                        })}
                        <br/>
                        <h4 className="card-title">By {blog.name}</h4>
                        <p className="card-text">{blog.content.split('\n').map((paragraph, i) => {
                            return (
                                <span key={i}>{paragraph}<br /></span>
                            )
                        })}</p>
                        <p> Written On {moment(blog._created).format('MMMM Do, YYYY')}</p>
                    </div>
                </div>
            </article>

        </section>
    )
}

interface DetailsProps extends RouteComponentProps<{ id: string }> { }

export default Details