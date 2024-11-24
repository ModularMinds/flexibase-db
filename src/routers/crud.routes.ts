import { Router } from "express";

import { fetchDataController, insertDataController } from "../controllers";

export const dbRouter = Router();

dbRouter.route("/insert-data").post(insertDataController);
dbRouter.route("/fetch-data").get(fetchDataController);
