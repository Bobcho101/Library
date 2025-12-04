import mongoose, { Schema, model } from "mongoose";

const bookSchema = ({
    bookName: {
        type: String,
        required: [true, "Book name is required!"],
    },
    bookAuthor: {
        type: String,
        required: [true, "Author is required!"],
    },
    bookStatus: {
        type: String,
        required: true,
        enum: ["свободна", "заета", "изгубена", "повредена"]
    },
    bookImage: {
        type: String,
        required: false,
    },
});

const Book = model('Book', bookSchema);

export default Book;