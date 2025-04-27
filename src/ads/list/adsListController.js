import { getAdsList } from "./adsListModel.js";
import {
	renderAdsError,
	renderAdsLoading,
	showAdsList,
} from "./adsListView.js";

export const adsListController = async (container) => {
	renderAdsLoading(container);

	try {
		// show ads
		const ads = await getAdsList();
		console.log(ads);
		showAdsList(container, ads);
	} catch (error) {
		renderAdsError(container, error.message);
	}
};
