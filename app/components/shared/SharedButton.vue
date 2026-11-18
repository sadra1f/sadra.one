<script setup lang="ts">
import type { ButtonSlots } from "@nuxt/ui";

type ButtonVariant = "primary" | "secondary" | "link" | "filter" | "icon" | "social";

const { variant = "primary" } = defineProps<{ variant?: ButtonVariant }>();
const slots = defineSlots<ButtonSlots>();

const button = useTemplateRef<{ $el: HTMLElement }>("button");

defineExpose({ focus: () => button.value?.$el.focus() });

const base =
  "min-h-11 rounded-none p-0 text-[length:inherit] text-inherit font-medium cursor-pointer hover:text-inherit active:text-inherit disabled:text-inherit aria-disabled:text-inherit focus-visible:outline-2 focus-visible:outline-portfolio-ink focus-visible:outline-offset-5";

const variants: Record<ButtonVariant, string> = {
  primary:
    "justify-center gap-2.5 border border-portfolio-ink bg-portfolio-ink px-5 text-sm text-white shadow-[inset_0_0_0_2px] shadow-white/9 transition-[box-shadow,background-color,filter] duration-180 ease-[ease] hover:bg-portfolio-ink-hover hover:text-white active:text-white disabled:text-white aria-disabled:text-white",
  secondary:
    "justify-center gap-2.5 border border-portfolio-control-border bg-linear-to-b from-white to-portfolio-control-surface px-5 text-sm shadow-[inset_0_0_0_2px] shadow-white transition-[box-shadow,background-color,filter] duration-180 ease-[ease] hover:bg-portfolio-control-hover hover:bg-none",
  link: "gap-2 text-portfolio-ink underline-offset-4 hover:text-portfolio-ink hover:underline active:text-portfolio-ink",
  filter:
    "justify-center gap-3 border border-portfolio-soft bg-portfolio-paper px-3.5 py-2.5 text-[0.8125rem] text-portfolio-muted transition-[color,background-color,border-color] duration-180 ease-[ease] hover:bg-portfolio-surface hover:text-portfolio-ink active:text-portfolio-ink aria-pressed:border-portfolio-ink aria-pressed:bg-portfolio-ink aria-pressed:text-portfolio-paper aria-pressed:hover:bg-portfolio-ink aria-pressed:hover:text-portfolio-paper aria-pressed:active:text-portfolio-paper",
  icon: "size-11 justify-center gap-0 border border-black/15 hover:bg-black/5",
  social: "size-11 justify-center gap-0 border border-black/15 bg-white hover:bg-black/5",
};
</script>

<template>
  <UButton ref="button" color="neutral" variant="link" :class="[base, variants[variant]]">
    <template v-for="(_, name) in slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </UButton>
</template>
