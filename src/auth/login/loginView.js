export const renderLoginForm = (container) => {
	container.innerHTML = `
        <form id="login-form" class="max-w-sm mx-auto mt-10">
			<div class="mb-4">
				<label class="block text-gray-700" for="username">Username</label>
				<input
					class="w-full p-2 border rounded"
					id="username"
					type="text"
					name="username"
					required
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700" for="password">Password</label>
				<input
					class="w-full p-2 border rounded"
					id="password"
					type="password"
					name="password"
					required
				/>
			</div>
			<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
				Login
			</button>
		</form>
    `;
};
