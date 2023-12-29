import { dbConnect } from "./utils/db" 

async function testDbConnection() {
  try {
    const db = await dbConnect()
  
    console.log("Database connection check successful")
    await db.connection.close()
  } catch (error) {
    console.error("Error checking database connection:", error)
  }
}

// Call the function to test the database connection
testDbConnection()
