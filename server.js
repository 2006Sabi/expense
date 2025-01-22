// const http = require("http"); //importing the http modules

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hello World</h1>");
// });

// server.listen(5000, () => {
//   console.log("Server running at http://127.0.0.1:5000/");
// });
// const http = require("http");
// const calculate = require("./calculator");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const a = 10;
//   const b = 20;
//   res.write("<h1>The first number is: ${a}</h1>");
//   res.write("<h1>The second number is: ${b}</h1>");
//   res.write("<h1>The addition of 10 and 20 is : </h1>" ${calculate.add(a, b)}</h1>");
//   res.write("<h1>The subtraction of 10 and 20 is : </h1>", ${calculate.sub(a, b)}</h1>");
//   res.write("<h1>The multiplication of 10 and 20 is : ${calculate.mul(a, b)}</h1>");
//   res.write("<h1>The division of 10 and 20 is : ${calculate.divide(a,b)}</h1>");
//   res.end();
// });
//
// server.listen(5000, () => {
//   console.log("Server running at http://127.0.0.1:5000/");
// });

// const http = require("http");
// const calculate = require("./calculator");
//
// const server = http.createServer((req, res) => {
// res.writeHead(200, { "Content-Type": "text/html" });
// const a = 10;
// const b = 20;
// res.write(`<h1>The first number is: ${a}\n</h1>`);
// res.write(`<h1>The second number is: ${b}\n</h1>`);
// res.write(
// `<h1>The addition of ${a} and ${b} is : ${calculate.add(a, b)}\n</h1>`
// );
// res.write(
// `<h1>The subtraction of ${a} and ${b} is : ${calculate.sub(a, b)}\n</h1>`
// );
// res.write(
// `<h1>The multiplication of ${a} and ${b} is : ${calculate.mul(a, b)}\n</h1>`
// );
// res.write(
// `<h1>The division of ${a} and ${b} is : ${calculate.divide(a, b)}\n</h1>`
// );
// res.end();
// });
//
// server.listen(5000, () => {
// console.log("Server running at http://127.0.0.1:5000/");
// });
//

// console.log("hi");
// setTimeout(() => {
// console.log("Indise");
// }, 0);
// console.log("hello");
//

// const fs = require("fs");
// fs.readFile("sample.txt","utf8", (err, data) => {
// if (err) {
// console.error(err);
// return;
// }
// console.log(data);
// });

//const fs = require("fs");
// fs.writeFile("sample1.json", "Hello , World!", (err) => {
// if (err) {
// console.error(err);
// }
//
// });
// const fs = require("fs");
// const newPerson={
// name: "Dharun",
// age: 21,
// city : "Chennai",
// amount: 7000
// }
// fs.readFile("sample.json", "utf8", (err, data) => {
// if (err) {
// console.error(err);
// return;
// }
// const json = JSON.parse(data);
// json.push(newPerson)
// fs.writeFile("sample.json", JSON.stringify(json), (err) => {
// if (err) {
// console.error("Error writing to the file:", err);
// } else {
// console.log("New data added successfully!");
// }
// });
// });

const fs = require("fs");
// const newPerson = {
// name: "Dharun",
// age: 21,
// city: "Chennai",
// amount: 7000,
// };
// const deleteName = "Ram";
// fs.readFile("sample.json", "utf8", (err, data) => {
// if (err) {
// console.error(err);
// return;
// }
// const json = JSON.parse(data);
// const updatedJson = json.filter((person) => person.name !== deleteName);
// fs.writeFile("sample.json", JSON.stringify(updatedJson), (err) => {
// if (err) {
// console.error("Error writing to the file:", err);
// } else {
// console.log("Deleted successfully!");
// }
// });
// });

const updateName = "Sabi"; // Name of the person to update
const updatedData = {
  age: 20, // New values for the fields to update
  city: "Coimbatore",
  amount: 6000,
};
fs.readFile("sample.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const json = JSON.parse(data);
  const updatedJson = json.map((person) => {
    if (person.name === updateName) {
      return { ...person, ...updatedData };
    }
    return person;
  });
  fs.writeFile("sample.json", JSON.stringify(updatedJson), (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log("Updated successfully!");
    }
  });
});
