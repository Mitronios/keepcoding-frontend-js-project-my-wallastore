import { renderRegisterForm } from "./registerView.js";
import { createUser } from "./registerModel.js";

// Handler
const handleCreateUser = async (username, password) => {
	try {
		await createUser(username, password);
	} catch (error) {
		const createUserError = new Error("It was not possible to create a User");
		alert(createUserError);
	}
};

// Controller
export const registerController = (container) => {
	renderRegisterForm(container);

	const form = document.querySelector("#register-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const usernameElement = form.querySelector("#username");
		const username = usernameElement.value;

		const passwordElement = form.querySelector("#password");
		const password = passwordElement.value;

		// Confirm password
		const confirmPasswordElement = form.querySelector("#confirm-password");
		const confirmPassword = confirmPasswordElement.value;

		// to-do: add a true error notification for passwords and username
		if (password !== confirmPassword) {
			const passwordError = new Error("Passwords must be the same");
			alert(passwordError);
			return;
		}

		handleCreateUser(username, password);
		setTimeout(() => {
			location.hash = "#/login";
		}, 1000);
	});
};
