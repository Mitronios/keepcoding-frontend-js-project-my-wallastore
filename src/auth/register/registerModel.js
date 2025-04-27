import { post } from "../../core/apiClient.js";

export const createUser = async (username, password) => {
	return await post("/auth/register", { username, password });
};
