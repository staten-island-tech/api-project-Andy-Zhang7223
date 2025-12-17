import "./style.css";

//Use a fetch call to get the api, not copy and paste the api into your code
//btw this is the api, https://riskofrain2api.herokuapp.com/api/everyItem

function inject(item) {
  const test = document.querySelector(".test");
  test.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <img src=${item.itemImage} alt="">
    </div>`
  );
}

api.forEach((item) => inject(item));
