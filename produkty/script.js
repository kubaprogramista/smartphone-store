/*
-------------------------------------------------DARK MODE---------------------------------------------
*/
let categories = new Set();
let addToCartBtns;
let currentProducts = products;
let itemPrice = 0;
let totalPrice = 0;
let countItems = 0;

const toggle = document.querySelector("#darkmode-toggle");
const bottomWaveColor = document.querySelectorAll(".bottom-wave .shape-fill");
const upperWaveColor = document.querySelectorAll(".upper-wave .shape-fill");

function dark_mode() {
  if (toggle.checked) {
    bottomWaveColor.forEach((element) => {
      element.style.transition = "all .3s ease-in-out";
      element.style.fill = "#242424";
    });
    upperWaveColor.forEach((element) => {
      element.style.transition = "all .3s ease-in-out";
      element.style.fill = "#242424";
    });
    document.body.style.transition = "0.3s ease-in-out";
    document.body.style.backgroundColor = "rgb(47,47,47)";
  } else {
    bottomWaveColor.forEach((element) => {
      element.style.transition = "all .3s ease-in-out";
      element.style.fill = "#264ACA";
    });
    upperWaveColor.forEach((element) => {
      element.style.transition = "all .3s ease-in-out";
      element.style.fill = "#264ACA";
    });
    document.body.style.transition = "0.3s ease-in-out";
    document.body.style.backgroundColor = "rgb(51,99,231)";
  }
}

/*
----------------------------------------RESPONSYWNA LISTA NA PRZYCISK----------------------------------
*/

const responsiveList = document.querySelector(".responsiveList");
const mobileHeaderLinks = document.querySelector("#headerLinks");
const mobileHeaderButtons = document.querySelector("#headerButtons");

responsiveList.addEventListener("click", function () {
  mobileHeaderLinks.classList.toggle("active");
  mobileHeaderButtons.classList.toggle("active");
  responsiveList.classList.toggle("active");
});

/*
-----------------------------------------TWORZENIE WSZYSTKICH PRODUKTÓW--------------------------------
*/
const cartSection = document.querySelector(".cart-products");
const cartTotalPrice = document.querySelector(".cart-total-price");
const productsSection = document.querySelector(".mainRight");

const renderProducts = (items) => {
  productsSection.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const newProduct = document.createElement("div");
    newProduct.className = `productBox ${items[i].category} ${
      items[i].sale ? "onSale" : ""
    }`;
    newProduct.innerHTML = `
        <img src="${items[i].image}" alt="product image">
        <p class="productName">${items[i].name}</p>
        <p class="productDesc">${items[i].description}</p>
        <div class="productPrice">
            <span class="price">${items[i].price.toFixed(2)} zł</span>
            <span class="priceSale">${(
              items[i].price - items[i].saleAmount
            ).toFixed(2)} zł</span>
        </div>
        <button class="addToCartBtn ${
          items[i].id
        }"><img src="../png/add-to-cart.png" alt="add to cart"></button>
        <div class="product-sale-info">Promocja</div>`;
    productsSection.appendChild(newProduct);
  }

  /*Dodawanie przedmiotów do koszyka*/

  addToCartBtns = document.querySelectorAll(".addToCartBtn");
  let lastID = 0;
  let id = 0;
  let count = 1;

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.path.length === 10) {
        id = e.path[1].classList[1];
        if (lastID === id) {
          ++count;
        } else {
          count = 1;
        }
      } else {
        id = e.path[1].classList[1];
        if (lastID === id) {
          ++count;
        } else {
          count = 1;
        }
      }
      const cartIfEmptyDiv = document.querySelector(".cart-if-empty");
      let productID = btn.classList[1];

      const newCartProduct = document.createElement("div");
      newCartProduct.className = `cart-product-box ${productID}`;
      newCartProduct.innerHTML = `<img src="${
        products[productID].image
      }" alt="product image">
            <section class="cart-product-info">
                <p class="cart-product-name">${products[productID].name}</p>
                <p class="cart-product-price">${
                  products[productID].sale
                    ? (
                        products[productID].price -
                        products[productID].saleAmount
                      ).toFixed(2)
                    : products[productID].price.toFixed(2)
                } zł</p>
            </section>`;
      itemPrice = products[productID].sale
        ? (products[productID].price - products[productID].saleAmount).toFixed(
            2
          )
        : products[productID].price.toFixed(2);
      itemPrice = parseFloat(itemPrice);
      totalPrice += itemPrice;
      cartTotalPrice.innerHTML = `${totalPrice.toFixed(2)} zł`;

      const cartItemCounter = document.querySelector(".cart-notification");
      countItems++;
      cartItemCounter.innerHTML = countItems;

      cartIfEmptyDiv.classList.add("active");
      cartSection.appendChild(newCartProduct);
      lastID = id;
    });
  });
};

/* 
----------------------------------------------TWORZENIE KATEGORII-------------------------------------
*/

const categoriesSection = document.querySelector(".categories-section");

const renderCategories = (items) => {
  categories.add("wszystkie");
  for (let i = 0; i < items.length; i++) {
    categories.add(items[i].category);
  }
};

const createCategories = () => {
  let x = 0;
  for (const z of categories.values()) {
    const newCategory = document.createElement("button");
    newCategory.classList.add(`${z}`);
    newCategory.innerHTML = `${z}`;
    categories = [...categories];

    x === 0 ? newCategory.classList.add("active") : "";

    categoriesSection.appendChild(newCategory);
    x++;
  }
};

document.onload = renderProducts(products);
document.onload = renderCategories(products);
document.onload = createCategories();

/*
-------------------------------------------FILTRY PO LEWEJ STRONIE-------------------------------------
*/

const categoriesButtons = document.querySelectorAll(
  ".categories-section button"
);

categoriesButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const XD = e.target.className;

    categoriesButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    currentProducts = products;
    if (XD.includes("wszystkie")) {
      currentProducts = products;
      document.body.classList.remove("active");
    } else {
      currentProducts = currentProducts.filter(
        (product) => product.category === XD
      );
      document.body.classList.add("active");
    }
    if (XD.includes("active")) {
      categoriesButtons.forEach((btn) => {
        btn.classList.remove("active");
        document.body.classList.remove("active");
      });
      currentProducts = products;
      categoriesButtons[0].classList.add("active");
    }
    renderProducts(currentProducts);
  })
);

/*
---------------------------------------------KOSZYK-----------------------------------------
*/

const cartButton = document.querySelector("#cart");
const cartWindow = document.querySelector(".cart-window");

/*Pojawianie sie okna koszyka*/
cartButton.addEventListener("click", () => {
  cartWindow.classList.toggle("active");
});

/*----------------------------------WYCZYSC KOSZYK-------------------------------------- */

const cartClearBtn = document.querySelector(".cart-clear-button");

cartClearBtn.addEventListener("click", () => {
  const cartIfEmptyDiv = document.querySelector(".cart-if-empty");
  const cartItemCounter = document.querySelector(".cart-notification");

  cartSection.innerHTML =
    "<div class='cart-if-empty'>Twój koszyk jest pusty...</div>";
  totalPrice = 0;
  countItems = 0;
  countNumberOfAllProducts = 0;
  cartTotalPrice.innerHTML = "0 zł";
  cartItemCounter.innerHTML = "0";
});

/*
PROMOCJE
*/

const productsOnSaleBtn = document.querySelector("#products-on-sale");

productsOnSaleBtn.addEventListener("click", (e) => {
  document.querySelector(".mainLeft").classList.add("active");

  currentProducts = currentProducts.filter((product) => product.sale === true);
  renderProducts(currentProducts);
});
