import {
	renderError,
	renderLoading,
	renderSuccess,
} from "../utils/notificationUtils.js";

export const showLoader = (container) => {
	renderLoading(container);
};

export const showError = (container, message) => {
	renderError(container, message);
};

export const showSuccess = (container, message) => {
	renderSuccess(container, message);
};
