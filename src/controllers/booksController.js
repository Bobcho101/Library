import { Router } from 'express';
import { createBook, getBooks } from '../services/booksService.js';
import Book from '../models/BooksModel.js';

const booksController = Router();

booksController.get('/books', async (req, res) => {
    const books = await getBooks();

    return res.render('catalog', { books });
});

booksController.get('/add-book', async (req, res) => {      

    return res.render('create');
});


booksController.post('/add-book', async (req, res) => {
    const formData = req.body;
    try{
        formData.bookStatus = "свободна";
        await createBook(formData);
    } catch(err){
        console.log(err.message);
    }
    return res.redirect("/books");
});

export default booksController;