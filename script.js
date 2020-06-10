var input = document.getElementById("input");
const btn = document.getElementById("btn");
const cgpa = document.getElementById("cgpa");
const division = document.getElementById("division");
const error = document.getElementById("error");

var inputVal = 0;
var marks = [];
var grade = [];
var seperate = null;
var totalMarks = 0;
var totalGrade = 0;

btn.addEventListener("click", function () {
  seperate = input.value.split(" ");
  if (seperate.length % 2 !== 0) {
    cgpa.innerHTML = "";
    division.innerHTML = "";
    return (error.innerHTML = "Please Check input");
  } else {
    error.innerHTML = "";
  }
  seperateGradeMarks(seperate);
  const result = marksCalc(grade, marks);
  const divis = calcDivision(result);
  cgpa.innerHTML = result.toFixed(2);
  division.innerHTML = divis;
  marks = [];
  grade = [];
});

const seperateGradeMarks = (arr) => {
  arr.forEach((element, index) => {
    if (index % 2 === 0) {
      grade.push(element);
    } else {
      marks.push(element);
    }
  });
};

const marksCalc = (grade, marks) => {
  totalMarks = marks.reduce((prev, next) => prev * 1 + next * 1);
  grade.forEach((ele, index) => {
    if (ele === "A+") {
      marks[index] = marks[index] * 4;
    } else if (ele === "A") {
      marks[index] = marks[index] * 3.75;
    } else if (ele === "A-") {
      marks[index] = marks[index] * 3.5;
    } else if (ele === "B+") {
      marks[index] = marks[index] * 3.25;
    } else if (ele === "B") {
      marks[index] = marks[index] * marks[index] * 3;
    } else if (ele === "C+") {
      marks[index] = marks[index] * 2.5;
    } else if (ele === "C") {
      marks[index] = marks[index] * 2.25;
    } else if (ele === "D") {
      marks[index] = marks[index] * 2;
    } else {
      marks[index] = 1;
    }
  });
  totalGrade = marks.reduce((prev, next) => prev * 1 + next * 1);

  return totalGrade / totalMarks;
};

function calcDivision(num) {
  if (num <= 4 && num >= 3.25) {
    return "First Division";
  } else if (num < 3.25 && num >= 2.5) {
    return "Second Division";
  } else if (num < 2.5 && num >= 1.75) {
    return "Third Division";
  } else {
    return "Fail";
  }
}
