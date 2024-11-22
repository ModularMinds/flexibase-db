import { Request, Response } from "express";
import { db } from "../config/db";

export const createTableController = (req: Request, res: Response) => {
  const { tableName, tableColumns } = req.body;

  // Validate input
  if (!tableName || !Array.isArray(tableColumns) || tableColumns.length === 0) {
    return res.status(400).json({
      isSuccess: false,
      message: "Table name and valid column definitions are required.",
    });
  }

  // Build the column definitions string
  const columnDefinitions = tableColumns
    .map((column: { name: string; type: string; constraints?: string }) => {
      if (!column.name || !column.type) {
        throw new Error("Each column must have a name and a type.");
      }
      return `${column.name} ${column.type} ${column.constraints || ""}`.trim();
    })
    .join(", ");

  // SQL query to create table
  const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columnDefinitions})`;

  // Execute the query
  db.query(createTableQuery, [], (err) => {
    if (err) {
      return res.status(500).json({ isSuccess: false, error: err.message });
    }
    return res.status(201).json({
      isSuccess: true,
      message: `Table '${tableName}' created successfully.`,
    });
  });
};
