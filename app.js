const formInput = document.querySelector(".form-input");
const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

formInput.addEventListener("submit", e => {
  e.preventDefault();
  console.log("form  Input");
  validateInput();
});

function validateInput() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();

  if (firstNameValue === "") {
    return setError(firstName, "First name cannot be empty");
  } else {
    return setSucess(firstName);
  }
}

function setError(input, message) {
  const small = document.querySelector("small");
  small.className = small;
  input.style.border = "2px solid red";
  // small.style.color = "red";
  small.innerText = message;
}
function setSucess(input) {
  input.style.border = "2px solid green";
  input.value = "";
}
