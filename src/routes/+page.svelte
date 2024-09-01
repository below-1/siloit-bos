<script>
	import LandingNav from "$lib/components/landing-nav.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="min-h-screen flex flex-col LandingPage text-white">
	<LandingNav class="bg-black bg-opacity-50" />
	<div
		class="landing-content flex items-center justify-center flex-grow w-full"
	>
		<a
			href="/login"
			class="py-4 px-4 w-64 rounded bg-primary-700 outline outline-4 outline-secondary-500 shadow-xl text-3xl font-bold text-center"
			>Login</a
		>
	</div>
</section>

<style>
	.LandingPage {
		background-image: url(/landing-wallpaper.jpg);
		background-position: center;
		background-size: cover;
	}
</style>
