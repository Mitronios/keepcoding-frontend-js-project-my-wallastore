export const showAdsList = (container, ads) => {
	if (ads.length === 0) {
		container.innerHTML = `
            <p class="text-center mt-10 text-gray-500">
            No ads have been publised yet.
            </p>
        `;
		return; // To make sure it stops on this result
	}

	const renderAds = ads
		.map((ad) => {
			return `
            <div class="border border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
            <div class="relative max-h-64 overflow-hidden">
            <img src="${ad.image || "placeholder.jpg"}" alt="${
				ad.name
			} class="absolute object-contain w-full h-full">
             </div>
            <div class="p-2">
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
};
