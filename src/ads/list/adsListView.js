export function showAdsList(container, ads) {
	if (ads.length === 0) {
		container.innerHTML = `
            <p class="text-center mt-10 text-gray-500">
            No ads have been publised yet.
            </p>;
        `;
		return; // To make sure it stops on this result
	}

	const renderAds = ads
		.map((ad) => {
			return `
            <div class="border border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
            <div class="p-2">
            <img src="${ad.image || "placeholder.jpg"}" alt="${
				ad.name
			} class="h-48 w-96 object-cover mb-4">
            <h2 class="text-gray-900 font-bold text-xl my-2">${ad.name}</h2>
            <p class="text-gray-700 text-base">${ad.description}</p>
            <p class="font-bold mt-2">${ad.price} USD</p>
            <p class="italic mt-2 text-red-400 text-sm">${
							ad.sale ? ad.sale : "Looking for purchase"
						}</p>
            <a href="#/ads/${ad.id}"
            class="text-blue-500 hover:underline mt-2 inline-block">Show details</a>
            </div>
            </div>
        `;
		})
		.join("");

	container.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                ${renderAds}
            </div>
        `;
}

export function renderAdsError(container, message) {
	container.innerHTML = `<p class="text-red-500 text-center mt-10">${message}</p>`;
}

export function renderAdsLoading(container) {
	container.innerHTML = `<button type="button" class="flex bg-indigo-500 p-4" disabled>
  <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="2.5" r="1.5" opacity=".14"/><circle cx="16.75" cy="3.77" r="1.5" opacity=".29"/><circle cx="20.23" cy="7.25" r="1.5" opacity=".43"/><circle cx="21.50" cy="12.00" r="1.5" opacity=".57"/><circle cx="20.23" cy="16.75" r="1.5" opacity=".71"/><circle cx="16.75" cy="20.23" r="1.5" opacity=".86"/><circle cx="12" cy="21.5" r="1.5"/><animateTransform attributeName="transform" type="rotate" calcMode="discrete" dur="0.75s" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" repeatCount="indefinite"/></g></svg></span>
  <span class="text-white ml-3">Loading products…</span>
</button>
`;
}
