const fs = require("fs");
const filePath = "example.json";
function createStudent(newStudent) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    json.push(newStudent);
    fs.writeFile(filePath, JSON.stringify(json), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log("New student added successfully!");
      }
    });
  });
}

function readStudents() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    console.log("Students List:", json);
  });
}

function updateStudent(rollNo, updatedData) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    const updatedJson = json.map((student) =>
      student.rollNo === rollNo ? { ...student, ...updatedData } : student
    );
    fs.writeFile(filePath, JSON.stringify(updatedJson, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log(`Student with roll number ${rollNo} updated successfully!`);
      }
    });
  });
}

function deleteStudent(rollNo) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    const updatedJson = json.filter((student) => student.rollNo !== rollNo);
    fs.writeFile(filePath, JSON.stringify(updatedJson), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log(`Student with roll number ${rollNo} deleted successfully!`);
      }
    });
  });
}
createStudent({
  studentName: "Varun",
  rollNo: 105,
  dob: "2002-12-10",
  dept: "IT",
});

readStudents();

updateStudent(103, { studentName: "Dharun", dept: "Mechanical" });

deleteStudent(102);
