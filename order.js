const logout = document.querySelector(".logout");
logout.addEventListener("click", (e) => {
  //console.log(e.target)

  window.location.assign("login.html");
});

//fetching data from api

let orders = [];
let filteredOrders = [];
let filterOptionsByDefault = ["New", "Packed", "InTransit", "Delivered"];
let filtedOptionsSelectedByUser = [];

const table = document.querySelector(".OrderTable__body");
const request = fetch(
  `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders`
);
const promisedata = request
  .then((response) => response.json())
  .then((data) => {
    orders = data;
    filteredOrders = data;
    filtedOptionsSelectedByUser = filterOptionsByDefault;
    renderOrders(data);
  });

function renderOrders(users) {
  table.innerHTML = "";
  users.forEach((data) => {
    const html = `<tr class="tabledata">
    <td class="tabledatafont id">${data.id}</td>
    <td class="tabledatafontdark name">${data.customerName}</td>
    <td class="tabledatafontdark date ">${data.orderDate}<p class="time">${data.orderTime}</p></td>
    <td  class="tabledatafont amount">$${data.amount}</td>
    <td class="tabledatafontdark status">${data.orderStatus}</td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", html);
  });
}

// checkbox handling
const newCheckbox = document.querySelector("#new");
const packedCheckbox = document.querySelector("#packed");
const intransitCheckbox = document.querySelector("#intransit");
const deliveredCheckbox = document.querySelector("#delivered");

newCheckbox.addEventListener("click", (e) => {
  const { value, checked } = e.target;
  handleCheckboxFilter(value, checked);
});
packedCheckbox.addEventListener("click", (e) => {
  const { value, checked } = e.target;
  handleCheckboxFilter(value, checked);
});
intransitCheckbox.addEventListener("click", (e) => {
  const { value, checked } = e.target;
  handleCheckboxFilter(value, checked);
});
deliveredCheckbox.addEventListener("click", (e) => {
  const { value, checked } = e.target;
  handleCheckboxFilter(value, checked);
});

function handleCheckboxFilter(value, checked) {
  if (checked) {
    filtedOptionsSelectedByUser.push(value);
  } else {
    filtedOptionsSelectedByUser.splice(
      filtedOptionsSelectedByUser.indexOf(value),
      1
    );
  }

  filteredOrders = orders.filter((order) => {
    const { orderStatus } = order;
    return filtedOptionsSelectedByUser.indexOf(orderStatus) !== -1;
  });

  renderOrders(filteredOrders);
}

//fetched data from api
//fetched data from api
//fetched data from api
//fetched data from api

/// order page functionality

const loginAnchor = document.querySelectorAll(".loginAnchor");
const item = document.querySelectorAll(".item");
const items = document.querySelector(".items");
const count = document.querySelector(".count");
const label = document.querySelectorAll(".orderlabel");
const checkbox = document.querySelectorAll(".inputchecked");

//header navigation to other page
items.addEventListener("click", (e) => {
  const target = e.target;

  for (let i = 0; i < item.length; i++) {
    loginAnchor[i].classList.remove("active");
  }
  if (target.closest(".item")) {
    target.classList.toggle("active");
  }
});

items.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("products")) {
    window.location.assign("products.html");
  } else if (target.classList.contains("orders")) {
    window.location.assign("order.html");
  } else {
    window.location.assign("users.html");
  }
});

/*checkbox event listener*/
