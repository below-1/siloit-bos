<script>
  import AppLayout from "$lib/components/app-layout.svelte";
  import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
  import { FOCUSABLE_LINK_CLASSES } from "$lib/components/field-style";
  import PageBar from "$lib/components/page-bar.svelte";
  import TextField from "$lib/components/text-field.svelte";
  import { getMenus } from "$lib/menus";
  import DataTable from "datatables.net-dt";
  import "datatables.net-dt/css/dataTables.dataTables.css";

  let { data } = $props();
  const menus = getMenus(0);
  /** @type {any} */
  let tableRef = $state(null);
  let menuOpen = $state(false);

  $effect(() => {
    tableRef = new DataTable("#arkas_table", {});
  });
</script>

<PageBar
  title="Upload Arkas"
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
      { label: "Kumpulan Arkas", path: "/app/arkas", separator: false },
      { separator: true },
      { label: "Upload", path: "/app/arkas/upload", separator: false },
    ]}
  />
</PageBar>

<AppLayout {menus} showMenus={menuOpen}>
  <form method="post" class="w-full md:w-2/3">
    <TextField name="tahun" label="Tahun" type="number" class="mb-4" />
    <TextField name="file" label="File" type="file" class="mb-6" />
    <button
      type="submit"
      class={`${FOCUSABLE_LINK_CLASSES} bg-primary-700 text-white rounded-lg overflow-hidden uppercase px-6 py-2 font-bold text-lg ring-4 ring-secondary-500`}
      >Upload Arkas</button
    >
  </form>
</AppLayout>
