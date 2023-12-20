import cors from "cors"
import { rateLimitMiddleware } from "./limitMiddleware"

// Specify CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend's origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (e.g., cookies, authorization headers)
}

// Export the configured CORS middleware
export const corsMiddleware = [cors(corsOptions), rateLimitMiddleware]