<script>
  import { BASE_INPUT_CLASSES } from "./field-style";

  /** @type {{ name: string, label: string, type: string, class?: string }} */
  let { name, label, type: _type, class: clazz } = $props();
</script>

<div class={`flex flex-col gap-1 ${clazz ?? ""}`}>
  <label for={name}>{label}</label>
  <input {name} id={name} type={_type} class={BASE_INPUT_CLASSES} />
</div>
