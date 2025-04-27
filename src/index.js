import { adsRoute } from "./ads/ads.js";
import { loginRoute } from "./auth/login/login.js";
import { registerRoute } from "./auth/register/register.js";

const router = () => {
	const mainContainer = document.querySelector("#main");
	const routeHash = location.hash;
	const routePath = location.pathname;

	if (routeHash.startsWith("#/register") || routePath === "/register") {
		registerRoute(mainContainer);
	} else if (routeHash.startsWith("#/login") || routePath === "/login") {
		loginRoute(mainContainer);
	} else {
		adsRoute(mainContainer);
	}
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
