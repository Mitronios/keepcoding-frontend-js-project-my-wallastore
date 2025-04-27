export const parseAdIdFromHash = (hash) => {
	const adDetailRegex = /^#\/ads\/(\d+)$/;
	const match = hash.match(adDetailRegex);
	return match ? match[1] : null;
};
