import { registerController } from "./registerController.js";

export const registerRoute = (container) => {
	registerController(container);
};
