import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInstock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamp: true
})

const Product = mongoose.model('Product', productSchema)

export default Product