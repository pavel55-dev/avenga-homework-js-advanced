/**
 * Handles student registration by collecting form values, delegating to `studentRegistration`,
 * storing the resulting student object in an in-memory database, resetting the form, and appending
 * the student data to the DOM as an ordered list item (note: creating a new `<ol>` for each entry
 * is not ideal—prefer appending `<li>` elements within a single persistent `<ol>`).
 */
import { studentRegistration } from "./functions.js";

const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("lastNameInput");
const age = document.getElementById("ageInput");
const email = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("student-form");
const studentList = document.getElementById("studentList");

const database = [];

submitButton.addEventListener("click", (e) => {
    if (!firstName.value || !lastName.value || !age.value || !email.value) {
        alert("Please fill in all fields before submitting.");
        return;
    }
  e.preventDefault();
  const newStudent = studentRegistration(
    firstName.value,
    lastName.value,
    age.value,
    email.value,
  );
  database.push(newStudent);

  resetButton.reset();

  const li = document.createElement("li");
  li.textContent = `Name: ${newStudent.firstName} ${newStudent.lastName}, Age: ${newStudent.age}, Email: ${newStudent.email}`;
  studentList.appendChild(li);
});

console.log(database);
