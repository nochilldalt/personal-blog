import * as React from 'react'
import { User, json } from '../utils/api-services'
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { IProfile, IBlog } from '../utils/interfaces';
import { Link } from 'react-router-dom';

const Profile: React.FC<ProfileProps> = (props) => {

    const [blogs, setBlogs] = useState<IBlog[]>([])

    const [profile, setProfile] = useState<IProfile>({
        name: 'test',
        email: "test",
        _created: new Date()
    })

    useEffect(() => {
        if (User && User.role === 'guest') {
            (async () => {
                try {
                    let info = await json('/api/user/profile')
                    let blogs = await json('api/blogs/user')
                    setProfile(info)
                    setBlogs(blogs)
                } catch (error) {
                    console.log(error)
                }
            })()
        } else {
            props.history.push('/login')

        }
    }, [])

    return (
        <div className="card shadow m-1 p-1">
            <div className="card-body">
                <div className="card-header bg-primary text-white text-center">
                    <h1>Welcome, {profile.name}</h1>
                </div>
                <br/>
                <Link className="btn btn-success mx-auto btn-block" to={`/compose`}>Write a New Blog</Link>
                {blogs.map((blog) => {
                    return (
                        <div  key={blog.id} className="card-shadow m-1 p-1">
                            <div className="card-body" key={blog.id}>
                                <h1>{blog.title}</h1>
                                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                                <Link className="btn btn-secondary " to={`/edit/${blog.id}`}>Admin Options</Link>
                                <br />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

interface ProfileProps extends RouteComponentProps { }

export default Profile