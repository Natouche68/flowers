<script>
	import Flower from "$lib/Flower.svelte";
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="flowers">
	>
	<Flower x={86} />
	<Flower x={26} y={72} rotation={-20} scale={0.8} />
	<Flower x={154} y={36} rotation={16} scale={0.84} />
</svg>

<style>
	:global(body) {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #001535;
	}

	.flowers {
		height: 80vh;
	}
</style>
