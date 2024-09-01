<script>
	import { spring } from "svelte/motion";

	let count = $state(0);

	const displayed_count = spring();
	$effect(() => {
		displayed_count.set(count);
	});
	let offset = $derived(modulo(count, 1));

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="counter">
	<button
		on:click={() => (count -= 1)}
		aria-label="Decrease the counter by one"
		class="px-4 py-2 bg-black text-white"
	>
		Decrease
	</button>

	<div class="counter-viewport">
		<div
			class="counter-digits"
			style="transform: translate(0, {100 * offset}%)"
		>
			<strong class="hidden" aria-hidden="true"
				>{Math.floor($displayed_count + 1)}</strong
			>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button
		on:click={() => (count += 1)}
		aria-label="Increase the counter by one"
		class="px-4 py-2 bg-black text-white"
	>
		Increase
	</button>
</div>
