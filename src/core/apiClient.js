const API_BASE_URL = "http://localhost:8000";

async function fetchData(endpoint, options = {}) {
	const url = `${API_BASE_URL}${endpoint}`;
	const response = await fetch(url, options);

	if (!response.ok) {
		const error = await response.json();
		throw new Error(
			error.messsage || "Something went wrong, please try again later."
		);
	}

	return response.json();
}

export async function get(endpoint) {
	return fetchData(endpoint);
}

export async function post(endpoint, body) {
	return fetchData(endpoint, {
		method: "POST",
		headers: {
			"content-type": "application-json",
		},
		body: JSON.stringify(body),
	});
}
