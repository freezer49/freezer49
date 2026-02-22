const form = document.getElementById("identify-form");
form.addEventListener("submit", submitForm);
// console.log(form);

async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(form);
  let object = {};
  for (let value of formData) {
    object = { ...object, [value[0]]: value[1] };
  }
  console.log(formData(form));
  const res = await fetch();
  return res;
}

// fn().then().catch();

// fetch().then(res) => {})
// .catch((err) => {});
