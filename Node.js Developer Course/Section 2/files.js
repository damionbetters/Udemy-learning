"use strict";
import { log } from "node:console";
import { readFile, readFileSync, writeFile, writeFileSync } from "node:fs";

// // --------------- Blocking, Syncronous way
// const greeting = "Welcome to the class!";
// console.log(greeting);
// // Import files to read
// const textInput = readFileSync("./txt/input.txt", "utf-8");
// console.log(textInput);
// // Export files to create
// const textOutput = `This is what we know about the avocadeo: ${textInput}\nCreated on ${Date.now()}`;
// writeFileSync("./txt/output.txt", textOutput);
// console.log("file written");

// --------------- Non-blocking, asyncronous way
readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR! ❌❌❌. File does not exist.");
  readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      writeFile("./txt/final1.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written 🚀");
      });
    });
  });
});
console.log("Will read file");
