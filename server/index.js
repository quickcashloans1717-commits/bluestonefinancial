import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { sendLoanApplicationEmail } from "./emailService.js";

const app = express();
app.set("trust proxy", 1);
const port = process.env.PORT || 3001;

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "").split(",").map((origin) => origin.trim()).filter(Boolean);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/submit-form", async (req, res) => {
  try {
    const data = req.body;

    if (!data || typeof data !== "object") {
      return res.status(400).json({ message: "Invalid payload" });
    }

    const emailResult = await sendLoanApplicationEmail(data);

    return res.status(200).json({
      message: "Form submitted successfully",
      status: "success",
      emailStatus: emailResult,
    });
  } catch (error) {
    console.error("Form submission endpoint caught exception:", error);
    return res.status(200).json({
      message: "Form submitted",
      status: "partial_success",
      error: error.message,
    });
  }
});

app.use((err, req, res, next) => {
  console.error("Unhandled error", err);
  res.status(500).json({ message: "Internal server error" });
});

if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Loan application server running on port ${port}`);
  });
}

export default app;
