<script setup lang="ts">
import { profile } from "~/data/profile";

const { title = profile.name, description = "" } = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="border-portfolio-border bg-portfolio-paper text-portfolio-ink font-default-og flex h-full w-full flex-col overflow-hidden border"
  >
    <div class="flex min-h-0 flex-1">
      <div
        class="flex w-[57.5%] shrink-0 flex-col items-start justify-center px-16"
        style="
          background-image: radial-gradient(circle, #d4d4d4 1px, transparent 1.2px);
          background-size: 8px 8px;
        "
      >
        <div
          class="border-portfolio-border bg-portfolio-paper text-portfolio-label mb-6 flex items-center gap-2.5 border px-3 py-1.5 text-sm leading-none tracking-widest uppercase"
        >
          <div class="bg-portfolio-label size-1.5" />
          <span>{{ profile.name }}</span>
        </div>
        <h1
          class="font-editorial-og m-0 line-clamp-3 text-[60px] leading-[1.08] font-medium tracking-[-0.055em]"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="text-portfolio-muted m-0 mt-5 line-clamp-5 text-[25px] leading-normal"
        >
          {{ description }}
        </p>
      </div>
      <div
        class="border-portfolio-border bg-portfolio-surface flex min-w-0 flex-1 items-end justify-center overflow-hidden border-l"
      >
        <img
          src="/images/portrait.webp"
          :alt="profile.name"
          class="h-full w-full object-contain object-bottom grayscale"
        />
      </div>
    </div>
    <div
      class="border-portfolio-border h-6 shrink-0 border-t"
      style="
        background-image: repeating-linear-gradient(125deg, transparent 0 4px, #e4e4e4 4px 5px);
      "
    />
  </div>
</template>
