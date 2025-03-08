const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

exports.sendEmail = (to, subject, text) => {
  transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text }, (err, info) => {
    if (err) console.log(err);
    else console.log(info.response);
  });
};
