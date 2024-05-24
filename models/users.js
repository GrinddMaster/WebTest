const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true}
        ,
        Age: {
            type: Number,
            required: true
        },
        Password: {
            type: String,
            required: true
        }
}, {timestamps: true});
const User = mongoose.model('Users', userSchema);
module.exports = User