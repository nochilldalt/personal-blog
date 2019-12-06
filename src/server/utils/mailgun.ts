import * as mailgunloader from "mailgun-js";
import config from "../config";


let mailgun = mailgunloader({
  apiKey: config.mailgun.apiKey,
  domain: config.mailgun.domain
});

const sendEmail = (to: string, from: string, subject:string, content: string, ) => {
    let data = {
        to,
        from,
        subject,
        text: content
    }
    return mailgun.messages().send(data)
}




export default sendEmail;
