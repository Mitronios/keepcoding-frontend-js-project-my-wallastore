import { renderLoading, renderSuccess } from "../../utils/notificationUtils.js";
import { createAd } from "./createAdModel";
import { renderCreateProductForm } from "./createAdView.js";

export const createAdController = (container) => {
	renderLoading(container);
	renderCreateProductForm(container);

	const form = document.querySelector("#product-form");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		// Capture all form data including the only button available
		const formData = new FormData(form);

		const body = {
			name: formData.get("name"),
			description: formData.get("description"),
			price: parseFloat(formData.get("price")),
			image: formData.get("image"),
		};

		if (formData.get("forSale") === "on") {
			body.sale = "For Sale";
		}

		try {
			await createAd(body);

			renderSuccess(container, "Product Created succesfully!");
			location.hash = "#/";

			form.reset();
		} catch (error) {
			alert("Error creating product: " + error.message);
		}
	});
};
