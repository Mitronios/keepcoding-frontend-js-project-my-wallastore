import { postUsingToken } from "../../core/apiClient";

export const createAd = async (body) => {
	return await postUsingToken("/api/ads", body);
};
