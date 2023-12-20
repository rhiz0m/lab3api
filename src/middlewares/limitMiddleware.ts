import rateLimit from "express-rate-limit"

export const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  handler: (req, res) => {
    console.log("Rate limit exceeded:", req.ip)
    res.status(429).send("Too Many Requests")
  },
})
