<script>
  import AppLayout from "$lib/components/app-layout.svelte";
  import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
  import PageBar from "$lib/components/page-bar.svelte";
  import { getMenus } from "$lib/menus";
  import DataTable from "datatables.net-dt";
  import "datatables.net-dt/css/dataTables.dataTables.css";
  import FaHourglassStart from "svelte-icons/fa/FaHourglassStart.svelte";

  let { data } = $props();
  const menus = getMenus(4);
  /** @type {any} */
  let tableRef = $state(null);
  const pageTitle = "Rekomendasi Pencairan";
  let menuOpen = $state(false);

  $effect(() => {
    tableRef = new DataTable("#arkas_table", {});
  });
</script>

<svelte:head>
  <title>SI-LOIT BOS - {pageTitle}</title>
  <meta name="description" content={pageTitle} />
</svelte:head>

<PageBar
  title={pageTitle}
  ontogglemenu={() => {
    menuOpen = !menuOpen;
  }}
>
  <Breadcrumbs
    components={[
      { label: "Halaman Awal", path: "/app/home", separator: false },
      { separator: true },
      { label: "Data Saya", path: "/app/home", separator: false },
      { separator: true },
      {
        label: "Verifikasi BOS",
        path: "/app/verifikasi-bos",
        separator: false,
      },
    ]}
  />
</PageBar>

<AppLayout {menus} showMenus={menuOpen}>
  <div
    class="flex flex-col items-center justify-center mb-12 bg-neutral-200 py-24 px-4 md:px-0"
  >
    <div class="w-16 h-16 md:w-32 md:h-32 text-green-600 self-center mb-8">
      <FaHourglassStart />
    </div>
    <p
      class="w-full md:w-2/3 mx-auto text-2xl md:text-4xl text-neutral-600 text-center font-bold mb-12"
    >
      Halaman Rekomendasi Pencairan
    </p>
  </div>
</AppLayout>
