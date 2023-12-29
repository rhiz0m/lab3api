import cors from "cors"
import { rateLimitMiddleware } from "./limitMiddleware"

// Specify CORS options
const corsOptions = {
  origin: "http://localhost:3000", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, 
}

export const corsMiddleware = [cors(corsOptions), rateLimitMiddleware]