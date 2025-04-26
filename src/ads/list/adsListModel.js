import { get } from "../../core/apiClient.js";

export async function getAdsList() {
	return await get("/api/ads");
}
