"use strict";
import { readFile, writeFile } from "node:fs";
//
let data = "What up Doe?!";
//
writeFile("message.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved");
});
//
readFile("message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
