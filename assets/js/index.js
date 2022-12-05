const email = document.getElementById("email");
const password = document.getElementById("password");
const errors = document.querySelectorAll(".error-msg");
const submitButton = document.getElementById("submit");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (e.target.email.value === "test@test.com" && e.target.password.value === "password") {
		window.location.href = "./wall.html";
	} else if (e.target.email.value !== "test@test.com" && e.target.password.value !== "password") {
		errors[0].style.visibility = "visible";
		email.style.backgroundColor = "rgba(225, 85, 76, 0.08)";
		errors[1].style.visibility = "visible";
		password.style.backgroundColor = "rgba(225, 85, 76, 0.08)";
	}
});
