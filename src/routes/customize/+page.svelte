<script lang="ts">
	import Flower from "$lib/Flower.svelte";

	let petalsColor = "#f80059";
	let leafColor = "#00ff85";
	let backgroundColor = "#001535";
</script>

<div class="app" style="--bg-color: {backgroundColor};">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="flower">
		<Flower x={86} {leafColor} {petalsColor} />
	</svg>
	<form class="controls" method="POST">
		<h1 class="title">Customize Flowers</h1>

		<div class="input-group">
			<label for="petals-color">Petals color</label>
			<input
				type="color"
				name="petals-color"
				id="petals-color"
				bind:value={petalsColor}
			/>
		</div>
		<div class="input-group">
			<label for="leaf-color">Leaf color</label>
			<input
				type="color"
				name="leaf-color"
				id="leaf-color"
				bind:value={leafColor}
			/>
		</div>
		<div class="input-group">
			<label for="background-color">Background color</label>
			<input
				type="color"
				name="background-color"
				id="background-color"
				bind:value={backgroundColor}
			/>
		</div>

		<button type="submit" class="button">See the result</button>
	</form>
</div>

<style>
	.app {
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background: var(--bg-color);
	}

	.flower {
		height: 60vh;
	}

	.controls {
		width: 45vw;
	}

	.title {
		font-size: 48px;
		border-bottom: solid 2px #c1d2ec;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 20px 4px;
	}

	.input-group label {
		font-size: 22px;
	}

	.input-group input[type="color"] {
		width: 40%;
		height: 28px;
		padding: 0;
		background: none;
		border: none;
	}

	.input-group input[type="color"]::-webkit-color-swatch {
		height: 28px;
		border: solid 3px #c1d2ec;
		border-radius: 12px;
		cursor: pointer;
	}

	.button {
		margin: 16px;
		width: calc(100% - 16px * 2);
		font-family: "Poppins", sans-serif;
		font-size: 24px;
		padding: 8px 16px;
		background: #c1d2ec;
		color: #001535;
		border: none;
		border-radius: 16px;
		cursor: pointer;
	}

	@media screen and (orientation: portrait) {
		.app {
			flex-direction: column;
		}

		.flower {
			width: 60vw;
		}
	}
</style>
