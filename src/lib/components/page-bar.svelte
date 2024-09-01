<script>
    import { getSettingsMenus } from "$lib/menus";
    import { computePosition } from "@floating-ui/dom";
    import * as Svelte from "svelte";
    import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
    import MdApps from 'svelte-icons/md/MdApps.svelte';
    import { twMerge } from "tailwind-merge";
    import { FOCUSABLE_CLASSES } from "./field-style";

  /** @type {{ children: Svelte.Snippet, title: string, activeSettingMenu?: number, ontogglemenu?: () => void }} */
  let { children, title, activeSettingMenu, ontogglemenu } = $props();

  let settings = $state({
    show: false
  })
  /**
     * @type {HTMLDivElement}
     */
  let tooltipRef;
  /**
     * @type {HTMLButtonElement}
     */
  let settingsButtonRef;

  $effect(() => {
    if (tooltipRef && settingsButtonRef) {
      computePosition(settingsButtonRef, tooltipRef, {
        placement: 'bottom-start'
      }).then(({x, y}) => {
        Object.assign(tooltipRef.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
    console.log(tooltipRef)
    console.log(settingsButtonRef)
  })

  const MENU_CLASSES = 'shadow-lg flex flex-col bg-white rounded border'
  const MENU_ITEM_CLASSES = `min-w-64 flex items-center justify-start gap-2 py-2 border-b border-neutral-300 px-2 hover:bg-primary-100`
  const ACTIVE_MENU_ITEM_CLASSES = 'bg-primary-100'

  const settingMenus = getSettingsMenus(activeSettingMenu)

</script>

<div class="bg-neutral-100">
  <div class="mx-auto container py-4 px-2 md:px-0 md:py-0 md:min-h-16 flex flex-wrap justify-start items-center gap-4">
    {@render children()}
    <p class="hidden md:block flex-grow text-xl text-center md:text-right uppercase font-bold">{title}</p>
    <div class="hidden md:flex justify-between flex-grow md:flex-grow-0 items-center gap-4">
      <button 
        type="button" 
        class="bg-neutral-200 border flex items-center gap-2 px-4 py-1 rounded text-neutral-700"
        bind:this={settingsButtonRef}
        onclick={() => {
          settings.show = !settings.show
        }}
      >
        <span>haris susanto</span>
        <span class="w-4 h-4">
          <FaChevronDown />
        </span>
      </button>
      <div 
        id="settings_panel"
        bind:this={tooltipRef}
        class={twMerge(
          !settings.show && 'hidden',
          // false && 'hidden',
          'absolute top-0 left-0 z-[999]'
        )}
      >
        <ul class={MENU_CLASSES}>
          {#each settingMenus as item}
            <li>
              <a 
                class={twMerge(
                  MENU_ITEM_CLASSES,
                  item.active && ACTIVE_MENU_ITEM_CLASSES
                )} 
                href={item.path}
              >{item.label}</a>
            </li>
          {/each}
        </ul>
      </div>
      <button type="button" class="bg-neutral-200 border flex p-1 text-neutral-700">
        <span class="h-6 w-6">
          <MdApps />
        </span>
      </button>
    </div>
  </div>
</div>

<div class="md:hidden bg-neutral-200">
  <div class="flex mx-auto container py-4 px-2 flex justify-center items-center gap-2">
    <button 
      type="button" 
      class={`flex items-center gap-2 p-2 bg-neutral-100 border border-neutral-300 rounded-lg ${FOCUSABLE_CLASSES}`}
      onclick={ontogglemenu}
    >
      <span class="h-6 w-6"><MdApps /></span>
      <span class="text-lg uppercase font-bold text-neutral-600">Menu</span>
    </button>
  </div>
</div>
