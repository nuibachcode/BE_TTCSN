import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const configCORS = (app) => {
  const allowedOrigins = process.env.FE_URL
    ? process.env.FE_URL.split(",").map((url) => url.trim())
    : ["http://localhost:5173"];

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
