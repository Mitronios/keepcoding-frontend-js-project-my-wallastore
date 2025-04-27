export const renderNavbar = (container) => {
	const navbar = document.createElement("nav");
	navbar.className =
		"bg-green-700 p-4 flex justify-between items-center text-white";

	navbar.innerHTML = `
      <div class="text-xl font-bold">
      <h1>WallaStore</h1>
    </div>
    <div class="space-x-4">
      <a href="#/ads" class="hover:text-gray-400">Home</a>
      <a href="#/ads/create" class="hover:text-gray-400">Create Ad</a>
      <a href="#/login" class="hover:text-gray-400">Login</a>
      <a href="#/register" class="hover:text-gray-400">Register</a>
    </div>
  `;

	container.appendChild(navbar);
};
