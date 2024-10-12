import { Router } from "express";
import { crudRouter } from "./crud.router";

export const rootRouter = Router();

rootRouter.use("/crud", crudRouter);
