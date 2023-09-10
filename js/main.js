console.log("JS file is connected");

// javascript  for togalling the menu
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

// Select the navigation menu
const navMenu = document.querySelector("nav ul");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the 'active' class on the navigation menu
  navMenu.classList.toggle("active");

  // Toggle the display of the menu icon and close icon
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

// Add a click event listener to the close icon
closeIcon.addEventListener("click", function () {
  // Toggle the 'active' class on the navigation menu
  navMenu.classList.toggle("active");

  // Toggle the display of the menu icon and close icon
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});

// this is the permission functionality for the more info button

const popupButton = document.getElementById("popupButton");
const popupContainer = document.getElementById("popupContainer");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

popupButton.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

yesButton.addEventListener("click", () => {
  window.location.href = "https://www.example.com"; // Replace with your desired website URL
});

noButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

// this is for the studennt portfolio

// script.js
const students = [
  { name: "Student 1", portfolio: "https://portfolio1.com" },
  { name: "Student 2", portfolio: "https://portfolio2.com" },
  { name: "Student 3", portfolio: "https://portfolio1.com" },
  { name: "Student 4", portfolio: "https://portfolio2.com" },
  { name: "Student 5", portfolio: "https://portfolio1.com" },
  { name: "Student 6", portfolio: "https://portfolio2.com" },
  { name: "Student 7", portfolio: "https://portfolio1.com" },
  { name: "Student 8", portfolio: "https://portfolio2.com" },
  { name: "Student 9", portfolio: "https://portfolio1.com" },
  { name: "Student 10", portfolio: "https://portfolio2.com" },
  { name: "Student 11", portfolio: "https://portfolio1.com" },
  { name: "Student 12", portfolio: "https://portfolio2.com" },
  { name: "Student 13", portfolio: "https://portfolio1.com" },
  { name: "Student 14", portfolio: "https://portfolio2.com" },
  { name: "Student 15", portfolio: "https://portfolio1.com" },
  { name: "Student 16", portfolio: "https://portfolio2.com" },
  { name: "Student 17", portfolio: "https://portfolio1.com" },
  { name: "Student 18", portfolio: "https://portfolio2.com" },
  { name: "Student 19", portfolio: "https://portfolio1.com" },
  { name: "Student 20", portfolio: "https://portfolio2.com" },
  { name: "Student 21", portfolio: "https://portfolio1.com" },
  { name: "Student 22", portfolio: "https://portfolio2.com" },
  { name: "Student 23", portfolio: "https://portfolio1.com" },
  { name: "Student 24", portfolio: "https://portfolio2.com" },
  { name: "Student 25", portfolio: "https://portfolio1.com" },
  { name: "Student 26", portfolio: "https://portfolio2.com" },
  { name: "Student 27", portfolio: "https://portfolio1.com" },
  { name: "Student 28", portfolio: "https://portfolio2.com" },
  { name: "Student 29", portfolio: "https://portfolio1.com" },
  { name: "Student 30", portfolio: "https://portfolio2.com" },
  { name: "Student 31", portfolio: "https://portfolio1.com" },
  { name: "Student 32", portfolio: "https://portfolio2.com" },
  { name: "Student 33", portfolio: "https://portfolio1.com" },
  { name: "Student 34", portfolio: "https://portfolio2.com" },
  { name: "Student 35", portfolio: "https://portfolio1.com" },
  { name: "Student 36", portfolio: "https://portfolio2.com" },
  { name: "Student 37", portfolio: "https://portfolio1.com" },
  { name: "Student 38", portfolio: "https://portfolio2.com" },
  { name: "Student 39", portfolio: "https://portfolio1.com" },
  { name: "Student 40", portfolio: "https://portfolio2.com" },
  { name: "Student 41", portfolio: "https://portfolio1.com" },
  { name: "Student 42", portfolio: "https://portfolio2.com" },
  { name: "Student 43", portfolio: "https://portfolio1.com" },
  { name: "Student 44", portfolio: "https://portfolio2.com" },
  { name: "Student 45", portfolio: "https://portfolio1.com" },
  { name: "Student 46", portfolio: "https://portfolio2.com" },
  { name: "Student 47", portfolio: "https://portfolio1.com" },
  { name: "Student 48", portfolio: "https://portfolio2.com" },
  { name: "Student 49", portfolio: "https://portfolio1.com" },
  { name: "Student 50", portfolio: "https://portfolio2.com" },

  // Add more students here
];

const maxDisplayedStudents = 10;
let currentIndex = 0;

function generateStudentList() {
  const studentListContainer = document.querySelector(
    ".student-list-container"
  );

  for (
    let i = currentIndex;
    i < Math.min(currentIndex + maxDisplayedStudents, students.length);
    i++
  ) {
    const student = students[i];

    const studentItem = document.createElement("div");
    studentItem.classList.add("student-item");

    const studentName = document.createElement("a");
    studentName.textContent = student.name;
    studentName.href = student.portfolio;
    studentName.target = "_blank";

    studentItem.appendChild(studentName);
    studentListContainer.appendChild(studentItem);
  }

  if (currentIndex + maxDisplayedStudents >= students.length) {
    document.getElementById("view-more-btn").style.display = "none";
  }
}

document.getElementById("view-more-btn").addEventListener("click", () => {
  currentIndex += maxDisplayedStudents;
  generateStudentList();
});

// Call the function to generate the initial student list
window.onload = generateStudentList;




// here is the code and teh data for the testimonial 



const testimonials = [
  {
    text: "I've had the pleasure of using this product for several months now, and I must say it has exceeded my expectations in every way possible. The quality and performance are top-notch, and it has made a significant difference in my daily life. I couldn't be more satisfied.",
    author: "John Doe",
  },
  {
    text: "From the moment I started using this service, I knew I had found something truly special. The level of professionalism and dedication displayed by the team is unmatched. Not only did they meet my needs, but they went above and beyond to ensure my complete satisfaction. I wholeheartedly recommend them.",
    author: "Jane Smith",
  },
  {
    text: "I've been a loyal customer for years, and I can confidently say that this company consistently delivers excellence. The products are not only of the highest quality but are also backed by impeccable customer support. It's rare to find such a combination in today's market, and I'm grateful for it.",
    author: "Bob Johnson",
  },
  {
    text: "I cannot express enough how impressed I am with the outstanding customer support provided by this company. Whenever I've had a question or an issue, they've been quick to respond and resolve it. Their dedication to customer satisfaction is truly commendable.",
    author: "Bob Johnson",
  },
  {
    text: "My experience with this service has been nothing short of exceptional. The quality of their products, combined with their prompt and efficient service, has left me thoroughly impressed. I'm not one to leave reviews, but this is an exception – I want everyone to know about this gem of a company.",
    author: "Bob Johnson",
  },
 
];

let currentTestimonial = 0;
const testimonialText = document.getElementById("testimonial-text");
const testimonialAuthor = document.getElementById("testimonial-author");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

function updateTestimonial() {
  const testimonial = testimonials[currentTestimonial];
  testimonialText.textContent = testimonial.text;
  testimonialAuthor.textContent = testimonial.author;
}

function showNextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
  updateSlideTransform();
}

function showPrevTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
  updateSlideTransform();
}

function updateSlideTransform() {
  testimonialSlide.style.transform = `translateX(-${
    currentTestimonial * 100
  }%)`;
}

updateTestimonial();

nextArrow.addEventListener("click", showNextTestimonial);
prevArrow.addEventListener("click", showPrevTestimonial);


