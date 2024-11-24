import { Router } from "express";
import {
  createTableController,
  fetchDataController,
  insertDataController,
} from "../controllers";

export const dbRouter = Router();

dbRouter.route("/create-table").post(createTableController);
dbRouter.route("/insert-data").post(insertDataController);
dbRouter.route("/fetch-data").get(fetchDataController);
