const logout = document.querySelector(".logout");
logout.addEventListener("click", (e) => {
  //console.log(e.target)

  window.location.assign("login.html");
});

//logout functionality

//fetching user data
let usersData = [];
let filteredUsersData = [];
const table = document.querySelector(".OrderTable__body");
const request = fetch(
  `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users`
);
const promisedata = request
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    usersData = data;
    filteredUsersData = data;
    renderUsers(filteredUsersData);
  });

function renderUsers(users) {
  table.innerHTML = "";
  users.forEach((data) => {
    const html = `<tr class="tabledata">
        <td class="tabledatafont id">${data.id}</td>
        <td class="tabledatafontdark profilePic"><img src="${data.profilePic}"</td>
        <td class="tabledatafontdark fullname ">${data.fullName}</td>
        <td  class="tabledatafont dob">${data.dob}</td>
        <td class="tabledatafontdark gender">${data.gender}</td>
        <td class="tabledatafontdark location">${data.currentCity},${data.currentCountry}</td>
        </tr>`;

    table.insertAdjacentHTML("beforeend", html);
  });
}

// filter by name
const searchEl = document.querySelector(".searchbox");
searchEl.addEventListener("input", (e) => {
  const nameToBeMatched = e.target.value.trim().toLowerCase();
  if (nameToBeMatched === "") {
    filteredUsersData = usersData;
  } else {
    filteredUsersData = usersData.filter(
      (user) => user.fullName.toLowerCase().indexOf(`${nameToBeMatched}`) !== -1
    );
  }
  renderUsers(filteredUsersData);
});

// const render = function (data) {
//   const html = `<tr class="tabledata">
//    <td class="tabledatafont id">${data.id}</td>
//    <td class="tabledatafontdark profilePic"><img src="${data.profilePic}"</td>
//    <td class="tabledatafontdark fullname ">${data.fullName}</td>
//    <td  class="tabledatafont dob">${data.dob}</td>
//    <td class="tabledatafontdark gender">${data.gender}</td>
//    <td class="tabledatafontdark location">${data.currentCity},${data.currentCountry}</td>
//    </tr>`;

//   table.insertAdjacentHTML("beforeend", html);
// };

/*nav functionality*/
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

//page redirecting functionality
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
