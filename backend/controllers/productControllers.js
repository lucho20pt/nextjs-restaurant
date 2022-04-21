import Product from '@/models/Product'
// import ErrorHandler from '@/utils/errorHandler'
import catchAsyncErrors from '@/middlewares/catchAsyncErrors'

// Get All Products => /api/products
const allProducts = catchAsyncErrors(async (req, res) => {
  //
  const products = await Product.find()
  res.status(200).json({
    success: true,
    products
  })
})

// Create New Product => /api/products
const newProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body)

  res.status(200).json({
    success: true,
    product
  })
})

export { allProducts, newProduct }
