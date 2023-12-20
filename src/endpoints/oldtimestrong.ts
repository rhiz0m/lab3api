import express, { Request, Response } from "express"

const app = express()
app.use(express.json())
const PORT: number = 3001

// Interfaces
interface OTStrong {
  title: string
  muscleGroups: string[]
  equipment: string[]
  exercises: OTExercises[]
}

interface OTExercises {
  weight: number[]
  name: string
  reps: number[]
  sets: number[]
}

app.get("/otstrong", (req: Request, res: Response) => {
  const queryTitle: string =
    (req.query.title as string) || "Old Time Strong Man"

  const otStrong: OTStrong = {
    title: queryTitle,
    muscleGroups: ["Musclegroup 1", "Musclegroup 2"],
    equipment: ["Kettlebell", "Barbell"],
    exercises: [
      {
        name: "Bentpress",
        weight: [20, 40, 60],
        reps: [3, 4, 5],
        sets: [2, 2, 1],
      },
      {
        name: "Zercher Squats",
        weight: [60, 80, 100],
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

  res.json(otStrong)
})

// Query Post + Body -Practice

app.post("/oldtimestrong", (req: Request, res: Response) => {
  const oldTimeStrong: OTStrong = req.body

  res.status(201).json(oldTimeStrong)

  console.log(oldTimeStrong)
})

app.put("/oldtimestrong/:title", (req: Request, res: Response) => {
  const updateTitle: string = req.params.title
  const updatedOldTimeStrong: OTStrong = req.body

  res.status(204).json(updatedOldTimeStrong)
})

app.delete("/oldtimestrong/:title", (req: Request, res: Response) => {
  const titleToDelete: string = req.params.title

  res.status(204).send()
})

export default app
