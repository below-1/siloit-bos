<script>
  import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";
  import {
    FOCUSABLE_LINK_CLASSES,
    HOVERABLE_LINK_CLASSES,
  } from "./field-style";

  /** @type {{ components: BreadcrumbComponent[] }} */
  let { components } = $props();

  /**
   * @typedef {Object} PathComponent
   * @property {string} label Label of this path
   * @property {string} path
   * @property {false?} separator
   */

  /**
   * @typedef {Object} Separator
   * @property {true} separator Label of this path
   */

  /**
   * @typedef {PathComponent | Separator} BreadcrumbComponent
   */
</script>

<div class="flex-grow flex flex-wrap gap-2 justify-start items-center">
  {#each components as component}
    {#if component.separator}
      <span class="w-4 h-4 text-neutral-500">
        <FaChevronRight />
      </span>
    {:else}
      <a
        href={component.path}
        class={`whitespace-nowrap ${FOCUSABLE_LINK_CLASSES} ${HOVERABLE_LINK_CLASSES} text-primary-800`}
      >
        {component.label}
      </a>
    {/if}
  {/each}
</div>
