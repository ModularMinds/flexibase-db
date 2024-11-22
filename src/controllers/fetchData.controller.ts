import { Request, Response } from "express";
import { db } from "../config/db";

export const fetchDataController = (req: Request, res: Response) => {
  const { tableName, conditions } = req.body;

  // Validate input
  if (!tableName) {
    return res.status(400).json({
      isSuccess: false,
      message: "Table name is required.",
    });
  }

  // Build the SQL query
  let query = `SELECT * FROM ${tableName}`;
  const values: any[] = [];

  if (
    conditions &&
    typeof conditions === "object" &&
    !Array.isArray(conditions)
  ) {
    const conditionClauses = Object.keys(conditions)
      .map((key) => {
        values.push(conditions[key]);
        return `${key} = ?`;
      })
      .join(" AND ");
    if (conditionClauses) {
      query += ` WHERE ${conditionClauses}`;
    }
  }

  // Execute the query
  db.query(query, values, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({
        isSuccess: false,
        error: err.message,
      });
    }

    return res.status(200).json({
      isSuccess: true,
      data: results,
    });
  });
};
