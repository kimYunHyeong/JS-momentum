const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "user-name";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const firstInputUserName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, firstInputUserName);
  paintGreetings(firstInputUserName);
}

function paintGreetings(InputtedUsername) {
  greeting.innerText = `Hello ${InputtedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  //show login Form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show greeting
  paintGreetings(savedUserName);
}
