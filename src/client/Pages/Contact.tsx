import * as React from 'react'
import { useState } from 'react'
import { json } from '../utils/api-services';


const Contact: React.FC<ContactProps> = () => {

    const [message, setMessage] = useState<string>('')

    const sendEmail = async () => {
        try {
            await json('/api/contact', 'POST', { message })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card shadow m-1 p-1">
            <div className="card-body">
                <h1>Contact</h1>
                <h4>Want to reach out to the developer of this website? Found a problem we should know about? This is the place to do so.</h4>
                <br />
                <textarea className="form-control" rows={20} placeholder="Write your E-mail here" value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
                <br />
                <small>This is a no relpy email service so if you don't here back from us thats why. If its a matter that requires some more correspondence please leave a vaild E-mail to be reached out to from. -Thanks Blogs-R-Us Dev Team</small>
                <br />
                <br/>
                <button className="btn btn-secondary mx-auto w-50 btn-block" onClick={sendEmail}>Send Email</button>
            </div>
        </div>
    )
}

interface ContactProps { }

export default Contact