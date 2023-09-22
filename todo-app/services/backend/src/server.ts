import app from "./app"
import { PORT } from "./config"
import db from "./db";
import redis from "./redis";

const start = async () => {
  try {
    await db.connect()

    await redis.connect()

    app.listen(PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${PORT}`);
    })
  } catch(error) {
    await db.disconnect()

    await redis.disconnect()

    throw error
  }
}

start()
