import { createAdController } from "./ads/create/createAdController.js";
import { adDetailController } from "./ads/detail/adDetailController.js";
import { listAdsController } from "./ads/list/listAdsController.js";
import { loginController } from "./auth/login/loginController.js";
import { registerController } from "./auth/register/registerController.js";
import { parseAdIdFromHash } from "./utils/parseHash.js";

const routes = {
	"#/register": registerController,
	"#/login": loginController,
	"#/ads/create": createAdController,
	default: listAdsController,
};

const router = () => {
	const mainContainer = document.querySelector("#main");
	const routeHash = location.hash || "#";

	mainContainer.innerHTML = ""; // Always clean before each render

	// Manage dynamic hash route
	const adId = parseAdIdFromHash(routeHash);

	if (adId) {
		adDetailController(mainContainer, adId);
		return;
	}

	const routeHandler = routes[routeHash] || routes["default"];

	routeHandler(mainContainer);
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
