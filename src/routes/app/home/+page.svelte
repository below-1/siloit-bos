<script>
  import { browser } from "$app/environment";
  import AppLayout from "$lib/components/app-layout.svelte";
  import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
  import PageBar from "$lib/components/page-bar.svelte";
  import { getMenus } from "$lib/menus";
  import ApexCharts from "apexcharts";

  const menus = getMenus();

  $effect(() => {
    if (browser) {
      const options = {
        series: [
          {
            name: "Arkas",
            data: [44, 55, 57],
          },
          {
            name: "Naskah",
            data: [76, 85, 101],
          },
          {
            name: "SPJ",
            data: [35, 41, 36],
          },
          {
            name: "Verval",
            data: [49, 54, 78],
          },
        ],
        chart: {
          type: "bar",
          height: 650,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["SMA", "SMK", "SLB"],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (/** @type {string} */ val) {
              return "$ " + val + " thousands";
            },
          },
        },
      };

      const chart = new ApexCharts(
        document.querySelector("#chart_container"),
        options,
      );
      chart.render();
    }
  });
</script>

<PageBar title="Data Saya">
  <Breadcrumbs
    components={[
      { label: "Halaman Awal", path: "/app/home", separator: false },
      { separator: true },
      { label: "Data Saya", path: "/app/home", separator: false },
    ]}
  />
</PageBar>

<AppLayout {menus}>
  <div id="chart_container"></div>
</AppLayout>
