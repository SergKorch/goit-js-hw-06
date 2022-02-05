const form = document.querySelector(".login-form");

form.addEventListener("submit", onForm);
function onForm(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log("===", formData);
  formData.forEach((value, name) => {
    if (value === "" || name === "") {
      return alert("Все поля должны быть заполнены");
    } else {
      console.log("name=", name);
      console.log("value=", value);
      event.currentTarget.reset();
    }
  });
}
