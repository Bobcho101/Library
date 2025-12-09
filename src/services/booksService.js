import Book from "../models/BooksModel.js";

export async function getBooks() {
    return await Book.find();
}