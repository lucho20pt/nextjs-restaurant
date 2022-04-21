import dbConnect from '@/lib/dbConnect'
import nextConnect from 'next-connect'
import onError from '@/middlewares/onError'
import { allProducts } from '@/controllers/productControllers'

const handler = nextConnect()

dbConnect(onError)

handler.get(allProducts)

export default handler
