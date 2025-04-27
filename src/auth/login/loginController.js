import { renderLoading, renderSuccess } from "../../utils/notificationUtils.js";
import { userLogin } from "./loginModel.js";
import { renderLoginForm } from "./loginView";

export const loginController = (container) => {
	renderLoading(container);
	renderLoginForm(container);

	const form = document.querySelector("#login-form");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const username = form.username.value;
		const password = form.password.value;

		try {
			const response = await userLogin(username, password);
			renderSuccess(container, `Logged Successfully Welcome! ${username}`);

			localStorage.setItem("token", response.accessToken);

			if (response.accessToken) {
				location.hash = "#/";
			}
		} catch (error) {
			const loginError = new Error(
				"Valid username and password are required" + error.message
			);
			alert(loginError);
		}
	});
};
