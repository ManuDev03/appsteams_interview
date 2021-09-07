
const mongoose = require("mongoose");
const {Schema} = mongoose;

const bookModel = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    dateOfPublish: {
        type: String,
        required: true,
        default: new Date().toUTCString()
    },
    language: {
        type: String,
        default: "NodeJs"
    },
    read: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("book", bookModel);
