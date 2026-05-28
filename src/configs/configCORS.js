import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const configCORS = (app) => {
  const allowedOrigins = process.env.FE_URL
    ? process.env.FE_URL.split(",").map((url) => url.trim())
    : ["http://localhost:5173"];

  // Luôn cho phép localhost cho việc phát triển và test ở local
  const localOrigins = ["http://localhost:5173", "http://localhost:3000", "http://localhost:5174"];
  localOrigins.forEach((origin) => {
    if (!allowedOrigins.includes(origin)) {
      allowedOrigins.push(origin);
    }
  });

  // Whitelist Vercel production frontend URL
  const prodOrigins = ["https://fe-ttcsn-sw8n.vercel.app"];
  prodOrigins.forEach((origin) => {
    if (!allowedOrigins.includes(origin)) {
      allowedOrigins.push(origin);
    }
  });

  if (!allowedOrigins.includes("https://mydomain.com")) {
    allowedOrigins.push("https://mydomain.com");
  }

  app.use(
    cors({
      origin: allowedOrigins,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );
};

export default configCORS;
