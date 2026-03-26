function callApi() {
  fetch("http://localhost:8080/api/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then(async (res) => console.log(await res.json()))
    .catch(console.error);
}

callApi();
