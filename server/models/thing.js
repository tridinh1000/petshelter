const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

mongoose.connect("mongodb://localhost:27017/beltexam",
        {useNewUrlParser: true},
        (err)=>console.log(err))

// const likeSchema = new mongoose.Schema({
//     likes: {
//         type: Number,
//         default: 0
//     }
// })

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: 3,
        unique: true
    },
    type: {
        type: String,
        minlength: 3,
        required: [true, "Type is required"]
    },
    description: {
        type: String,
        minlength: 3,
        required: [true, "Description is required"]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {
        type: Number,
        default: 0
    }

},{timestamps: true});

petSchema.plugin(uniqueValidator, { message: '{PATH} {VALUE} is already taken'});
const Pet = mongoose.model("products", petSchema);
module.exports = Pet;