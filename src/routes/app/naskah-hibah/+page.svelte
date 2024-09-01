<script>
  import AppLayout from "$lib/components/app-layout.svelte";
  import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
  import DocumentStateBadge from "$lib/components/document-state-badge.svelte";
  import { FOCUSABLE_LINK_CLASSES } from "$lib/components/field-style";
  import PageBar from "$lib/components/page-bar.svelte";
  import {
    BODY_ROW_CLASSES,
    CELL_CLASESS,
    HEADER_CELL_CLASSES,
    HEADER_CLASSES,
  } from "$lib/components/table.style.js";
  import { longDateTime } from "$lib/date";
  import { getMenus } from "$lib/menus";
  import DataTable from "datatables.net-dt";
  import "datatables.net-dt/css/dataTables.dataTables.css";
  import "datatables.net-responsive";
  import FaDownload from "svelte-icons/fa/FaDownload.svelte";
  import { twMerge } from "tailwind-merge";

  let { data } = $props();
  const menus = getMenus(1);
  const pageTitle = "Naskah Hibah";
  /** @type {any} */
  let tableRef = $state(null);
  let menuOpen = $state(false);

  $effect(() => {
    tableRef = new DataTable("#arkas_table", {
      responsive: true,
    });
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
      { label: "Halaman Awal", path: "/", separator: false },
      { separator: true },
      { label: "Data Saya", path: "/app/home", separator: false },
      { separator: true },
      { label: pageTitle, path: "/app/naskah-hibah", separator: false },
    ]}
  />
</PageBar>

<AppLayout {menus} showMenus={menuOpen}>
  <div class="flex flex-col items-center justify-center mb-12">
    <a
      href="/app/naskah-hibah/upload"
      class={`${FOCUSABLE_LINK_CLASSES} bg-primary-700 text-white rounded-lg overflow-hidden uppercase px-6 py-2 font-bold text-lg ring-4 ring-secondary-500`}
      >Upload Naskah Hibah</a
    >
  </div>
  <table
    id="arkas_table"
    class="w-full table-auto border-collapse border border-neutral-300"
  >
    <thead class={HEADER_CLASSES}>
      <tr>
        <th class={twMerge(CELL_CLASESS, HEADER_CELL_CLASSES)}>No</th>
        <th class={twMerge(CELL_CLASESS, HEADER_CELL_CLASSES)}>Nama</th>
        <th class={twMerge(CELL_CLASESS, HEADER_CELL_CLASSES)}>Ukuran File</th>
        <th class={twMerge(CELL_CLASESS, HEADER_CELL_CLASSES)}>Status</th>
        <th class={twMerge(CELL_CLASESS, HEADER_CELL_CLASSES)}
          >Terakhir Diupdate</th
        >
        <th class={twMerge(CELL_CLASESS, HEADER_CELL_CLASSES)}></th>
      </tr>
    </thead>
    <tbody>
      {#each data.items as item, index}
        <tr class={BODY_ROW_CLASSES}>
          <td class={CELL_CLASESS}>{index + 1}</td>
          <td class={twMerge(CELL_CLASESS, "font-bold")}>{item.title}</td>
          <td class={CELL_CLASESS}>{item.fileSize}</td>
          <td class={CELL_CLASESS}
            ><DocumentStateBadge state={item.status} /></td
          >
          <td class={CELL_CLASESS}>{longDateTime(item.last_updated)}</td>
          <td class={CELL_CLASESS}>
            <button class="flex text-primary-600">
              <span class="w-4 h-4">
                <FaDownload />
              </span>
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</AppLayout>
