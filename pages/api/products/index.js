import dbConnect from '@/lib/dbConnect'
import nextConnect from 'next-connect'
import onError from '@/middlewares/onError'
import { allProducts, newProduct } from '@/controllers/productControllers'

const handler = nextConnect()

dbConnect(onError)

handler.get(allProducts)

handler.post(newProduct)

export default handler
