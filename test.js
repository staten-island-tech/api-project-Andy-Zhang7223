const api = await fetch(
  "https://riskofrain2api.herokuapp.com/api/everyItem"
).then((response) => {
  console.log(response);
});
