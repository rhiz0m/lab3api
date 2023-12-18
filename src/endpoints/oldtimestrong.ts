import express, { Request, Response } from "express"

const app = express()
app.use(express.json())
const PORT: number = 3001

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

app.get("/oldtimestrong", (req: Request, res: Response) => {
  const queryName: string = (req.query.name as string) || "Old Time Strong Man"

  const oldTimeStrong: OldTimeStrong = {
    name: queryName,
    date: "2023-12-24",
    description: "functional training",
    exercises: [
      {
        name: "Bentpress",
        weight: [20, 40, 60],
        reps: [3, 4, 5],
        sets: [2, 2, 1],
      },
      {
        name: "Zercher Squats",
        weight: [6, 80, 100],
        reps: [5, 5, 5, 5, 5],
        sets: [1, 1, 1, 1, 1],
      },
      {
        name: "Jefferson Deadlift",
        weight: [100, 120, 150],
        reps: [2, 2, 2, 2, 2, 2],
        sets: [1, 1, 1, 1, 1, 1],
      },
    ],
  }

  res.json(oldTimeStrong)
})

// Query Post + Body -Practice

app.post("/oldtimestrong", (req: Request, res: Response) => {
  const oldTimeStrong: OldTimeStrong = req.body

  res.status(201).json(oldTimeStrong)

  console.log(oldTimeStrong)
})

app.put("/oldtimestrong/:name", (req: Request, res: Response) => {
  const updateName: string = req.params.name
  const updatedOldTimeStrong: OldTimeStrong = req.body

  res.status(200).json(updatedOldTimeStrong)
})

app.delete("/oldtimestrong/:name", (req: Request, res: Response) => {
  const nameToDelete: string = req.params.name

  res.status(204).send()
})

export default app
