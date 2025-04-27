export const renderError = (container, message) => {
	container.innerHTML = `<p class="text-red-500 text-center mt-10">${message}</p>`;
};

export const renderLoading = (container) => {
	container.innerHTML = `
    <button type="button" class="flex bg-indigo-500 p-4" disabled>
      <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="2.5" r="1.5" opacity=".14"/><circle cx="16.75" cy="3.77" r="1.5" opacity=".29"/><circle cx="20.23" cy="7.25" r="1.5" opacity=".43"/><circle cx="21.50" cy="12.00" r="1.5" opacity=".57"/><circle cx="20.23" cy="16.75" r="1.5" opacity=".71"/><circle cx="16.75" cy="20.23" r="1.5" opacity=".86"/><circle cx="12" cy="21.5" r="1.5"/><animateTransform attributeName="transform" type="rotate" calcMode="discrete" dur="0.75s" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" repeatCount="indefinite"/></g></svg></span>
      <span class="text-white ml-3">Coming right up! timer⏱️</span>
    </button>
  `;
};

export const renderSuccess = (container, message) => {
	const modalBackdrop = document.createElement("div");
	modalBackdrop.classList.add(
		"fixed",
		"inset-0",
		"bg-gray-500",
		"bg-opacity-50",
		"flex",
		"justify-center",
		"items-center",
		"z-50"
	);

	const modalContainer = document.createElement("div");
	modalContainer.classList.add(
		"bg-white",
		"p-8",
		"rounded-lg",
		"shadow-xl",
		"w-96"
	);

	const modalContent = document.createElement("div");
	modalContent.classList.add("text-center");
	modalContent.innerHTML = `
    <p class="text-green-500 font-semibold mb-4">${message}</p>
    <button class="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none">
      Close
    </button>
  `;

	const closeButton = modalContent.querySelector("button");
	closeButton.addEventListener("click", () => {
		modalBackdrop.remove();
	});

	modalContainer.appendChild(modalContent);
	modalBackdrop.appendChild(modalContainer);
	document.body.appendChild(modalBackdrop);
};
