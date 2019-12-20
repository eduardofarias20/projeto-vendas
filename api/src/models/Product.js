const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    unityValue:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);