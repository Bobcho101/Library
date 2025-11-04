import { Router } from "express";
import homeController from "./controllers/homeController";

const routes = Router();


routes.use(homeController);

export default routes;