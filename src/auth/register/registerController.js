import { renderRegisterForm } from "./registerView";

// Handler
const handleCreateUser = async (userName, password) => {
	try {
		await createUser(userName, password);
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
		const userName = usernameElement.value;

		const passwordElement = form.querySelector("#password");
		const password = passwordElement.value;

		// Confirm password
		const confirmPasswordElement = form.querySelector("#confirm-password");
		const confirmPassword = confirmPasswordElement.value;

		// to-do: add a true error notification for passwords and username
		if (password !== confirmPassword) {
			const passwordError = new Error("Passwords must be the same");
			alert(passwordError);
		}

		handleCreateUser(userName, password);
	});
};
