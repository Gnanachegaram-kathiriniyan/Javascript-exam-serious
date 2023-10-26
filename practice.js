// Q1 How do you create an empty JavaScript object?
const empty={

};
console.log(empty)
// Q2 Write a JavaScript program to create an object with properties
//  and methods.Create an object called "person" with properties "name" and "age." and also create a function into that
//  object call IntrouduceYou take a person object as a parameter and logs a massage to the console.
const person={
  name:"kathir",
  age:20,
  introduceYou:function(){
    return "Hello,my name is " +this.name; 
  }
};
console.log(person.introduceYou());

// Q1 (method 1)Create a function into that Object called greetStudent that takes a student object as a parameter and logs a greeting
//  message to the console. The message should be like this 'Hello + person name + Welcome to the Coding School'
var student = {StudentName:"kathir"};
function greetStudent()
{
    console.log("Hello " +student.StudentName+ " Welcome to the uki coding school")
}
greetStudent();

// Q3 method 2
const Student={
greetStudent:function(name)
{console.log(`Hello ${person.name}  welcome to coding student`)}
// new data add
}
Student.greetStudent({name:"kajan"})


Student.greetStudent()

//Q4 Write a JavaScript program to access object properties using dot notation and bracket notation.
const person3={
    name:"deni",
    age:"20"
}
console.log(person3.age);
console.log(person["age"]);

// Q5 Write a JavaScript program to add a new property to an existing object.Add a new property 
// email with the value "john@example.com" to the person object.

let car={
    name:"kalai",
    age:"16"
}
person.email="jhonexample@.com";
console.log(car)

// Q6 Write a JavaScript program to remove a property from an object.
var object={
  name:"kathir",
  age:20
}
delete object.name;
console.log(object);

// Q7 Write a JavaScript program to check whether a property exists in an object.
var young={
  age:14,
  name:"kathiriniyan",
  school:"JCC"
}
console.log("address" in young)
// Q8 Create two objects, student and course, and merge them into a new object named studentCourse.
// Create the student object
var student = {
  studentName: "John Doe",
  studentID: "12345",
  studentGrade: "A",
};

// Create the course object
var course = {
  courseName: "Mathematics",
  courseCode: "MATH101",
  courseCredits: 3,
};

// Merge the student and course objects into a new object named studentCourse
var studentCourse = {
  ...student, // Spread the properties of the student object
  ...course,  // Spread the properties of the course object
};

console.log(studentCourse);
//  Q9 How do you check if an object has a specific property, say, address?
//  If there address, log ('Address is there') in console, if not ('Address not found')
// (has own propertie method)
var person1 = {
  name: "John Doe",
  age: 30,
};

if (person1.hasOwnProperty("address")) {
  console.log("Address is there");
} else {
  console.log("Address not found");
}

// (in operator method)
var person1 = {
  name: "John Doe",
  age: 30,
};

if ("address" in person1) {
  console.log("Address is there");
} else {
  console.log("Address not found");
}

// Q10
var book={ title:"king",author:"karan",year:"2003"};

// Q11
// Create an array of objects called students. Each object in the array should have the following properties:
var student=[
  {
    name:"piran",
    age:15,
    gpa:3.5
  }
  {
    name:"kajan",
    age:18,
    gpa:0.0
  }
]