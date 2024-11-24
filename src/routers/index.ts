import { Router } from "express";
import { dbRouter } from "./crud.routes";

export const rootRouter = Router();

rootRouter.use("/db/admin", dbRouter);
rootRouter.use("/db", dbRouter)
