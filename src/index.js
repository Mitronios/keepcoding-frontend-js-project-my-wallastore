import { adsRoute } from "./ads/ads.js";
import { registerRoute } from "./auth/register/register.js";

const router = () => {
	const mainContainer = document.querySelector("#main");
	const routeHash = location.hash;
	const routePath = location.pathname;

	if (routeHash.startsWith("#/register") || routePath === "/register") {
		registerRoute(mainContainer);
	} else {
		adsRoute(mainContainer);
	}
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
