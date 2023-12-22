import express, { Request, Response } from "express"

const app = express()
app.use(express.json())
const PORT: number = 3003

// Interfaces
interface StoneStrength {
  title: string
  muscleGroups: string[]
  equipment: string[]
  exercises: StoneExercises[]
}

interface StoneExercises {
  weight: number[]
  name: string
  reps: number[]
  sets: number[]
}

app.get("/stonestrength", (req: Request, res: Response) => {
  const queryTitle: string = (req.query.title as string) || "Stone Lifting"

  const queryMuscleGroups: string[] = (req.query.muscleGroups as string[]) || [
    "Musclegroup 1",
    "Musclegroup 2",
  ]

  const queryEquip: string[] = (req.query.equipment as string[]) || [
    "Equip 1",
    "Equip 2",
  ]

  const stoneStrength: StoneStrength = {
    title: queryTitle,
    muscleGroups: queryMuscleGroups,
    equipment: queryEquip,
    exercises: [
      {
        name: "Stone Exercise 1",
        weight: [20, 40, 60],
        reps: [3, 4, 5],
        sets: [2, 2, 1],
      },
      {
        name: "Stone Exercise 2",
        weight: [60, 80, 100],
        reps: [5, 5, 5, 5, 5],
        sets: [1, 1, 1, 1, 1],
      },
      {
        name: "Stone Exercise 3",
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
