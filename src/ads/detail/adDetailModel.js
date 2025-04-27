import { getById } from "../../core/apiClient.js";
import { API_ENDPOINT_ADS } from "../../core/apiClient.js";

export const getAdDetails = async (id) => {
	return await getById(`/${id}`);
};
