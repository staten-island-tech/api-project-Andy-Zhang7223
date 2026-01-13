import "./style.css";

//Use a fetch call to get the api, not copy and paste the api into your code
//btw this is the api, https://riskofrain2api.herokuapp.com/api/everyItem

const api = await fetch("https://riskofrain2api.herokuapp.com/api/everyItem");
//Below this line to the star is code that can console.log the api
// .then((response) => {
//   const apiurl = response.url;
// });
//*

//Turn api url into variable: (Priority Zero, Get this to work)
const apiurl = api.url;

//test:
console.log(apiurl);

//Run try catch function here: (Priority One, Use this as a guard to yourself)

//Attempting to print all the data:
const apidata = await api.json();
//Test:
console.log(apidata);

// console.log(api);

//Inject function and other schtuff
// function inject(item) {
//   const test = document.querySelector(".test");
//   test.insertAdjacentHTML(
//     "afterbegin",
//     `<div class="card" id="${item.itemName}">
//     <img class="itemimg" id="${item.itemName}img" src=${item.itemImage} alt="">
//     <h1 class="itemname">${item.itemName}</h1>
//     <h2 class="itemdescription">${item.description}</h2>
//     <h2 class="itemscaling">${item.stackType}</h2>
//     </div>`
//   );
// }

// apidata.forEach((item) => inject(item));

//The try and catch function
async function check() {
  try {
    const api = await fetch(
      "https://riskofrain2api.herokuapp.com/api/everyItem"
    );
    if (api.status != 200) {
      throw new Error(api);
    }
  } catch (error) {
    console.log(error.message);
  }
}

check();

//Attempt on what you want to do:
function inject(item) {
  const test = document.querySelector(".test");
  test.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${item.itemName}" data-category=${item.rarity}>
    <button class="Buttontoitem">
    <h2 class="itemnameoncard">${item.itemName}</h2>
    <img class="itemimg" id="${item.itemName}img" src=${item.itemImage}>
    </button>
    </div>`
  );
}

apidata.forEach((item) => inject(item));

//The image for Aurrlionite's Blessing is wrong, find a way to fix it(Or at least horribly fail trying to)(We failed Horribly doing so good to note!)
// function correctaurelionitesblessing() {
//   const wrongimglol = document.querySelector("#Aurelionite's Blessingimg");
//   if (wrongimglol) {
//     const rightimg =
//       "https://riskofrain2.wiki.gg/images/Aurelionite%27s_Blessing.png?501841";
//     const thediv = document.querySelector("#Aurelionite's Blessing");
//     wrongimglol.remove();
//     thediv.appendChild(rightimg);
//   } else {
//   }
// }

// correctaurelionitesblessing();

// function filter(btncategory) {
//   const cards = document.querySelectorAll(".card");
//   cards.forEach((card) => {
//     const cardCategory = card.getAttribute("data.category").toLowerCase();
//     if (cardCategory === btncategory || btncategory === "all") {
//       card.style.display = "";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }

// function filterButtons() {
//   const filterbuttons = document.querySelectorAll(".filter");
//   filterbuttons.forEach((button) => {
//     button.addEventListener("click", function (event) {
//       const buttoncategory = event.target.textContent.toLowerCase();
//       filter(buttoncategory);
//     });
//   });
// }

// filterButtons();

//Searching For specific Items!
function searching() {
  const searchbar = document.querySelector(".searchbar")
  searchbar.addEventListener("input", () => {
    const searchbarvalue = searchbar.value.toLowerCase();
    const Buttontoitem = document.querySelectorAll(".Buttontoitem");
    Buttontoitem.forEach((btn) => {
      const card = btn.closest(".card");
      if (!card) return;
      const itemName = card.id.toLowerCase();
      if (itemName.includes(searchbarvalue) || searchbarvalue === "") {
        btn.style.display = "";
      } else {
        btn.style.display = "none";
      }
    })
  })
  }

searching()

//Return to Homepage Button(We are putting it here to run it in the Getitemdata function, yes it's messy shut up.)
function ReturntoHomePage() {
  const Returnbtn = document.querySelector(".return")
  Returnbtn.addEventListener("click", function (event) {
    const infoimg = document.querySelector(".displayingiteminfoimg");
    const infoname = document.querySelector(".displayingiteminfoname");
    const infodescription = document.querySelector(".displayingiteminfodescription");
    const infostacking = document.querySelector(".displayingiteminfostacking");
    const inforarity = document.querySelector(".displayingiteminforarity");
    const infocooldown = document.querySelector(".displayingiteminfocooldown");
    const Buttontoitem = document.querySelectorAll(".Buttontoitem");
    const ButtontoitemArray = Array.from(Buttontoitem);
    ButtontoitemArray.forEach((button) => {
      button.style.display = "";
      const searchbar = document.querySelector(".searchbar")
      searchbar.style.display = "";
    })
    infoimg.remove();
    infoname.remove();
    infodescription.remove();
    infostacking.remove();
    inforarity.remove();
    infocooldown.remove();
    Returnbtn.remove();
  })
}

//Button Listener to try and pull up data:
function Getitemdata() {
  const Buttontoitem = document.querySelectorAll(".Buttontoitem");
  const ButtontoitemArray = Array.from(Buttontoitem);
  const test = document.querySelector(".test")
  ButtontoitemArray.forEach((button) => {
    button.addEventListener("click", async function (event) {
      ButtontoitemArray.forEach((btn) => {
        btn.style.display = "none";
        const searchbar = document.querySelector(".searchbar")
        searchbar.style.display = "none"
      })
      try {
        const api2 = await fetch("https://riskofrain2api.herokuapp.com/api/everyItem");
        const apidata2 = await api2.json();
        const selectedcard = button.closest(".card")
        const item = selectedcard.getAttribute("id")
        apidata2.forEach((data) => {
        if (data.itemName === item) {
          test.insertAdjacentHTML(
            "afterbegin",
            `<button class="return">Return To The Home Page?</button>
            <img class="displayingiteminfoimg" src=${data.itemImage}>
            <h1 class="displayingiteminfoname">${data.itemName}</h1>
            <h1 class="displayingiteminfodescription">${data.description}</h1>
            <h2 class="displayingiteminfostacking">${data.stackType}</h2>
            <h2 class="displayingiteminforarity">${data.rarity}</h2>
            <h3 class="displayingiteminfocooldown">${data.cooldown}</h3>`
          )
          ReturntoHomePage()
        }
      })
        if (api2.status != 200) {
        throw new Error(api2);
      }
      }
      catch (error) {
        test.insertAdjacentHTML(
          "afterbegin",
          `<button class="return">Return To The Home Page?</button>
          <h1 class="error">There Has Been An Error, Please Refresh the Page, Go Back To The Home Page, or Try Again at Another Time</h1>
          <h1 class="errorcode"> Error Code: ${error.message}</h1>`
        )
        ReturntoHomePage()
      }

    });
  });
}

Getitemdata();

//Filtering

async function filter(btncategory) {
  const test = document.querySelector(".test")
    try {
    const whiteitems = await 
    if (api.status != 200) {
      throw new Error(api);
    }
  } catch (error) {
          test.insertAdjacentHTML(
          "afterbegin",
          `<button class="return">Return To The Home Page?</button>
          <h1 class="error">There Has Been An Error, Please Refresh the Page, Go Back To The Home Page, or Try Again at Another Time</h1>
          <h1 class="errorcode"> Error Code: ${error.message}</h1>`
        )
        ReturntoHomePage()
  }
}