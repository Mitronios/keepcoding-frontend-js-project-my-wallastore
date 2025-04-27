import { getAdDetails } from "./adDetailModel.js";
import { renderAdDetails } from "./adDetailView.js";

export const adDetailController = async (container, id) => {
	try {
		const adDetail = await getAdDetails(id);
		renderAdDetails(container, adDetail);
	} catch (error) {
		alert("Invalid Id: " + error.message);
	}
};
