import 'dotenv/config'

export const PORT = process.env.PORT || 5000

export const MONGO_URL = process.env.MONGO_URL
export const REDIS_URL = process.env.REDIS_URL

export default { MONGO_URL, PORT, REDIS_URL }
