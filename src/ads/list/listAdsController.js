import { renderError, renderLoading } from "../../utils/notificationUtils.js";
import { getAdsList } from "./listAdsModel.js";
import { showAdsList } from "./listAdsView.js";

export const listAdsController = async (container) => {
	renderLoading(container);

	try {
		// show ads
		const ads = await getAdsList();
		showAdsList(container, ads);
	} catch (error) {
		renderError(container, error.message);
	}
};
