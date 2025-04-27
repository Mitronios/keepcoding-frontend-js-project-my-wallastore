import { get } from "../../core/apiClient.js";

export const getAdsList = async () => {
	return await get("/api/ads");
};
