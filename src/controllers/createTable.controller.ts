import { Request, Response } from "express";
import { db } from "../config/db";

export const createTableController = (req: Request, res: Response) => {
  db.query(
    `CREATE TABLE IF NOT EXISTS ${req.body.tableName} (${req.body.tableData})`,
    [],
    (err) => {
      if (err) return res.json({ isSuccess: false, err: err.message });
      return res.json({
        isSuccess: true,
        message: `table ${req.body.tableName} created successfully`,
      });
    }
  );
};
