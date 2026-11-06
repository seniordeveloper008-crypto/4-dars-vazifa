import nodemailer from "nodemailer";
import { config } from "dotenv";
config()

const transporter = nodemailer.createTransport({ 
   service:"gmail", 
    auth: { 
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS
    }
});

async function sendOtpEmail(to,username) { 
        await transporter.sendMail({ 
             from:`Najot talim`,
        to,
        subject:"Imtixon natijalari",
        html:`
            <h2>Assalomu alaykum ${username}</h2>
            <p>Ahvollariz yaxshimi Men Mehrojman n11 dagi bupti yaxshi dam oling✌️😁🥷👨‍💻😴</p>
        `
        });  
   
}

export{
    sendOtpEmail
}