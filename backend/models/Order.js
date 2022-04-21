import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: [true, 'Please provide a Customer for this Order.'],
      maxlength: [60, 'Customer cannot be more than 60 characters']
    },
    address: {
      type: String,
      required: [true, 'Please provide a Address for this Order.'],
      maxlength: [260, 'Address cannot be more than 260 characters']
    },
    total: {
      type: String,
      required: [true, 'Please provide a price Total for this Order.']
    },
    status: {
      type: Number,
      default: 0
    },
    method: {
      type: Number,
      required: [true, 'Please provide a payment Method for this Order.']
    }
  },
  { timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
