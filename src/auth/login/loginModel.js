import { post } from "../../core/apiClient.js";

export const userLogin = async (username, password) => {
	return await post("/auth/login", { username, password });
};
