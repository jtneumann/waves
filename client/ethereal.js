'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    security: true,
    auth: {
        user: 'ecyq66zoghc3fh7e@ethereal.email',
        pass: 'MkTb8Gs9gnakSxfnyY'
        //EMAIL_PASS=fulltone1985
    }
});

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// PHPMailer configuration
// $mail = new PHPMailer(true);
// $mail->isSMTP();
// $mail->Host = 'smtp.ethereal.email';
// $mail->SMTPAuth = true;
// $mail->Username = 'ecyq66zoghc3fh7e@ethereal.email';
// $mail->Password = 'MkTb8Gs9gnakSxfnyY';
// $mail->SMTPSecure = 'tls';
// $mail->Port = 587;

// SwiftMailer configuration
// $transport = (new Swift_SmtpTransport('smtp.ethereal.email', 587, 'tls'))
//   ->setUsername('ecyq66zoghc3fh7e@ethereal.email')
//   ->setPassword('MkTb8Gs9gnakSxfnyY');

// SMTP configuration
// Host	smtp.ethereal.email
// Port	587

// Security	STARTTLS
// Username	ecyq66zoghc3fh7e@ethereal.email
// Password	MkTb8Gs9gnakSxfnyY
// IMAP configuration
// Host	imap.ethereal.email
// Port	993

// Security	TLS
// Username	ecyq66zoghc3fh7e@ethereal.email
// Password	MkTb8Gs9gnakSxfnyY
// POP3 configuration
// Host	pop3.ethereal.email
// Port	995

// // Security	TLS
// Username	ecyq66zoghc3fh7e@ethereal.email
// Password	MkTb8Gs9gnakSxfnyY