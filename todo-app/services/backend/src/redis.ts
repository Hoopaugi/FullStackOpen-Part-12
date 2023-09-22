import * as redis from 'redis'

import { REDIS_URL } from './config'
import { RedisClientType } from '@redis/client'

let client: RedisClientType

const connect = async () => {
  if (!REDIS_URL) {
    throw new Error('REDIS_URL missing from ENV')
  }

  console.log(`[Server] Connecting to redis at ${REDIS_URL}`)

  client = redis.createClient({
    url: REDIS_URL
  })

  client.on('error', (error) => {
    console.log('[Server] error occured: ', error)
  })

  await client.connect()

}

const disconnect = async () => {
  if(client) {
    await client.disconnect()
  }
}

const get = async (key: string) => {
  return await client.get(key)
}

const set = async (key: string, value: string) => {
  return client.set(key, value)
}

export default { connect, disconnect, get, set }
