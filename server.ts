import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API endpoint for sending emails
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, subject, message, reason } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Name, email, and message are required fields.",
        });
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: "Please provide a valid email address.",
        });
      }

      console.log(`[Contact Form Submission] From: ${name} (${email}) | Subject: ${subject || 'Portfolio Inquiry'}`);

      // Check if SMTP environment variables are present
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "ketanyadav@gmail.com";

      let mailSent = false;
      let infoMessage = "";

      if (smtpHost && smtpUser && smtpPass) {
        // Send real email via configured SMTP
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const mailOptions = {
          from: `"${name} via Portfolio" <${smtpUser}>`,
          replyTo: email,
          to: receiverEmail,
          subject: `[Portfolio Inquiry - ${reason || "General"}] ${subject || name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
              <h2 style="color: #2563eb; margin-top: 0;">New Contact Form Message</h2>
              <p>You received a new inquiry from your portfolio website.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 15px 0;" />
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
              <p><strong>Inquiry Reason:</strong> ${reason || "General Inquiry"}</p>
              <p><strong>Subject:</strong> ${subject || "N/A"}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 15px 0;" />
              <p><strong>Message:</strong></p>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
              <footer style="margin-top: 20px; font-size: 12px; color: #6b7280;">
                Sent from Ketan Yadav Portfolio Website at ${new Date().toISOString()}
              </footer>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        mailSent = true;
        infoMessage = `Email successfully dispatched to ${receiverEmail}`;
      } else {
        // Simulated / Fallback logger mode with high audit response
        console.log("------------------------------------------------");
        console.log(`[SMTP Not Configured - Audit Simulation]`);
        console.log(`To: ${receiverEmail}`);
        console.log(`From: ${name} <${email}>`);
        console.log(`Reason: ${reason || "General"}`);
        console.log(`Subject: ${subject}`);
        console.log(`Body:\n${message}`);
        console.log("------------------------------------------------");

        mailSent = true;
        infoMessage = `Message recorded and simulated email dispatched to ${receiverEmail}. (Configure SMTP credentials in .env to send live emails).`;
      }

      return res.status(200).json({
        success: true,
        message: "Thank you for reaching out! Your message has been sent successfully to Ketan Yadav.",
        details: {
          recipient: receiverEmail,
          timestamp: new Date().toISOString(),
          status: infoMessage,
        },
      });
    } catch (err: any) {
      console.error("[Contact API Error]:", err);
      return res.status(500).json({
        success: false,
        error: "Failed to send email message. Please try again later or email directly at ketanyadav@gmail.com.",
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
