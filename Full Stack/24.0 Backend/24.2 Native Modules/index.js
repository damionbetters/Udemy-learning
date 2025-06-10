"use strict";
//
// import { readFile, writeFile } from "node:fs";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

//
// let data = "What up Doe?!";
const app = express();
const PORT = 3000;
const fileName = fileURLToPath(import.meta.url);
const directoryName = dirname(fileName);

// //
// writeFile("message.txt", data, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved");
// });

// //
// readFile("message.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//

app.get("/", (req, res) => {
  res.sendFile(directoryName + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
