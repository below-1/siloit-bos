<script>
  import FaCheck from "svelte-icons/fa/FaCheck.svelte";
  import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";
  import GiSandsOfTime from "svelte-icons/gi/GiSandsOfTime.svelte";
  import { twMerge } from "tailwind-merge";

  /** @type {{ state: string }} */
  let { state } = $props();

  const BASE_CLASSES =
    "rounded-lg px-1 py-0.5 flex items-center self-start gap-1 text-sm lowercase";
  const PENDING_AO_CLASSESS = "bg-yellow-300";
  const PROCESSING_CLASSES = "bg-slate-100";
  const VERIFIED_CLASSES = "bg-green-500 text-white";
</script>

<span class="inline-block">
  <span
    class={twMerge(
      BASE_CLASSES,
      state == "pending_ao" && PENDING_AO_CLASSESS,
      state == "processing" && PROCESSING_CLASSES,
      state == "verified" && VERIFIED_CLASSES,
    )}
  >
    <span class="w-3 h-3">
      {#if state == "pending_ao"}
        <GiSandsOfTime />
      {:else if state == "processing"}
        <FaSpinner />
      {:else}
        <FaCheck />
      {/if}
    </span>
    <span>
      {#if state == "pending_ao"}
        Menunggu Verifikasi
      {:else if state == "processing"}
        Dalam Proses
      {:else}
        Terverifikasi
      {/if}
    </span>
  </span>
</span>
