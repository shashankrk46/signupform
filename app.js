const formInput = document.querySelector(".form-input");
const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

formInput.addEventListener("submit", e => {
  e.preventDefault();

  validateInput();
});
function validateInput() {
  if (firstName.value === "") {
    // seterror
    setError(firstName, "Firstname cannot be empty");
  } else {
    // setsuccess
    setSuccess(firstName);
  }
  if (lastName.value === "") {
    // seterror
    setError(lastName, "Lastname cannot be empty");
  } else {
    // setsuccess
    setSuccess(lastName);
  }

  if (email.value === "") {
    // seterror
    setError(email, "Email cannot be empty");
  } else if (!validateEmail(email.value)) {
    setError(email, "Looks like this is not an email");
  } else {
    // setsuccess
    setSuccess(email);
  }

  if (password.value === "") {
    // seterror
    setError(password, "Password cannot be empty");
  } else if (!validatePassword(password.value)) {
    setError(
      password,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
  } else {
    // setsuccess
    setSuccess(password);
  }
}

function setError(input, message) {
  const form = input.parentElement;
  form.className = "form-control error";
  const small = form.querySelector("small");

  small.innerText = message;
}

function setSuccess(input) {
  const form = input.parentElement;
  form.className = "form-control success";
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
  const passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passw.test(password);
}
