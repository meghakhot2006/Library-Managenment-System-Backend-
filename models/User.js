const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "User"
    },

    borrowedBooks: [
        {
            book: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Book"
            },

            borrowDate: {
                type: Date,
                default: Date.now
            },

            dueDate: {
                type: Date
            },

            returned: {
                type: Boolean,
                default: false
            }
        }
    ]

}, {
    timestamps: true
});


const User = mongoose.model("User", userSchema);

module.exports = User;