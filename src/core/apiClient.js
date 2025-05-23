import { getAuthToken } from "../utils/authUtils.js";

const API_BASE_URL = "http://localhost:8000";
export const API_ENDPOINT_ADS = "/api/ads";

// Fetch
const fetchData = async (endpoint, options = {}) => {
	const url = `${API_BASE_URL}${endpoint}`;

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(
				`Server error: ${response.status} - ${response.statusText}`
			);
		}
		return await response.json();
	} catch (error) {
		if (error.message === "Failed to fetch") {
			throw new Error("Out of service. Please try again later.");
		}
	}
};

// Get
export const get = async (endpoint) => {
	return await fetchData(endpoint);
};

// Get by Id
export const getById = async (id) => {
	const endpointWithId = `${API_ENDPOINT_ADS}/${id}?_expand=user`;
	return await fetchData(endpointWithId);
};

// Post
export const post = async (endpoint, body) => {
	return fetchData(endpoint, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(body),
	});
};

// Post using token
export const postUsingToken = async (endpoint, options) => {
	const token = getAuthToken();

	const headers = {
		"content-type": "application/json",
	};

	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}

	return await fetchData(endpoint, {
		method: "POST",
		headers: headers,
		body: JSON.stringify(options),
	});
};
