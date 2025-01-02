import { Request, Response } from "express";
import { db } from "../config/db";

export const getTableColumnsController = (req: Request, res: Response) => {
  const { tableName } = req.query;

  // Validate input
  if (!tableName || typeof tableName !== "string") {
    res.status(400).json({
      isSuccess: false,
      message: "Table name is required and should be a string.",
    });
    return
  }

  // SQL query to retrieve columns
  const query = `
    SELECT COLUMN_NAME
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_NAME = ?
  `;

  // Execute the query
  db.query(query, [tableName], (err, results: any[]) => {
    if (err) {
      console.error("Error retrieving columns:", err);
      return res.status(500).json({
        isSuccess: false,
        error: err.message,
      });
    }

    // Check if the table exists
    if (results.length === 0) {
      return res.status(404).json({
        isSuccess: false,
        message: `Table '${tableName}' not found.`,
      });
    }

    // Return the columns
    const columns = results.map((row: any) => row.COLUMN_NAME);

    return res.status(200).json({
      isSuccess: true,
      columns: columns,
    });
  });
};
