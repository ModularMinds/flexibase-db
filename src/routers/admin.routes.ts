import { Router } from "express";

import { createTableController, deleteTableController } from "../controllers";
import { getAllTablesController } from "../controllers/getTables.controller";

export const adminRouter = Router();

adminRouter.route("/create-table").post(createTableController);
adminRouter.route("/delete-table").delete(deleteTableController);
adminRouter.route("/get-tables").get(getAllTablesController);
