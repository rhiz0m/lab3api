import { OTStrong, OTExercises } from "../types/otstrong_type"
import mongoose, { Schema } from "mongoose"

const otExerciseSchema = new Schema<OTExercises>({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: [Number],
    required: true,
  },
  reps: {
    type: [Number],
    required: true,
  },
  sets: {
    type: [Number],
    required: true,
  },
})

const otStrongSchema = new Schema<OTStrong>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      default: "DefaultTitle",
    },
    muscleGroups: {
      type: [String],
      required: true,
    },
    equipment: {
      type: [String],
      required: true,
    },
    exercises: {
      type: [otExerciseSchema],
    },
  },
  { strict: true }
)

otStrongSchema.methods.fullName = function () {
  const exerciseNames = (this.exercises as OTExercises[])
    .map((exercise: OTExercises) => exercise.name)
    .join(", ")

  return `${this.title}, ${this.muscleGroups.join(", ")}, ${this.equipment.join(
    ", "
  )}, Exercises: ${exerciseNames}`
}

export const OTStrongModel =
  mongoose.models.OTStrongModel ||
  mongoose.model<OTStrong>("OTStrongModel", otStrongSchema, "otstrong")
