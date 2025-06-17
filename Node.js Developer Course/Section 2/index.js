"use strict";
import { createServer } from "node:http";

http.createServer((req, res) => {
  res.end("Hello from the server!");
});
