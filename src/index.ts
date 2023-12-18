import express, { Request, Response } from "express"
import oldTimeStrong from "./endpoints/oldtimestrong"
import gripStrength from "./endpoints/gripstrength"
import stoneStrength from "./endpoints/stonestrength"
import armWrestling from "./endpoints/armwrestling"

const app = express()
const PORT: number = 3000

app.use(express.json())
app.use("/", oldTimeStrong)
app.use("/", gripStrength)
app.use("/", stoneStrength)
app.use("/", armWrestling)

/*
// Interfaces
interface OldTimeStrong {
  name: string
  date: String
  description: String
  exercises: OldTimeExercises[]
}

interface OldTimeExercises {
  weight: number[]
  name: string
  reps: number[]
  sets: number[]
}

// Endpoints
*/
app.get("/", (req: Request, res: Response) => {
  res.send("This is the Homepage!")
})

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
