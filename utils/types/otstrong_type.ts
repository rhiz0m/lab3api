export interface OTStrong {
  title: string
  muscleGroups: string[]
  equipment: string[]
  exercises: OTExercises[]
}

export interface OTExercises {
  weight: number[]
  name: string
  reps: number[]
  sets: number[]
}
