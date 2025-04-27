export const renderRegisterForm = (container) => {
	container.innerHTML = `
        <form id="register-form" class="max-w-sm mx-auto mt-10">
			<div class="mb-4">
				<label class="block text-gray-700" for="username">Username</label>
				<input
          class="w-full p-2 border rounded"
					id="username"
					type="text"
          name = "username"
					placeholder="Your username"
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
          placeholder="Add a safe password"
          minlength="8"
					required
				/>
			<div class="mb-4">
				<label class="block text-gray-700" for="confirm-password">Password</label>
				<input
          class="w-full p-2 border rounded"
					id="confirm-password"
					type="password"
          name="confirm-password"
          placeholder="Please confirm your password"
          minlength="8"
					required
				/>
			</div>
			<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
				Create User
			</button>
		</form>
    `;
};
