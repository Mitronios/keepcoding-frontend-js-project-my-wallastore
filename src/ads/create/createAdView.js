export const renderCreateProductForm = (container) => {
	container.innerHTML = `
        <section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
		<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
			Add a new product to sell or to purchase
		</h2>
		<form id="product-form">
			<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
				<div class="sm:col-span-2">
					<label
						for="name"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Product Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						required
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						placeholder="Product name"
						maxlength="70"
					/>
				</div>

				<div class="w-full">
					<label
						for="price"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Price
					</label>
					<input
						type="number"
						name="price"
						id="price"
						required
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						placeholder="$500"
					/>
				</div>

				<div class="w-full">
					<label
						for="image"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Image URL
					</label>
					<input
						type="text"
						name="image"
						id="image"
						required
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						placeholder="https://example.com/image.jpg"
					/>
				</div>

				<div class="sm:col-span-2">
					<label
						for="description"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Description
					</label>
					<textarea
						id="description"
						name="description"
						rows="6"
						maxlength="200"
						required
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						placeholder="Yor product description..."
					></textarea>
				</div>

				<div class="flex items-center">
					<input
						id="forSale"
						name="forSale"
						type="checkbox"
						class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						for="forSale"
						class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						For Sale
					</label>
				</div>
                </div>
				<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
					Only check if you are selling. If you are looking to buy, leave it
					unchecked.
				</p>

			<button
				type="submit"
				class="inline-flex items-center px-5 py-2.5 mt-6 text-sm font-medium text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 dark:focus:ring-primary-900"
			>
				Add product
			</button>
		</form>
	</div>
</section>
`;
};
