const form = document.getElementById('induction-form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const instituteEmail = document.getElementById('institute-email');
const rollNumber = document.getElementById('roll-number');
const phoneNumber = document.getElementById('phone-number');
const submitBtn = document.querySelector('button[type="submit"]');

// Regular expressions for validation
const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.com$/;
const instituteEmailRegex = /^[0-9]{3}[a-zA-Z]{2}[0-9]{4}@nitrkl\.ac\.in$/;
const rollNumberRegex = /^[0-9]{3}(BM|BT|CR|CH|CE|CS|EE|EC|EI|FP|ID|ME|MM|MN)[0-9]{4}$/;
const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

// Function to check if input is valid
function isValidInput(input, regex) {
  return regex.test(input.value.trim());
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  let invalidFields = [];

  if (!isValidInput(fullName, nameRegex)) {
    invalidFields.push('Full Name');
    alert('Please enter your full name in the correct format (e.g. Steve Jobs)');
  }

  if (!isValidInput(email, emailRegex)) {
    invalidFields.push('Email');
    alert('Please enter a valid email address from Gmail, Hotmail, or Outlook');
  }

  if (!isValidInput(instituteEmail, instituteEmailRegex)) {
    invalidFields.push('Institute Email');
    alert('Please enter your institute email in the correct format (e.g. 123AB1234@nitrkl.ac.in)');
  }

  if (!isValidInput(rollNumber, rollNumberRegex)) {
    invalidFields.push('Roll Number');
    alert('Please enter your roll number in the correct format (e.g. 123BT1234)');
  }

  if (!isValidInput(phoneNumber, phoneRegex)) {
    invalidFields.push('Phone Number');
    alert('Please enter a valid phone number starting with +91 or 91, followed by 10 digits');
  }

  if (invalidFields.length > 0) {
    alert(`Invalid input in the following field(s): ${invalidFields.join(', ')}`);
  } else {
    alert("Great job! You've officially taken the first step.");
    form.reset();
  }
}

submitBtn.addEventListener('click', handleSubmit);
