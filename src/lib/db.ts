import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db = null;

export async function getDB() {
  if (!db) {
    db = await open({
      filename: './ml-analisis.db',
      driver: sqlite3.Database
    });

    // Create users table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}
