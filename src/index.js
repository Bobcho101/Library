import express from 'express';
import routes from './routes.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
// import { authMiddleware } from './middlewares/auth-middleware.js';
const app = express();
const PORT = 3000;
// const mongoUri = 'mongodb://127.0.0.1:27017/Library';
const mongoUri = 'mongodb+srv://bgbobi878:nF1xmfzLcd5NP1YU@cluster0.gtyux.mongodb.net/Library?retryWrites=true&w=majority';



app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        eq: (a, b) => a === b
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views')

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('src/public'))


try{
    const globalUri = mongoUri;
    try{
        await mongoose.connect(globalUri);  
    } catch(err){
        console.log(err.message);  
    }
    
} catch(err){
    console.log(err.message);
}


// app.use(authMiddleware);
app.use(routes);

app.listen(PORT, console.log(`http://localhost:${PORT}`));