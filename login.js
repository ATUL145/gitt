/* hide loader function*/



//loader done

//form validation
const social = document.querySelector(".social")
const header = document.querySelector(".header")
const formValidation = document.querySelector(".login")
const username = document.querySelector(".username")
const password = document.querySelector(".password")
const formContainer = document.querySelector(".formContainer")
const loginBtn = document.querySelector(".loginBtn")
const loader = document.querySelector(".center")
var formredirect = formValidation.addEventListener("submit", function order(e) {
    e.preventDefault();

    if (username.value !== password.value) {
        alert(`Please Enter valid credintials ${username.value} ${password.value}`)
    } else {

        alert("Login is successfull")
        header.style.display = "none"
        formContainer.style.display = "none"
        social.style.display = "none"
        loader.style.display = "block"
        document.body.style.backgroundColor = "#20b883"
        setTimeout(loading, 2500)
    }
})

var loading = () => {
    document.body.style.backgroundColor = "#f6f7fb"
    window.location.assign("order.html")
};


//login page suceessfully redirected to order page /
//toggling the form coontainer//

const items = document.querySelector(".items")
const item = document.querySelectorAll(".item")
const anchor = document.querySelectorAll(".loginAnchor")
items.addEventListener("click", (e) => {

    const target = e.target;

    for (let i = 0; i < item.length; i++) {
        anchor[i].classList.remove("active")
    }
    if (target.closest(".item")) {

        target.classList.toggle("active")
        formContainer.classList.add("inactive")

    }
})

document.querySelector(".leftItem").addEventListener("click", (e) => {
    formContainer.classList.remove("inactive")
    for (let i = 0; i < item.length; i++) {
        anchor[i].classList.remove("active")
    }
})

//toggling the form coontainer done//


//order page js//


//logout button//


//increment js//
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})
