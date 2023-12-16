import express, { Request, Response } from "express"

const app = express()
const PORT: number = 3000

app.use(express.json())

// Interfaces
interface OldTimeStrong {
  name: string
  reps: number
  sets: number
  exercises: string[]
}

// Endpoints
// Example for name: http://localhost:3000/oldtimestrong?name=bentpress

app.get("/", (req: Request, res: Response) => {
  res.send("Homepage!")
})

app.get("/test", (req: Request, res: Response) => {
  res.send("This is my first test End-Point with Express!")
})

// Query Practice
app.get("/oldtimestrong", (req: Request, res: Response) => {
  const queryName: string = req.query.name as string

  const oldTimeStrong: OldTimeStrong = {
    //name: "bentpress"
    name: queryName,
    reps: 15,
    sets: 3,
    exercises: ["Bentpress", "Zercher Squats", "Jefferson Deadlift"],
  }

  res.json(oldTimeStrong)
})

// Query Post + Body -Practice

app.post("/oldtimestrong", (req: Request, res: Response) => {
  const oldTimeStrong: OldTimeStrong = req.body

  res.status(201).json(oldTimeStrong)

  console.log(oldTimeStrong)
})

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
