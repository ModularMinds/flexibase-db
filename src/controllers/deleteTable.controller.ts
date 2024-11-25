import { db } from "../config";
import { Request, Response } from "express";

export const deleteTableController = (req: Request, res: Response) => {
  const { tableName } = req.body;

  // Validate input
  if (!tableName) {
    res.status(400).json({
      isSuccess: false,
      message: "Table name is required.",
    });
    return;
  }

  // SQL query to drop the table
  const deleteTableQuery = `DROP TABLE IF EXISTS ${tableName}`;

  // Execute the query
  db.query(deleteTableQuery, (err) => {
    if (err) {
      console.error("Error deleting table:", err);
      res.status(500).json({
        isSuccess: false,
        error: err.message,
      });
      return;
    }

    return res.status(200).json({
      isSuccess: true,
      message: `Table '${tableName}' deleted successfully.`,
    });
  });
};
