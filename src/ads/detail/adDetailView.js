export const renderAdDetails = (container, ad) => {
	container.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-80 object-cover" src="${ad.image}" 
            alt="${ad.name}">
            <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    ${ad.name}
                    </h2>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    ${ad.description}</p>
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Precio:</span>
                        <span class="text-gray-600 dark:text-gray-300">$
                        ${ad.price}
                    </span>
                    </div>
                            ${
															ad.sale
																? `<p class="text-green-500 font-semibold">${ad.sale}</p>`
																: `<p class="text-yellow-500 font-semibold">Looking to purchase</p>`
														}
                </div>
                 <p class="text-red-400 dark:text-gray-300 text-lg mt-4">
                    ${
											ad.sale
												? `Seller: ${ad.user?.username || "Unknown"}`
												: `Looking to buy: ${ad.user?.username || "Unknown"}`
										}
                </p>
            </div>
        </div>
    `;
};
