import { Request, Response } from "express";
import { db } from "../config/db";

export const getAllTablesController = (req: Request, res: Response) => {
  const query = `SHOW TABLES`;

  db.query(query, (err, results: any[]) => {
    if (err) {
      console.error("Error fetching tables:", err);
      return res.status(500).json({
        isSuccess: false,
        error: err.message,
      });
    }

    const tables = results.map((row: any) => Object.values(row)[0]);

    return res.status(200).json({
      isSuccess: true,
      tables,
    });
  });
};
