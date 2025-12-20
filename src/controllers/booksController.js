import { Router } from 'express';
import { createBook, deleteBook, getBooks, getOneBook } from '../services/booksService.js';


const booksController = Router();

booksController.get('/books', async (req, res) => {
    try{
        const books = await getBooks();
        return res.render('catalog', { books });
    } catch(err){
        console.log(err.message);
    }
});

booksController.get('/add-book', async (req, res) => {      
    return res.render('create');
});

booksController.post('/add-book', async (req, res) => {
    const formData = req.body;
    try{
        formData.bookStatus = "свободна";
        await createBook(formData);
        return res.redirect("/books");
    } catch(err){
        console.log(err.message);
    }
});

booksController.get('/books/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const currentBook = await getOneBook(id);
        console.log(currentBook);
        

        return res.render('details', { currentBook });  
    } catch(err){
        console.log(err.message);
    }
});

booksController.get('/books/:id/delete', async (req, res) => {
    try{
        const id = req.params.id;
        await deleteBook(id);
        return res.redirect('/books');
    } catch(err){
        console.log(err.message);
    }
});


export default booksController;