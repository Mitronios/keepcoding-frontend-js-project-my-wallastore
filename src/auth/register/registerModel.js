import { post } from "../../core/apiClient";

export const createUser = async (userName, password) => {
	return await post("/auth/register", { userName, password });
};
