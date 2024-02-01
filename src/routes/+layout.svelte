<svelte:head>
	<title>Flowers</title>
</svelte:head>

<slot />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
		font-family: "Poppins", sans-serif;
		color: #c1d2ec;
	}
</style>
