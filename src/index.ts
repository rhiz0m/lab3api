import express, { Request, Response } from "express"
import { corsMiddleware } from "./middlewares/corsMiddleware"
import { rateLimitMiddleware } from "./middlewares/limitMiddleware"
import oldTimeStrong from "./endpoints/oldtimestrong"
import gripStrength from "./endpoints/gripstrength"
import stoneStrength from "./endpoints/stonestrength"
import armWrestling from "./endpoints/armwrestling"

const app = express()
const PORT: number = 3000

app.use(corsMiddleware)
app.use(rateLimitMiddleware)
app.use(express.json())

app.use("/", oldTimeStrong)
app.use("/", gripStrength)
app.use("/", stoneStrength)
app.use("/", armWrestling)

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
