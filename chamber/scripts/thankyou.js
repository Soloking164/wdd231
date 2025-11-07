const firstNameContainer = document.querySelector(".first-name");
const lastNameContainer = document.querySelector(".last-name");
const emailContainer = document.querySelector(".email");
const mobileNumberContainer = document.querySelector(".mobile-number");
const businessNameContainer = document.querySelector(".business-name");
const submissionDateContainer = document.querySelector(".current-date");
const username = document.querySelector(".username");

const params = new URLSearchParams(window.location.search);
const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const mobileNumber = params.get("mobilePhoneNumber");
const businessName = params.get("organizationName");
const submissionDate = params.get("timestamp");

const date = new Date(submissionDate);
const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
})
firstNameContainer.innerHTML = `<strong>First Name:</strong> ${firstName}`;
lastNameContainer.innerHTML = `<strong>Last Name:</strong> ${lastName}`;
emailContainer.innerHTML = `<strong>Email:</strong> ${email}`;
mobileNumberContainer.innerHTML = `<strong>Mobile Number:</strong> ${mobileNumber}`;
businessNameContainer.innerHTML = `<strong>Business Name:</strong> ${businessName}`;
submissionDateContainer.innerHTML = `<strong>Registration Date:</strong> ${formattedDate}`;
username.textContent = firstName;

