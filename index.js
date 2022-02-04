document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".submit-form");
  form.addEventListener("submit", validateForm);
});

function validateForm(e) {
  const message = document.querySelector(".message");
  const emailInput = document.querySelector(".email");
  e.preventDefault();
  const emailValue = emailInput.value;
  if (
    emailValue === "" ||
    emailValue === undefined ||
    !validateEmail(emailValue)
  ) {
    message.textContent = "Please provide a valid email address";
    message.classList.add("error");
    message.style.visibility = "visible";
    setTimeout(() => {
      message.style.visibility = "hidden";
      message.classList.remove("error");
    }, 3000);
  } else {
    message.textContent = "Ready will contact with you soon!!";
    message.classList.add("success");
    message.style.visibility = "visible";
    setTimeout(() => {
      message.style.visibility = "hidden";
      message.classList.remove("success");
    }, 3000);
  }
}

const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
