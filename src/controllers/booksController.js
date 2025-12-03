import { Router } from 'express';

const booksController = Router();

booksController.get('/books', (req, res) => {
    return res.render('catalog');
});

export default booksController;