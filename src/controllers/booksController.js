import { Router } from 'express';
import { getBooks } from '../services/booksService.js';

const booksController = Router();

booksController.get('/books', async (req, res) => {
    const books = await getBooks();
    console.log(books);
    
    return res.render('catalog', { books });
});

export default booksController;