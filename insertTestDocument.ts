import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import mongoose from "mongoose"
import { OTStrongModel } from "./utils/models/otstrong_models"

async function insertMinimalTestDocument() {
  try {
    // Ensure MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error("No MongoDB URI specified")
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)

    // Define the minimal test document
    const minimalTestDocument = {
      title: "Old Time Strong Man Training",
      muscleGroups: ["Group1, group2, group 3"],
      equipment: ["Equip 1, Equip 2"],
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

    // Create the minimal test document
    const createdMinimalTestDocument = await OTStrongModel.create(
      minimalTestDocument
    )
    console.log(
      "Minimal test document saved successfully:",
      createdMinimalTestDocument
    )
  } catch (error) {
    console.error("Error saving minimal test document to MongoDB:", error)
  } finally {
    // Close the connection explicitly
    await mongoose.connection.close()
  }
}

// Call the function to insert the minimal test document
insertMinimalTestDocument()
