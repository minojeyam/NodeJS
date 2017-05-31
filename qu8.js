var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Minerva Jeyarajah',
    pass: 'XXXXXXXX'
  }
});

var mailOptions = {
  from: 'maryannminerva@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'That is easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
