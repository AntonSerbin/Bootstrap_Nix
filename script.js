let loginHeader = document.querySelector("#loginHeader");
let loginForm = document.querySelector(".loginForm");
loginHeader.addEventListener('click', () => {
    document.querySelector(".loginForm").classList.add("active")
});