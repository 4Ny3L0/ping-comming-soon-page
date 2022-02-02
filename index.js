document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".submit-form");
  form.addEventListener("submit", validateForm);
});

function validateForm(e) {
  e.preventDefault();
  const emailValue = e.target.children[0].value;
  console.log(emailValue);
}
