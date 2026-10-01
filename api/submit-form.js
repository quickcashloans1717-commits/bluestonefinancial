import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = req.body || {};
    console.log("=== VERCEL SUBMISSION RECEIVED ===");
    console.log(JSON.stringify(data, null, 2));

    const {
      SMTP_HOST,
      SMTP_PORT = 465,
      SMTP_USER,
      SMTP_PASS,
      RECIPIENT_EMAIL,
      EMAIL_FROM_NAME = "BlueStone Financial Applications",
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !RECIPIENT_EMAIL) {
      console.warn("[WARNING] Missing SMTP Environment Variables on Vercel. Submission saved to Vercel logs.");
      return res.status(200).json({
        success: true,
        message: "Form submitted successfully",
        note: "Data logged to Vercel runtime logs"
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const formatText = (d) => `New Form Submission Received\n\n` + 
      Object.entries(d).map(([k, v]) => `${k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: ${v}`).join('\n');

    const formatHTML = (d) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>📋 New Form Submission Received</h2>
  <p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
    ${Object.entries(d).map(([k, v]) => `
      <tr>
        <td style="background:#f3f4f6; font-weight:bold; width: 40%;">${k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
        <td>${v || "N/A"}</td>
      </tr>
    `).join('')}
  </table>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `${EMAIL_FROM_NAME} <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `New Application Received - ${data.formType || "Loan Form"}`,
      text: formatText(data),
      html: formatHTML(data),
    });

    console.log("[SUCCESS] Email sent successfully to", RECIPIENT_EMAIL);
    return res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("[ERROR] Form processing exception:", error);
    return res.status(200).json({
      success: true,
      message: "Form submitted",
      error: error.message
    });
  }
}
