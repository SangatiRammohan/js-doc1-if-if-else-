// 1. Check Voting Eligibility
var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// OUTPUT: You are eligible to vote

// 2. Simple Temperature Check


var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's a cool day.");
}

// OUTPUT: It's a cool day

// 3. Even or Odd Number Check

var number = 7;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//OUTPUT: The number is odd.

// 4. Check Passing Grade
var score = 60;
if (score >= 50) {
  console.log("You passed the test!");
} else {
  console.log("You did not pass the test.");
}

// OUTPUT: You passed the test!

// 5. Check Positive or Negative Number
var num = -10;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// OUTPUT: The number is negative

// 6. Basic Discount Application
var totalAmount = 120;
var discount = totalAmount > 100 ? 10 : 0;
console.log("Discount applied:", discount);

// OUTPUT: Discount applied: 10

// 7. Check Multiple of 5

var value = 20;
if (value % 5 === 0) {
  console.log("The value is a multiple of 5.");
} else {
  console.log("The value is not a multiple of 5.");
}

// OUTPUT: The value is a multipe of 5

// 8. Check Driving Eligibility
var driverAge = 17;
if (driverAge >= 18) {
  console.log("Eligible to drive.");
} else {
  console.log("Not eligible to drive.");
}

//OUTPUT: Not eligible to drive

// 9. Simple Age Group Check
var age = 45;
if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

//OUTPUT: Adult

// 10. Product Stock Availability

var stock = 5;
var purchaseQuantity = 3;
if (purchaseQuantity <= stock) {
  console.log("Order placed successfully.");
} else {
  console.log("Not enough stock available.");
}
//OUTPUT: Order Placed successfully



// Slightly Tricky Snippets

// 11. Calculate Total Cost with Taxes

var price = 200;
var taxRate = 0.08;
var totalCost = price + (price * taxRate);
console.log("Total Cost:", totalCost);
//OUTPUT: Total cost: 216


// 12. Nested Conditions: Score Grading
var marks = 78;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

//OUTPUT: Grade: B

// 13. Ternary Operator: Adult Check
var personAge = 21;
var status = personAge >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

//OUTPUT: Status: Adult

// 14. Logical AND Condition
var hasID = true;
var hasTicket = false;
if (hasID && hasTicket) {
  console.log("Entry allowed.");
} else {
  console.log("Entry not allowed.");
}
// OUTPUT: Entry not allowed

// 15. Calculate BMI
var weight = 70; // in kg
var height = 1.75; // in meters
var bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));

//OUTPUT: BMI: 22.86

// 16. Restaurant Service Charge

var billAmount = 250;
var serviceCharge = billAmount >= 200 ? billAmount * 0.1 : billAmount * 0.05;
console.log("Service Charge:", serviceCharge);

//OUTPUT: Service Charge: 25

// 17. Logical OR Condition: Password Check

var passwordLength = 5;
if (passwordLength < 8 || passwordLength > 15) {
  console.log("Password length is not acceptable.");
} else {
  console.log("Password length is acceptable.");
}

//OUTPUT: Password length is not acceptable

// 18. Calculate Final Price After Discount

var basePrice = 150;
var discount = basePrice > 100 ? 20 : 10;
var finalPrice = basePrice - discount;
console.log("Final Price:", finalPrice);

// OUTPUT: Final price: 130

// 19. Leap Year Check

var year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

  //OUTPUT: Leap Year



// 20. Check Driving and Drinking Age

var age = 20;
if (age >= 18) {
  if (age >= 21) {
    console.log("Eligible for driving and drinking.");
  } else {
    console.log("Eligible for driving only.");
  }
} else {
  console.log("Not eligible for driving or drinking.");
}

// Output: Eligible for driving only