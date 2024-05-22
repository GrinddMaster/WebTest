const mongoose = require("mongoose");
const Schema =  mongoose.Schema;


const planeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    Information: {
        type: String,
        required: true
    }
}, {timestamps: true});
const Plane = mongoose.model('Planes', planeSchema);
module.exports = Plane