import Book from "../models/BooksModel.js";

export async function getBooks() { 
    return await Book.find();
}

export async function createBook(data) {
    return await Book.create(data);
}

export async function getOneBook(id) {
    return await Book.findById(id);
}

export async function deleteBook(id) {
    await Book.findByIdAndDelete(id);
}

export async function updateBook(id, data) {
    await Book.findByIdAndUpdate(id, data, { runValidators: true });
}