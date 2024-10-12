import express from "express";
import cors from "cors"
import { rootRouter } from "./routers";

const app = express();

app.use(cors())

app.use("/", rootRouter)

app.listen(process.env.FLEXIBASE_DB_EXPOSE_PORT, () => {
  console.log(
    `FlexiBase DB started successfully on port ${process.env.FLEXIBASE_DB_EXPOSE_PORT}`
  );
});
