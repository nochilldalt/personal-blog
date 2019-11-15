import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { setLogin, User } from '../utils/api-services';
import { json } from '../utils/api-services';
import useForm from '../utils/useForm'

const Login: React.FC<loginProps> = (props) => {

    const { values, handleChange, handleSubmit } = useForm(handleLogin)

    useEffect(() => {
        if (User && User.role === 'guest') {
            props.history.push('/')
        }
    }, [])

    async function handleLogin() {
        try {
            let info: any = await json('/auth/login', 'POST', {
                email: values.email,
                password: values.password
            })
            setLogin(info.token, info.userid, info.role)
            props.history.push('/profile')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card shadow m-1 p-1">
            <div className="card-body">
                <h1>Login</h1>
                <br />
                <input className="form-control" placeholder="E-Mail" type="email" name="email" value={values.email || ''} onChange={handleChange} />
                <br />
                <input className="form-control" placeholder="Password" type="password" name="password" value={values.password || ''} onChange={handleChange} />
                <br />
                <button className="btn btn-secondary mx-auto w-50 btn-block" onClick={handleSubmit} >Login</button>
                <Link className="btn btn-success mx-auto w-50 btn-block" to="/register">Sign Up!</Link>
            </div>
        </div>
    )
}

interface loginProps extends RouteComponentProps { }

export default Login