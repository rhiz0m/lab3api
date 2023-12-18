import express, { Request, Response } from "express"

const app = express()
app.use(express.json())
const PORT: number = 3002

// Interfaces
interface GripStrength {
  name: string
  date: String
  description: String
  exercises: GripExercises[]
}

interface GripExercises {
  weight: number[]
  name: string
  reps: number[]
  sets: number[]
}

app.get("/gripstrength", (req: Request, res: Response) => {
  const queryName: string = (req.query.name as string) || "Grip Strength"

  const gripStrength: GripStrength = {
    name: queryName,
    date: "2023-12-24",
    description: "functional training",
    exercises: [
      {
        name: "Grip 1",
        weight: [20, 40, 60],
        reps: [3, 4, 5],
        sets: [2, 2, 1],
      },
      {
        name: "Grip 2",
        weight: [6, 80, 100],
        reps: [5, 5, 5, 5, 5],
        sets: [1, 1, 1, 1, 1],
      },
      {
        name: "Grip 3",
        weight: [100, 120, 150],
        reps: [2, 2, 2, 2, 2, 2],
        sets: [1, 1, 1, 1, 1, 1],
      },
    ],
  }

  res.json(gripStrength)
})

// Query Post + Body -Practice

app.post("/gripstrength", (req: Request, res: Response) => {
  const gripStrength: GripStrength = req.body

  res.status(201).json(gripStrength)

  console.log(gripStrength)
})

app.put("/gripstrength/:name", (req: Request, res: Response) => {
  const updateName: string = req.params.name
  const gripStrength: GripStrength = req.body

  res.status(200).json(gripStrength)
})

app.delete("/gripstrength:name", (req: Request, res: Response) => {
  const nameToDelete: string = req.params.name

  res.status(204).send()
})

export default app
