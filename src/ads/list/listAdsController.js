import { getAdsList } from "./listAdsModel.js";
import {
	renderAdsError,
	renderAdsLoading,
	showAdsList,
} from "./listAdsView.js";

export const listAdsController = async (container) => {
	renderAdsLoading(container);

	try {
		// show ads
		const ads = await getAdsList();
		showAdsList(container, ads);
	} catch (error) {
		renderAdsError(container, error.message);
	}
};
