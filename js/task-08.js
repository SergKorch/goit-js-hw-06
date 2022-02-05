const form = document.querySelector(".login-form");

form.addEventListener("submit", onForm);
function onForm(event) {
  event.preventDefault();

  const {
    elements: {email, password}
  } = event.currentTarget;

    if (email.value === "" || password.value === ""){
      return alert("Все поля должны быть заполнены");
    } else {
      console.log("name=", email.value);
      console.log("value=", password.value);
      event.currentTarget.reset();
    };
}
