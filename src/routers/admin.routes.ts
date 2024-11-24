import { Router } from "express";

import { createTableController } from "../controllers";

export const adminRouter = Router();

adminRouter.route("/create-table").post(createTableController);
