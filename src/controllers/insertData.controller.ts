import { Request, Response } from "express";
import { db } from "../config/db";

export const insertDataController = (req: Request, res: Response) => {
  const { tableName, data } = req.body;

  // Validate input
  if (!tableName || !data || typeof data !== "object" || Array.isArray(data)) {
    return res.status(400).json({
      isSuccess: false,
      message: "Table name and valid data object are required.",
    });
  }

  // Extract column names and values
  const columns = Object.keys(data).join(", ");
  const values = Object.values(data);

  // Create placeholders for parameterized query
  const placeholders = values.map(() => "?").join(", ");

  // SQL query to insert data
  const insertQuery = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;

  // Execute the query
  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({
        isSuccess: false,
        error: err.message,
      });
    }

    return res.status(201).json({
      isSuccess: true,
      message: `Data inserted into table '${tableName}' successfully.`,
    });
  });
};
