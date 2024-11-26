import "./config/env";

import express from "express";

import cors from "cors";

import { rootRouter } from "./routers";

import { apiCallLogger } from "./middlewares";

const app = express();

app.use(cors());
app.use(apiCallLogger);
app.use(express.json())

app.use("/api", rootRouter);

app.get("/api/db/service-check", (_, res) => {
  res.json({ isServiceAvailable: true });
});

app.listen(process.env.FLEXIBASE_DB_EXPOSE_PORT, () => {
  console.log(
    `Flexibase DB started successfully on port ${process.env.FLEXIBASE_DB_EXPOSE_PORT}`
  );
});
