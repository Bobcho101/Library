import { Router } from "express";
import homeController from "./controllers/homeController.js";
import booksController from "./controllers/booksController.js";

const routes = Router();


routes.use(homeController);
routes.use(booksController);

export default routes;