const mailer = require('nodemailer');
const { welcome } = require("./welcome_template");
const { purchase } = require("./purchase_template");
const { resetPass } =require("./resetpass_template");
require('dotenv').config();

const getEmailData = (to,name,token,template) => {
    let data = null;

    switch(template){
        case "welcome":
            data = {
                from:"Waves <ecyq66zoghc3fh7e@ethereal.email>",
                to,
                subject:`Welcome to waves ${name}`,
                html:welcome()
            }
        break;
        case "purchase":
        data = {
            from:"Waves <ecyq66zoghc3fh7e@ethereal.email>",
            to,
            subject:`Thank you for your order, ${name}!`,
            html:purchase(actionData)
        }
    break;
    case "reset_password":
        data = {
            from:"Waves <ecyq66zoghc3fh7e@ethereal.email>",
            to,
            subject:`Hello ${name}, use the enclosed link to reset your password!`,
            html:resetPass(actionData)
        }
    break;
        default:
            data;
    }

    return data;
}

const sendEmail = (to,name,token,type, actionData = null) => {

    const smtpTransport = nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port: 587,
        auth:{
            user: "ecyq66zoghc3fh7e@ethereal.email",
            pass: process.env.EMAIL_PASS
        }
    });

    const mail = getEmailData(to,name,token,type, actionData)

    smtpTransport.sendMail(mail,function(error,response){
        if (error) {
            console.log(error);
        } else {
            console.log('email sent')
        }
        smtpTransport.close();
    })
    //.then(info=>{
    //     console.log('Preview URL:' + nodemailer.getTestMessageUrl(info));
    // }

    // verify connection configuration
    // smtpTransport.verify(function(error, success) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Server is ready to take our messages');
    //     }
    // });
    
}

module.exports = { sendEmail }