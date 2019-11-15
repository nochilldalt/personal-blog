import * as React from 'react'
import { useState } from 'react';
import { json, setLogin } from '../utils/api-services';
import { RouteComponentProps } from 'react-router';
import useForm from '../utils/useForm'

const Register: React.FC<RegisterProps> = (props) => {

    const { values, handleChange, handleSubmit } = useForm(handleSignUp)

    async function handleSignUp() {
      try {
          let info:any = await json('/auth/register', 'POST',{
              name:values.name,
              email:values.email,
              password:values.password
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
                <h1>Register</h1>
                <br />
                <input className="form-control" placeholder="Name" type="text" name="name" value={values.name || ""} onChange={handleChange} />
                <br />
                <input className="form-control" placeholder="E-Mail" type="email" name="email" value={values.email || ""} onChange={handleChange} />
                <br />
                <input className="form-control" placeholder="Password" type="password" name="password" value={values.password|| ""} onChange={handleChange} />
                <br />
                <button className="btn btn-secondary mx-auto w-50 btn-block" onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    )
}

interface RegisterProps extends RouteComponentProps { }

export default Register