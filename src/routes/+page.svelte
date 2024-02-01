<script lang="ts">
	import type { PageData } from "./$types";
	import Flower from "$lib/Flower.svelte";
	import EditIcon from "$lib/EditIcon.svelte";

	export let data: PageData;
</script>

<div
	class="app"
	style="
	--bg-color: {data.backgroundColor};
	--flowers-size: {data.message ? '68' : '80'};"
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="flowers">
		<Flower x={86} petalsColor={data.petalsColor} leafColor={data.leafColor} />
		<Flower
			x={80}
			y={-30}
			rotation={-20}
			scale={0.8}
			petalsColor={data.petalsColor}
			leafColor={data.leafColor}
		/>
		<Flower
			x={80}
			y={20}
			rotation={16}
			scale={0.84}
			petalsColor={data.petalsColor}
			leafColor={data.leafColor}
		/>
	</svg>

	{#if data.message}
		<div class="message">{data.message}</div>
	{/if}

	<a
		class="customize"
		href="/customize?petalsColor={data.petalsColor.replace(
			'#',
			''
		)}&leafColor={data.leafColor.replace(
			'#',
			''
		)}&backgroundColor={data.backgroundColor.replace('#', '')}
		{data.message ? `&message=${data.message}` : ''}"
	>
		<EditIcon />
	</a>
</div>

<style>
	.app {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 16px;
		background: var(--bg-color);
	}

	.flowers {
		height: calc(var(--flowers-size) * 1vh);
	}

	@media screen and (orientation: portrait) {
		.flowers {
			width: calc(var(--flowers-size) * 1vw);
		}
	}

	.message {
		font-family: "Pacifico", cursive;
		font-size: 42px;
		font-weight: 600;
		animation: message-appearing 8s 1s ease both;
	}

	@keyframes message-appearing {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	.customize {
		position: absolute;
		top: 8px;
		right: 8px;
		font-size: 32px;
	}
</style>
