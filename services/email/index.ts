// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// class EmailService {
//     private transporter;

//     constructor() {
//         this.transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,  // Use environment variables
//                 pass: process.env.EMAIL_PASS
//             }
//         });
//     }

//     async sendEmail(formData: { email: string; subject: string; message: string }) {
//         try {
//             const mailOptions = {
//                 from: process.env.EMAIL_USER,
//                 to: formData.email,
//                 subject: formData.subject,
//                 text: formData.message
//             };

//             const info = await this.transporter.sendMail(mailOptions);
//             console.log("Email sent successfully:", info.response);
//             return { success: true, message: "Email sent successfully" };
//         } catch (error) {
//             console.error("Error sending email:", error);
//             return { success: false, error: error.message };
//         }
//     }
// }

// export default EmailService;
