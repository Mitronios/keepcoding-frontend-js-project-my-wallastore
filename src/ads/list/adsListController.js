import { getAdsList } from "./adsListModel.js";
import { showAdsList } from "./adsListView.js";

export async function adsListController(container) {
	try {
		// show ads
		const ads = await getAdsList();
		console.log(ads);
		showAdsList(container, ads);
	} catch (error) {
		console.error(error);
	}
}
