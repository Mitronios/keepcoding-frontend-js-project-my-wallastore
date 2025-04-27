import { renderRegisterForm } from "./registerView.js";
import { createUser } from "./registerModel.js";
import {
	renderError,
	renderLoading,
	renderSuccess,
} from "../../utils/notificationUtils.js";

// Handler
const handleCreateUser = async (container, username, password) => {
	try {
		await createUser(username, password);
		renderSuccess(container, `Wellcome to WallaStore ${username}!!!`);
		setTimeout(() => {
			window.location = "#/login";
		}, 1000);
	} catch (error) {
		renderError(container, error.message);
		setTimeout(() => {
			location.reload();
		}, 2500);
	}
};

// Controller
export const registerController = (container) => {
	renderLoading(container);
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

		if (password !== confirmPassword) {
			const passwordError = new Error("Passwords must be the same");
			alert(passwordError);
			return;
		}

		handleCreateUser(container, username, password);
	});
};
