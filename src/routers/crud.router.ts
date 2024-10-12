import { Router } from "express";
import {
  createTableController,
  fetchDataController,
  insertDataController,
} from "../controllers";

export const crudRouter = Router();

crudRouter.route("/create-table").post(createTableController);
crudRouter.route("/insert-data").post(insertDataController);
crudRouter.route("/fetch-data").get(fetchDataController);
