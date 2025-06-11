"use strict";
// Declarations
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import dotenv from "dotenv";

// Setup .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const fileName = fileURLToPath(import.meta.url);
const directoryName = dirname(fileName);

// Set up static folder
app.use(express.static(path.join(directoryName, "public")));

//
app.listen(PORT, () => {
  console.log(`🚀 Server is live and kicking on http://localhost:${PORT}`);
});
