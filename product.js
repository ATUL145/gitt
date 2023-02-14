const logout = document.querySelector(".logout")
logout.addEventListener("click", (e) => {
    //console.log(e.target)

    window.location.assign("login.html")


})

//logout functionality


//fetching 


const table = document.querySelector(".OrderTable")
const request = fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products`)
const promisedata = request.then(response => response.json()).then((data) => {
    console.log(data)

    for (let i = 0; i <= 28; i++) { render(data[i]) }

    var tabledata = document.querySelectorAll(".tabledata")

}
)
const render = function (data) {
    const html = `<tr class="tabledata">
   <td class="tabledatafont id">${data.id}</td>
   <td class="tabledatafontdark name">${data.medicineName}</td>
   <td class="tabledatafontdark brand ">${data.medicineBrand}</td>
   <td  class="tabledatafont date">${data.expiryDate}</td>
   <td class="tabledatafontdark price">$${data.unitPrice}</td>
   <td class="tabledatafontdark amount">${data.stock}</td>
   </tr>`

    table.insertAdjacentHTML("beforeend", html)

}




///navigation

const loginAnchor = document.querySelectorAll(".loginAnchor")
const item = document.querySelectorAll(".item")
const items = document.querySelector(".items")
const count = document.querySelector(".count")
const label = document.querySelectorAll(".orderlabel")
const checkbox = document.querySelectorAll(".inputchecked")


//header navigation to other page 
items.addEventListener("click", (e) => {

    const target = e.target;

    for (let i = 0; i < item.length; i++) {
        loginAnchor[i].classList.remove("active")
    }
    if (target.closest(".item")) {

        target.classList.toggle("active")


    }
})

//page redirecting functionality
items.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("products")) {
        window.location.assign("products.html")
    } else if (target.classList.contains("orders")) {
        window.location.assign("order.html")
    } else {
        window.location.assign("users.html")
    }
})

