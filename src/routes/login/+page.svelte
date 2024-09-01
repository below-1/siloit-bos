<script>
  import {
    BASE_INPUT_CLASSES,
    FOCUSABLE_CLASSES,
  } from "$lib/components/field-style";
  import LandingNav from "$lib/components/landing-nav.svelte";
  import TextField from "$lib/components/text-field.svelte";
</script>

<svelte:head>
  <title>Login</title>
  <meta name="description" content="SILOIT - Login" />
</svelte:head>

<section class="min-h-screen flex flex-col LandingPage">
  <LandingNav
    class="border-box bg-primary-800 text-white border-b-8 border-primary-900"
  />
  <div class="login-content flex items-center justify-center flex-grow w-full">
    <div class="w-full px-4 md:px-0 md:w-1/3 flex flex-col">
      <p
        class="border-b-4 border-primary-800 font-bold text-2xl self-start pr-2 py-1"
      >
        SI-LOIT BOS
      </p>
      <p class="mb-12">Masuk ke Akun Anda</p>
      <form method="post" class="flex flex-col">
        <TextField name="username" label="Username" type="text" class="mb-4" />
        <TextField
          name="password"
          label="Password"
          type="password"
          class="mb-8"
        />
        <div class="flex gap-2 items-center mb-4">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            class={`${BASE_INPUT_CLASSES} w-6 h-6`}
          />
          <label for="remember" class="text-lg">Remember Me</label>
        </div>
        <button
          type="submit"
          class={`${FOCUSABLE_CLASSES} px-8 py-2 uppercase font-bold text-lg self-start bg-primary-800 text-white`}
          >Masuk</button
        >
      </form>
    </div>
  </div>
</section>
