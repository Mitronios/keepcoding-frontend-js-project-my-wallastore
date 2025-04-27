import { createAdController } from "./create/createAdController.js";
import { listAdsController } from "./list/listAdsController.js";

export const adsRoute = (container) => {
	const route = location.hash;

	if (route === "#/ads/create") {
		createAdController(container);
	} else {
		listAdsController(container);
	}
};
