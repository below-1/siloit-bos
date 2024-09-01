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
  const menus = getMenus();
  /** @type {any} */
  let tableRef = $state(null);
  const pageTitle = "Password";
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
  title="Pengaturan / Password"
  activeSettingMenu={1}
  ontogglemenu={() => {
    menuOpen = !menuOpen;
  }}
>
  <Breadcrumbs
    components={[
      { label: "Halaman Awal", path: "/", separator: false },
      { separator: true },
      { label: "Data Saya", path: "/app/home", separator: false },
      { separator: true },
      {
        label: "Ganti Password",
        path: "/app/settings/password",
        separator: false,
      },
    ]}
  />
</PageBar>

<AppLayout {menus} showMenus={menuOpen} activeSettingMenu={1}>
  <form method="post" class="w-full md:w-2/3">
    <TextField
      name="old_password"
      label="Password Lama"
      type="password"
      class="mb-4"
    />
    <TextField
      name="new_password"
      label="Password Baru"
      type="password"
      class="mb-4"
    />
    <TextField
      name="new_password_repeat"
      label="Ulangi Password Baru"
      type="password"
      class="mb-6"
    />
    <button
      type="submit"
      class={`${FOCUSABLE_LINK_CLASSES} bg-primary-700 text-white rounded-lg overflow-hidden uppercase px-6 py-2 font-bold text-lg ring-4 ring-secondary-500`}
      >Simpan</button
    >
  </form>
</AppLayout>
