import { getById } from "../../core/apiClient.js";

export const getAdDetails = async (id) => {
	return await getById(`/${id}`);
};
