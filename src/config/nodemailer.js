const nodemailer = require('nodemailer');

export const transport = nodemailer.createTransport({
  secure: process.env.MAIL_PORT === '465' ? true : false,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
