import express, { Request, Response } from "express"

const app = express()
app.use(express.json())
const PORT: number = 3003

// Interfaces
interface StoneStrength {
  name: string
  date: String
  description: String
  exercises: StoneExercises[]
}

interface StoneExercises {
  weight: number[]
  name: string
  reps: number[]
  sets: number[]
}

app.get("/stonestrength", (req: Request, res: Response) => {
  const queryName: string = (req.query.name as string) || "Stone Strength"

  const stoneStrength: StoneStrength = {
    name: queryName,
    date: "2023-12-24",
    description: "functional training",
    exercises: [
      {
        name: "Stone 1",
        weight: [20, 40, 60],
        reps: [3, 4, 5],
        sets: [2, 2, 1],
      },
      {
        name: "Stone 2",
        weight: [6, 80, 100],
        reps: [5, 5, 5, 5, 5],
        sets: [1, 1, 1, 1, 1],
      },
      {
        name: "Stone 3",
        weight: [100, 120, 150],
        reps: [2, 2, 2, 2, 2, 2],
        sets: [1, 1, 1, 1, 1, 1],
      },
    ],
  }

  res.json(stoneStrength)
})

// Query Post + Body -Practice

app.post("/stonestrength", (req: Request, res: Response) => {
  const stoneStrength: StoneStrength = req.body

  res.status(201).json(stoneStrength)

  console.log(stoneStrength)
})

app.put("/stonestrength/:name", (req: Request, res: Response) => {
  const updateName: string = req.params.name
  const stoneStrength: StoneStrength = req.body

  res.status(200).json(stoneStrength)
})

app.delete("/stonestrength:name", (req: Request, res: Response) => {
  const nameToDelete: string = req.params.name

  res.status(204).send()
})

export default app
