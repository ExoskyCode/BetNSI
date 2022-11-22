import { json } from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(morgan("angle"));
app.use(cors());

app.get("/matchs", async (req, res) => {
  const url = "http://api.cup2022.ir/api/v1/match";
  console.log(url);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYjEzZGZkOWFhYzIyNjcxNDEzMjgiLCJpYXQiOjE2Njg5NjAyODQsImV4cCI6MTY2OTA0NjY4NH0.1wIOfAIdXfYpa_a10I648Tm_P77hUG8TDQfthYlbwcs";
  try {
    await fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      }),
    })
      .then((r) => r.json())
      .then((json) => res.json(json));
  } catch (error) {
    console.log(error);
  }
});
app.listen(9000, () => {
  console.log("listening port");
});

let data = json['data']
console.log(data);
console.log("test");