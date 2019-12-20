const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    document:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

ClientSchema.plugin(mongoosePaginate);

mongoose.model('Client', ClientSchema);