import { Router } from "express";

import { createTableController, deleteTableController } from "../controllers";

export const adminRouter = Router();

adminRouter.route("/create-table").post(createTableController);
adminRouter.route("/delete-table").delete(deleteTableController);
