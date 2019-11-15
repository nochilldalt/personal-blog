import * as React from 'react'
import { useState, useEffect } from "react"
import { IBlog } from '../utils/interfaces';
import { Link } from "react-router-dom"
import { json } from '../utils/api-services';

const Home: React.FC<HomeProps> = () => {

    const [blogs, setBlogs] = useState<IBlog[]>([])

    useEffect(() => {
        (async () => {
            try {
                let blogs = await json('/api/blogs')
                setBlogs(blogs)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <section className="row justify-content-center align-items-center">
            {blogs.map(blog => {
                return (
                    <article className="col-md-6" key={`Blog${blog.id}`}>
                        <div className="card shadow m-1 p-1">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>{blog.title}</h4>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">By {blog.name}</h4>
                                <p className="card-text">{blog.content.substring(0,100)}...</p>
                                <Link className="btn btn-secondary mx-1" to={`/details/${blog.id}`}>Read Blog</Link>
                            </div>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

interface HomeProps { }

export default Home