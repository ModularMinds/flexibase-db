import { Router } from "express";
import { dbRouter } from "./crud.routes";
import { adminRouter } from "./admin.routes";
import { adminAuthenticator } from "../middlewares";

export const rootRouter = Router();

rootRouter.use("/db/admin", adminAuthenticator, adminRouter);
rootRouter.use("/db", dbRouter);
