<script lang="ts">
	export let x: number = 0;
	export let y: number = 0;
	export let rotation: number = 0;
	export let scale: number = 1;
	export let leafColor: string = "#00ff85";
	export let petalsColor: string = "#f80059";
</script>

<g
	transform="translate({x} {y}) rotate({rotation})"
	style="
		--scale: {scale};
		--rotation-time: {Math.random() * 4 + 8}s;"
	class="flower"
>
	<path
		d="M35.1764 66.7665C29.3255 64.2228 25.5466 62.5389 25.6169 52.2912C33.5491 53.9225 35.5698 57.6933 35.1764 66.7665Z"
		class="leaf"
		transform-origin="35 70"
		fill="url(#left-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<path
		d="M36 69.3891C36.9639 61.5641 37.6352 56.4958 49.8037 52.9878C50.6503 62.9595 46.89 66.6756 36 69.3891Z"
		class="leaf"
		transform-origin="35 70"
		fill="url(#right-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<path
		d="M37.7421 107.96C26.1965 105.65 18.7236 104.083 14.8601 85.5689C29.8051 85.4231 34.9188 91.4387 37.7421 107.96Z"
		class="leaf"
		transform-origin="35 105"
		fill="url(#left-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<path
		d="M38 118.97C39.4396 107.283 40.4421 99.7142 58.6151 94.4753C59.8796 109.367 54.2637 114.917 38 118.97Z"
		class="leaf"
		transform-origin="35 110"
		fill="url(#right-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<path
		d="M39.4152 165.439C28.0508 162.358 20.6999 160.294 18.0881 141.562C33.0092 142.42 37.7075 148.765 39.4152 165.439Z"
		class="leaf"
		transform-origin="38 160"
		fill="url(#left-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<path
		d="M39 171.893C40.802 160.257 42.0391 152.723 60.3661 148.051C61.1673 162.975 55.3818 168.348 39 171.893Z"
		class="leaf"
		transform-origin="38 160"
		fill="url(#right-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<path
		d="M39.0642 204.399C34.1512 202.264 30.978 200.849 31.0371 192.245C37.6978 193.614 39.3946 196.781 39.0642 204.399Z"
		class="leaf"
		transform-origin="40 205"
		fill="url(#left-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<path
		d="M41 209.272C41.6803 203.75 42.154 200.173 50.7419 197.697C51.3394 204.735 48.6856 207.357 41 209.272Z"
		class="leaf"
		transform-origin="40 205"
		fill="url(#right-leaves-gradient)"
		style="--rotation-time: {Math.random() * 3 + 2}s;"
	/>
	<line
		x1="41.3704"
		y1="247.932"
		x2="34.9904"
		y2="32.0757"
		stroke-width="4"
		class="stem"
	/>
	<path
		d="M65.1679 17.6614C68.6592 22.2 52.5831 40.843 35.7002 42.3152C21.2336 43.5767 2.01635 24.9167 5.40245 19.1063C9.34287 12.3447 19.6611 15.2541 25.8245 25.2094C16.1956 3.96934 53.1124 4.26551 44.4329 24.0416C51.2064 15.6742 59.8512 10.7497 65.1679 17.6614Z"
		class="petals"
		transform-origin="35 32"
	/>

	<defs>
		<linearGradient id="left-leaves-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" stop-color="{leafColor}ff" />
			<stop offset="100%" stop-color="{leafColor}00" />
		</linearGradient>
		<linearGradient
			id="right-leaves-gradient"
			x1="0%"
			y1="0%"
			x2="100%"
			y2="0%"
		>
			<stop offset="0%" stop-color="{leafColor}00" />
			<stop offset="100%" stop-color="{leafColor}ff" />
		</linearGradient>
		<linearGradient id="stem-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="{leafColor}ff" />
			<stop offset="100%" stop-color="{leafColor}00" />
		</linearGradient>
		<linearGradient id="petals-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="{petalsColor}11" />
			<stop offset="80%" stop-color="{petalsColor}ff" />
		</linearGradient>
	</defs>
</g>

<style>
	.flower {
		transform-origin: 50% 100%;
		animation:
			flower-appearing 3s ease both,
			flower-rotating var(--rotation-time) 3s ease infinite;
	}

	@keyframes flower-appearing {
		from {
			scale: 0;
			rotate: 0deg;
		}

		to {
			scale: var(--scale);
			rotate: -2deg;
		}
	}

	@keyframes flower-rotating {
		0%,
		100% {
			rotate: -2deg;
		}

		50% {
			rotate: 2deg;
		}
	}

	.leaf {
		animation:
			leaf-appearing 3s 1s ease both,
			leaf-rotating var(--rotation-time) 3s ease infinite;
	}

	@keyframes leaf-appearing {
		from {
			scale: 0;
			rotate: 0deg;
		}

		to {
			scale: 1;
			rotate: -2deg;
		}
	}

	@keyframes leaf-rotating {
		0%,
		100% {
			rotate: -2deg;
		}

		50% {
			rotate: 2deg;
		}
	}

	.stem {
		stroke: url(#stem-gradient);
	}

	.petals {
		fill: url(#petals-gradient);
		animation: petals-animation 3s 2s ease both;
	}

	@keyframes petals-animation {
		from {
			scale: 0;
		}

		to {
			scale: 1;
		}
	}
</style>
