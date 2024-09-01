<script>
  let { class: clazz } = $props();
</script>

<nav class={`w-full ${clazz ?? ""}`}>
  <div class="container mx-auto min-h-20 flex items-center py-8 px-4 md:px-0">
    <img
      src="/logo.png"
      alt="Logo Provinsi NTT"
      class="w-12 h-12 md:w-48 md:h-48"
    />
    <div
      class="flex flex-col flex-grow justify-end md:justify-center items-center"
    >
      <h1 class="hidden md:block font-bold text-lg md:text-2xl text-right">
        DINAS PENDIDIKAN DAN KEBUDAYAAN PROVINSI NTT
      </h1>
      <span class="font-bold text-4xl md:text-6xl">SI-LOIT BOS</span>
      <span class="hidden md:block font-bold text-2xl"
        >SISTEM INFORMASI PELAPORAN DANA BOS
      </span>
      <span class="hidden md:block text-xl">Versi 0.1</span>
    </div>
  </div>
</nav>
