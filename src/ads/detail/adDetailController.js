import { renderError, renderLoading } from "../../utils/notificationUtils.js";
import { getAdDetails } from "./adDetailModel.js";
import { renderAdDetails } from "./adDetailView.js";

export const adDetailController = async (container, id) => {
	renderLoading(container);

	try {
		const adDetail = await getAdDetails(id);

		if (!adDetail) {
			renderError(container, "Ad not found.");
			return;
		}

		renderAdDetails(container, adDetail);
	} catch (error) {
		renderError(container + error.message);
	}
};
