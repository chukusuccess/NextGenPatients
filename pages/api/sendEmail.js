import emailjs from "@emailjs/browser";

const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const userId = "YOUR_USER_ID";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const templateParams = {
      from_name: "DummyNextGen",
      to_name: name,
      message: message,
      to_email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent:", response);
        res.status(200).json({ message: "Email sent successfully" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email" });
      });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
