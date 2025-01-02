import { Router } from "express";

import {
  createTableController,
  deleteTableController,
  getAllTablesController,
  getTableColumnsController,
} from "../controllers";

export const adminRouter = Router();

adminRouter.route("/create-table").post(createTableController);
adminRouter.route("/delete-table").delete(deleteTableController);
adminRouter.route("/get-tables").get(getAllTablesController);
adminRouter.route("/get-columns").get(getTableColumnsController);
