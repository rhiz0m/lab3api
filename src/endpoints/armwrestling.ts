import express, { Request, Response } from "express"

const app = express()
app.use(express.json())
const PORT: number = 3004

// Interfaces
interface ArmWrestling {
  name: string
  date: String
  description: String
  exercises: ArmwrestlingExercises[]
}

interface ArmwrestlingExercises {
  weight: number[]
  name: string
  reps: number[]
  sets: number[]
}

app.get("/armwrestling", (req: Request, res: Response) => {
  const queryName: string = (req.query.name as string) || "Arm Wrestling"

  const armWrestling: ArmWrestling = {
    name: queryName,
    date: "2023-12-24",
    description: "functional training",
    exercises: [
      {
        name: "Exercise 1",
        weight: [20, 40, 60],
        reps: [3, 4, 5],
        sets: [2, 2, 1],
      },
      {
        name: "Exercise 2",
        weight: [6, 80, 100],
        reps: [5, 5, 5, 5, 5],
        sets: [1, 1, 1, 1, 1],
      },
      {
        name: "Exercise 3",
        weight: [100, 120, 150],
        reps: [2, 2, 2, 2, 2, 2],
        sets: [1, 1, 1, 1, 1, 1],
      },
    ],
  }

  res.json(armWrestling)
})

// Query Post + Body -Practice

app.post("/armwrestling", (req: Request, res: Response) => {
  const armWrestling: ArmWrestling = req.body

  res.status(201).json(armWrestling)

  console.log(armWrestling)
})

app.put("/armwrestling/:name", (req: Request, res: Response) => {
  const updateName: string = req.params.name
  const armWrestling: ArmWrestling = req.body

  res.status(200).json(armWrestling)
})

app.delete("/armwrestling:name", (req: Request, res: Response) => {
  const nameToDelete: string = req.params.name

  res.status(204).send()
})

export default app
