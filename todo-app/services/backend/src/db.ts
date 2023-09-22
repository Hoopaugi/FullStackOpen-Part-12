import mongoose from "mongoose"

import { MONGO_URL } from "./config"

const connect = async () => {
  if (!MONGO_URL) {
    throw new Error('MONGO_URL missing from ENV')
  }

  console.log(`[Server] Connecting to DB at ${MONGO_URL}`)

  await mongoose.connect(MONGO_URL)
}

const disconnect = async () => {
  console.log('Disconnecting DB')

  await mongoose.connection.close()
}

export default { connect, disconnect }
