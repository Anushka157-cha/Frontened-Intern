const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

/* =========================
   CREATE TABLES
========================= */
const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS waitlist_users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        university_name VARCHAR(255) NOT NULL,
        university_email VARCHAR(255) NOT NULL UNIQUE,
        joined_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_queries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        university_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        submitted_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("Tables ready ✅");
  } catch (err) {
    console.error("Table creation error:", err.message);
  }
};

createTables();

/* =========================
   ROUTES
========================= */

app.get("/", (req, res) => {
  res.send("Swypd Waitlist API is running 🚀");
});

app.post("/api/waitlist", async (req, res) => {
  const { full_name, university_name, university_email } = req.body;

  if (!full_name || !university_name || !university_email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO waitlist_users 
       (full_name, university_name, university_email)
       VALUES ($1, $2, $3) RETURNING *`,
      [full_name, university_name, university_email]
    );

const countResult = await pool.query(
  `SELECT COUNT(*) FROM waitlist_users`
);

res.status(201).json({
  message: "Successfully joined the waitlist!",
  user: result.rows[0],
  count: parseInt(countResult.rows[0].count)
});
  } catch (err) {
    if (err.code === "23505") {
      return res
        .status(409)
        .json({ error: "This email is already on the waitlist!" });
    }

    console.error("Waitlist error:", err.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

app.get("/api/waitlist/count", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT COUNT(*) FROM waitlist_users`
    );
    res.json({ count: parseInt(result.rows[0].count) });
  } catch (err) {
    console.error("Count error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, universityName, email } = req.body;

  if (!name || !universityName || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_queries 
       (name, university_name, email) 
       VALUES ($1, $2, $3) RETURNING *`,
      [name, universityName, email]
    );

    res.status(201).json({
      message: "Information submitted successfully!",
      data: result.rows[0],
    });

  } catch (err) {
    console.error("Contact error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});