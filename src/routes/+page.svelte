<script lang="ts">
	import Flower from "$lib/Flower.svelte";
	import EditIcon from "$lib/EditIcon.svelte";
</script>

<div class="app">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="flowers">
		<Flower x={86} />
		<Flower x={80} y={-30} rotation={-20} scale={0.8} />
		<Flower x={80} y={20} rotation={16} scale={0.84} />
	</svg>

	<a class="customize" href="/customize">
		<EditIcon />
	</a>
</div>

<style>
	.app {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #001535;
	}

	.flowers {
		height: 80vh;
	}

	@media screen and (orientation: portrait) {
		.flowers {
			width: 80vw;
		}
	}

	.customize {
		position: absolute;
		top: 8px;
		right: 8px;
		font-size: 32px;
	}
</style>
