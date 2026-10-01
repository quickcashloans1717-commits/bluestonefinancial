import nodemailer from "nodemailer";

const formatHTML = (data) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; }
    .container { max-width: 900px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #ffffff; padding: 24px; border-bottom: 3px solid #2563EB; }
    .header-title { font-size: 24px; font-weight: bold; color: #1f2937; margin: 0; display: flex; align-items: center; }
    .header-icon { margin-right: 12px; }
    .timestamp-box { background-color: #dbeafe; border-left: 4px solid #2563EB; padding: 16px; margin: 24px; border-radius: 4px; }
    .timestamp-text { margin: 0; color: #1e40af; font-weight: 600; }
    .section { margin: 24px; }
    .section-header { background-color: #f3f4f6; padding: 12px 16px; border-left: 4px solid #2563EB; margin-bottom: 16px; }
    .section-title { font-size: 16px; font-weight: bold; color: #1f2937; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }
    .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .field { background-color: #ffffff; border: 1px solid #e5e7eb; padding: 12px 16px; border-radius: 4px; }
    .field-label { font-size: 12px; font-weight: 600; color: #2563EB; text-transform: uppercase; margin: 0 0 4px 0; }
    .field-value { font-size: 14px; color: #1f2937; margin: 0; word-wrap: break-word; }
    .full-width { grid-column: span 2; }
    .footer { background-color: #f9fafb; padding: 24px; text-align: center; color: #6b7280; font-size: 12px; margin-top: 32px; }
    @media only screen and (max-width: 600px) {
      .grid { grid-template-columns: 1fr; }
      .full-width { grid-column: span 1; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="header-title">
        <span class="header-icon">📋</span>
        New Form Submission Received
      </h1>
    </div>
    
    <div class="timestamp-box">
      <p class="timestamp-text">Submitted: ${new Date().toISOString()}</p>
    </div>
    
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">📌 Submission Details</h2>
      </div>
      <div class="grid">
        ${Object.entries(data).map(([k, v]) => `
        <div class="field">
          <p class="field-label">${k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</p>
          <p class="field-value">${v || "N/A"}</p>
        </div>
        `).join('')}
      </div>
    </div>
    
    <div class="footer">
      <p>This application was submitted successfully via the Website System.</p>
      <p>&copy; ${new Date().getFullYear()} BlueStone Financial. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const formatText = (data) => `New Form Submission Received

${Object.entries(data).map(([k, v]) => `${k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: ${v}`).join('\n')}
`;

export const sendLoanApplicationEmail = async (data) => {
  const {
    SMTP_HOST,
    SMTP_PORT = 465,
    SMTP_USER,
    SMTP_PASS,
    RECIPIENT_EMAIL,
    EMAIL_FROM_NAME = "BlueStone Financial Applications",
  } = process.env;

  const missingVars = [];
  if (!SMTP_HOST) missingVars.push("SMTP_HOST");
  if (!SMTP_USER) missingVars.push("SMTP_USER");
  if (!SMTP_PASS) missingVars.push("SMTP_PASS");
  if (!RECIPIENT_EMAIL) missingVars.push("RECIPIENT_EMAIL");

  console.log("=== NEW FORM SUBMISSION RECEIVED ===");
  console.log(JSON.stringify(data, null, 2));

  if (missingVars.length > 0) {
    console.warn(`[emailService WARNING] Missing Vercel Environment Variables: ${missingVars.join(", ")}. Form data was logged to Vercel runtime logs.`);
    return { sent: false, reason: "MISSING_ENV_VARS", missingVars };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `${EMAIL_FROM_NAME} <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `New Application Received - ${data.formType || "Loan Form"}`,
      text: formatText(data),
      html: formatHTML(data),
    });

    console.log("[emailService SUCCESS] Email sent successfully to", RECIPIENT_EMAIL);
    return { sent: true };
  } catch (err) {
    console.error("[emailService ERROR] Failed to send email via SMTP:", err.message);
    return { sent: false, error: err.message };
  }
};

