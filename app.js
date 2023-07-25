const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// get a reference to the login button
const loginButton = document.getElementById('loginbutton');

// add a click event listener to the login button
loginButton.addEventListener('click', ()=>{
  // redirect the user to the hompage when the button is clicked
  window.location.href='../public/Homepage/Homepage.html';
});

