// =============================== Task 1: Access Employee Information ===============================

const company = {
    name: "Tech Solutions",
    employees: {
        emp1: { name: "Ali", role: "Developer", salary: 80000 },
        emp2: { name: "Sara", role: "Designer", salary: 70000 }
    }
};

// Log Ali's role
console.log("Ali's Role:", company.employees.emp1.role);

// Log Sara's salary
console.log("Sara's Salary:", company.employees.emp2.salary);

// Observations in comments
// company.employees.emp1.role → accesses Ali's role
// company.employees.emp2.salary → accesses Sara's salary


// =============================== Task 2: Update Object Property ===============================

const product = {
    id: 101,
    name: "Headphones",
    price: 3500
};

// Update the price
product.price = 4000;

// Log the updated product
console.log("Updated Product:", product);

// Observations in comments
// product.price = 4000 → updates the price property of the object


// ============================== Task 3: Object with Array ===============================

const student = {
    name: "Ahmed",
    age: 20,
    subjects: ["Math", "Physics", "Computer"]
};

// Log all subjects
console.log("All Subjects:", student.subjects);

// Log the second subject
console.log("Second Subject:", student.subjects[1]);

// Observations in comments
// student.subjects → accesses the array of subjects
// student.subjects[1] → accesses the second element (Physics)


// =============================== Task 4: Array of Objects ===============================

const students = [
    { name: "Ayesha", marks: 85 },
    { name: "Bilal", marks: 78 },
    { name: "Hina", marks: 92 }
];

// Log the name of the first student
console.log("First Student Name:", students[0].name);

// Log the marks of the last student
console.log("Last Student Marks:", students[students.length - 1].marks);

// Observations in comments
// students[0].name → first student's name
// students[students.length - 1].marks → last student's marks


// =============================== Task 5: Nested Object ===============================

const user = {
    username: "user123",
    profile: {
        email: "user@mail.com",
        address: {
            city: "Karachi",
            zip: "75000"
        }
    }
};

// Log user's email
console.log("User Email:", user.profile.email);

// Log city name
console.log("City Name:", user.profile.address.city);

// Observations in comments
// user.profile.email → accesses the email property
// user.profile.address.city → accesses nested city property

// =============================== Task 6: Modify Nested Object Value ===============================

const order = {
    orderId: 555,
    delivery: {
        status: "Pending",
        days: 5
    }
};

// Change status to "Delivered"
order.delivery.status = "Delivered";

// Log updated order object
console.log("Updated Order:", order);

// Observations in comments
// order.delivery.status → accesses the nested status property
// assignment updates the value

// =============================== Task 7: Object with Array of Objects ===============================

const cart = {
    items: [
        { name: "Shirt", price: 2000 },
        { name: "Shoes", price: 5000 }
    ]
};

// Log price of Shoes
console.log("Shoes Price:", cart.items[1].price);

// Change Shirt price to 2200
cart.items[0].price = 2200;

// Log updated items array
console.log("Updated Items:", cart.items);

// Observations in comments
// cart.items[1].price → accesses Shoes price
// cart.items[0].price = 2200 → updates Shirt price





// =============================== Task 8: Add New Property ===============================

const mobile = {
    brand: "Samsung",
    model: "S21"
};

// Add a new property price
mobile.price = 120000;  // you can change the value

// Log updated mobile object
console.log("Updated Mobile:", mobile);

// Observations in comments
// mobile.price → adds a new property to the object





// =============================== Task 9: Loop Through Object Properties ===============================

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

// Loop through object properties using for...in
for (let key in car) {
    console.log(key + ":", car[key]);
}

// Observations in comments
// for...in loop iterates over all keys in the object
// car[key] → accesses the value of each property



// =============================== Task 10: Mini Real-World Object ===============================

const menuItem = {
    name: "Burger",
    price: 450,
    available: true
};

// Log item name and price
console.log("Item Name:", menuItem.name);
console.log("Item Price:", menuItem.price);

// Change availability to false
menuItem.available = false;

// Log updated object
console.log("Updated Menu Item:", menuItem);

// Observations in comments
// menuItem.available = false → updates availability property
// Useful for tracking stock or availability dynamically

