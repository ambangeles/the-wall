const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errors = document.querySelectorAll(".error-msg");
const submitButton = document.getElementById("submit");
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (!e.target.email.value) {
		errors[0].style.visibility = "visible";
		email.style.backgroundColor = "rgba(225, 85, 76, 0.08)";
	} else {
		errors[0].style.visibility = "hidden";
		email.style.backgroundColor = "rgba(44, 107, 255, 0.08)";
	}

	if (!e.target.password.value) {
		errors[1].style.visibility = "visible";
		password.style.backgroundColor = "rgba(225, 85, 76, 0.08)";
	} else {
		errors[1].style.visibility = "hidden";
		password.style.backgroundColor = "rgba(44, 107, 255, 0.08)";
	}

	if (e.target.confirmPassword.value !== e.target.password.value) {
		errors[2].style.visibility = "visible";
		confirmPassword.style.backgroundColor = "rgba(225, 85, 76, 0.08)";
	} else {
		errors[2].style.visibility = "hidden";
		confirmPassword.style.backgroundColor = "rgba(44, 107, 255, 0.08)";
	}

	if (e.target.email.value && e.target.confirmPassword.value === e.target.password.value && e.target.password.value) {
		window.location.href = "./wall.html";
	}
});
