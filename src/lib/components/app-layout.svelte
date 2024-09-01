<script>
  import * as Menus from '$lib/menus';
  import * as Svelte from "svelte";
  import { FOCUSABLE_LINK_CLASSES, HOVERABLE_LINK_CLASSES } from "./field-style";

  /** @type {{ menus: Menus.Menu[], children: Svelte.Snippet, showMenus?: boolean, activeSettingMenu?: number, }}*/
  let { menus, children, showMenus, activeSettingMenu } = $props()
  const settingMenus = Menus.getSettingsMenus(activeSettingMenu)
</script>

{#if showMenus}
<div class="md:hidden w-full">
  <div class="mx-auto container flex my-4 px-4 flex flex-col">
    <div class={`flex flex-col text-lg mb-8`}>
      <p class="text-xl text-primary-800 font-bold">Pengaturan Akun</p>
      {#each settingMenus as item}
        <div class="border-b border-neutral-400 py-2">
          <a 
          class={`${FOCUSABLE_LINK_CLASSES} ${HOVERABLE_LINK_CLASSES} text-lg ${item.active && 'font-bold'}`}
            href={item.path}
          >{item.label}</a>
        </div>
      {/each}
    </div>

    <div class={`flex flex-col text-lg mb-8`}>
      <p class="text-xl text-primary-800 font-bold">Daftar Menu Applikasi</p>
      {#each menus as menu}
        <div class="border-b border-neutral-400 py-2">
          <a
            href={menu.path}
            class={`${FOCUSABLE_LINK_CLASSES} ${HOVERABLE_LINK_CLASSES} text-lg ${menu.active && 'font-bold'}`}
            >{menu.label}</a
          >
        </div>
      {/each}
    </div>
  </div>
</div>
{/if}

<div class="mx-auto container flex my-12">
  <div class="hidden md:flex md:w-1/4 flex-col gap-6 align-start">
    {#each menus as menu}
      <a
        href={menu.path}
        class={`${FOCUSABLE_LINK_CLASSES} ${HOVERABLE_LINK_CLASSES} text-2xl text-primary-800 self-start ${menu.active && 'font-bold'}`}
        >{menu.label}</a
      >
    {/each}
  </div>
  <div class="w-full px-4 md:px-0 md:w-3/4">
    {@render children()}
  </div>
</div>
