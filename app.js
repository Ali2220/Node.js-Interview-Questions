// 🧠 Q1 — What is the Event Loop in Node.js and how does it work?

// const fs = require("fs");

// console.log('Start');

// fs.readFile('./files/test.txt', 'utf-8', (err, data) => {
//     console.log('File read',data);
// })

// setTimeout(() => {
//     console.log('Timer done');
// }, 0);

// console.log("End");

// 🧪 Mini Practice Task:

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// 🧠 Q2 — Difference between process.nextTick() vs setImmediate()

// console.log('Start');

// setImmediate(function(){
//     console.log('SetImmediate');
// })

// process.nextTick(function(){
//     console.log('Next Tick');
// })

// console.log('End');

// 🧪 Mini Practice Task

// setImmediate(() => console.log("A"));

// Promise.resolve().then(() => console.log("B"));

// process.nextTick(() => console.log("C"));

// console.log("D");

// 🌊 Q4 — What are Streams in Node.js?

// 💻 Example 1 — Read Large File
// const fs = require("fs");

// const readStream = fs.createReadStream("./files/bigFile.txt", "utf-8");

// readStream.on("data", (chunk) => {
//   console.log("\n", chunk);
// });

// readStream.on("end", () => {
//   console.log("End");
// });

// 💻 Example 2 — Pipe (Most Important)
// const fs = require("fs");

// const readStream = fs.createReadStream("./files/test.txt");
// const writeStream = fs.createWriteStream("./files/test_2.txt");

// readStream.pipe(writeStream);

// 🧪 Mini Practice Task
// const fs = require('fs')

// const readStream = fs.createReadStream('./files/bigFile.txt')
// const writeStream = fs.createWriteStream('./files/bigFile_2.txt')

// readStream.pipe(writeStream)

// 🧠 Q5 — How does Clustering work in Node.js?

// const cluster = require("cluster");
// const os = require("os");
// const express = require("express");

// if (cluster.isMaster) {
//   const cpuCount = os.cpus().length;
//   console.log(`Master running. Forking ${cpuCount} workers`);

//   for (let i = 0; i < cpuCount; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker) => {
//     console.log(`Worker ${worker.process.pid} died. Restarting...`);
//     cluster.fork();
//   });

// } else {
//   const app = express();

//   app.get("/", (req, res) => {
//     res.send(`Handled by worker ${process.pid}`);
//   });

//   app.listen(3000, () => {
//     console.log(`Worker ${process.pid} started`);
//   });
// }

// 🚀 Q6 — How to implement a Caching Layer in Node.js?

// 💻 Simple Example — In-Memory Cache

// const express = require("express");
// const app = express();

// const cache = {};

// app.get("/", async (req, res) => {
//   const key = "apiData";

//   if (cache[key]) {
//     console.log("Serving from cache");
//     return res.json(cache[key]);
//   }

//   console.log("Fetching from DB...");
//   const data = { message: "Fresh data", time: new Date() };

//   cache[key] = data;

//   setTimeout(() => {
//     delete cache[key];
//   }, 10000);

//   res.json(data);
// });

// app.listen(3000);

// 🔥 Industry Version (Redis)

// const redis = require("redis");
// const client = redis.createClient();
// const express = require("express");
// const app = express();

// app.get("/", async (req, res) => {
//   const key = "apiData";

//   const cached = await client.get(key);

//   if (cached) {
//     console.log(cached);
//     return res.json(JSON.parse(cached));
//   }

//   const data = { message: "Fresh data", time: new Date() };
//   await client.setEx(key, 60, JSON.stringify(data));
//   res.json(data);
// });

// app.listen(3000);

// 🧪 Mini Practice Task

// const express = require("express");
// const app = express();

// let cache = {};

// app.get("/", (req, res) => {
//   const key = "randomNumber";

//   if (cache[key]) {
//     return res.json({ number: cache[key], type: "cached" });
//   }

//   const a = Math.floor(Math.random() * 10) + 1;
//   cache[key] = a;

//   setTimeout(() => {
//     delete cache[key];
//   }, 5000);

//   res.json({ number: a, type: "fresh" });
// });

// app.listen(3000);
