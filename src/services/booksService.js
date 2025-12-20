import Book from "../models/BooksModel.js";

export async function getBooks() { 
    return await Book.find();
}

export async function createBook(formData) {
    return await Book.create(formData);
}

export async function getOneBook(id) {
    return await Book.findById(id);
}