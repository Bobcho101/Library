import { Router } from 'express';
import { getBooks } from '../services/booksService.js';

const booksController = Router();

booksController.get('/books', async (req, res) => {
    const books = await getBooks();
    console.log(books);
    
    return res.render('catalog', { books });
});

booksController.get('/add-book', async (req, res) => {      

    return res.render('create');
});


booksController.post('/add-book', async (req, res) => {

})

export default booksController;