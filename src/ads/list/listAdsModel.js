import { get } from "../../core/apiClient.js";
import { API_ENDPOINT_ADS } from "../../core/apiClient.js";

export const getAdsList = async () => {
	return await get(API_ENDPOINT_ADS);
};
