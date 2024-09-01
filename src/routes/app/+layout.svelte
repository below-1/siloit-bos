<script>
  import Footer from "$lib/components/footer.svelte";
  import LandingNav from "$lib/components/landing-nav.svelte";

  let { children } = $props()
</script>

<svelte:head>
  <title>SILOIT - Aplikasi</title>
  <meta name="description" content="SILOIT - Applikasi" />
</svelte:head>

<section class="min-h-screen flex flex-col LandingPage">
  <LandingNav
    class="border-box bg-primary-800 text-white border-b-8 border-primary-900"
  />
  {@render children()}
</section>

<Footer />
