import mongoose from 'mongoose'

/* ProductSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a Title for this Product.'],
      maxlength: [60, 'Title cannot be more than 60 characters']
    },
    desc: {
      type: String,
      required: [true, 'Please provide a Description for this Product.'],
      maxlength: [260, 'Description cannot be more than 260 characters']
    },
    image: {
      type: String,
      required: [true, 'Please provide an Image url for this Product.']
    },
    prices: {
      type: [Number],
      required: [true, 'Please provide a Price for this Product.']
    },
    extraOptions: {
      type: [
        {
          text: {
            type: String,
            required: [
              true,
              'Please provide a Text for this Product Extra Option.'
            ]
          },
          price: {
            type: Number,
            required: [
              true,
              'Please provide a Price for this Product Extra Option.'
            ]
          }
        }
      ]
    }
  },
  { timestamps: true }
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
