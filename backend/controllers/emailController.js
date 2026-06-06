const Email = require("../models/Email");
const transporter = require("../utils/mailSender");

const sendEmail = async (req, res) => {
  try {
    const { subject, body, recipients } = req.body;

    if (!subject || !body || !recipients?.length) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients.join(","),
      subject,
      text: body,
    });

    const emailRecord = await Email.create({
      subject,
      body,
      recipients,
      status: "Success",
    });

    res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
      data: emailRecord,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getEmailHistory = async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: emails.length,
      data: emails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  sendEmail,
  getEmailHistory,
};