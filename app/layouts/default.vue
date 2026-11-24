<script setup lang="ts">
import { profile } from "~/data/profile";
import { socialLinks } from "~/data/social-links";

const menuOpen = ref(false);
const colorMode = useColorMode();
const mounted = useMounted();
const nextTheme = computed(() => (colorMode.value === "dark" ? "light" : "dark"));

const route = useRoute();
const header = useTemplateRef<HTMLElement>("header");
const menuButton = useTemplateRef<{ focus: () => void }>("menu-button");
const isDesktop = useMediaQuery("(min-width: 768px)");

const year = new Date().getFullYear();

const navigation = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "About", to: "/about" },
];

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);

watch(isDesktop, (desktop) => {
  if (desktop) menuOpen.value = false;
});

onClickOutside(header, () => {
  menuOpen.value = false;
});

onKeyStroke("Escape", () => {
  if (!menuOpen.value) return;
  menuOpen.value = false;
  menuButton.value?.focus();
});
</script>

<template>
  <div class="portfolio-page min-h-svh">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <div class="site-shell">
      <header
        ref="header"
        class="site-header relative z-20 flex items-center justify-between gap-2 sm:gap-4"
      >
        <NuxtLink
          to="/"
          aria-label="Sadra, home"
          class="flex min-h-11 shrink-0 items-center gap-2.5 text-lg font-semibold tracking-tight"
          @click="menuOpen = false"
        >
          Sadra <span class="text-portfolio-muted -ml-2">S.</span>
        </NuxtLink>
        <nav aria-label="Main navigation" class="hidden items-center gap-7 md:flex lg:gap-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            exact-active-class="nav-link-active"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="flex shrink-0 items-center gap-1 sm:gap-2">
          <SharedButton
            variant="icon"
            type="button"
            :aria-label="mounted ? `Switch to ${nextTheme} mode` : 'Switch color theme'"
            @click="colorMode.preference = nextTheme"
          >
            <UIcon name="i-lucide-moon" class="size-5 dark:hidden" aria-hidden="true" />
            <UIcon name="i-lucide-sun" class="hidden size-5 dark:inline-block" aria-hidden="true" />
          </SharedButton>
          <SharedButton
            variant="primary"
            :href="`mailto:${profile.email}`"
            class="gap-1.5 px-2.5 text-xs whitespace-nowrap sm:gap-2.5 sm:px-4 sm:text-sm"
          >
            Let’s talk <UIcon name="i-lucide-arrow-up-right" class="size-4" aria-hidden="true" />
          </SharedButton>
          <SharedButton
            ref="menu-button"
            variant="icon"
            type="button"
            class="md:hidden"
            aria-controls="mobile-navigation"
            :aria-expanded="menuOpen"
            :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
            @click="menuOpen = !menuOpen"
          >
            <UIcon
              :name="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
              class="size-5"
              aria-hidden="true"
            />
          </SharedButton>
        </div>
        <nav
          v-show="menuOpen"
          id="mobile-navigation"
          aria-label="Mobile navigation"
          class="mobile-navigation border-portfolio-ink/15 bg-portfolio-paper absolute inset-x-0 top-full flex flex-col border-b p-2 md:hidden"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="mobile-nav-link hover:bg-portfolio-ink/5 px-4 py-3 text-sm transition-colors"
            exact-active-class="bg-portfolio-surface font-semibold"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </header>
      <main id="main-content" tabindex="-1" class="outline-none">
        <slot />
        <section
          id="contact"
          aria-labelledby="contact-heading"
          class="site-contact frame-section section-panel"
        >
          <p class="eyebrow">Have something in mind?</p>
          <div
            class="mt-4 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
          >
            <h2 id="contact-heading" class="section-heading">
              Good things start<br />with a conversation.
            </h2>
            <SharedButton
              variant="primary"
              :href="`mailto:${profile.email}`"
              class="min-h-12 gap-7 px-5 text-sm"
            >
              Let’s talk<UIcon name="i-lucide-arrow-up-right" class="size-5" aria-hidden="true" />
            </SharedButton>
          </div>
        </section>
      </main>
      <footer
        class="site-footer text-portfolio-muted flex flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center"
      >
        <p>{{ year }} {{ profile.name }}</p>
        <nav aria-label="Social links" class="flex flex-wrap gap-x-5 gap-y-1">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            class="hover:text-portfolio-ink inline-flex min-h-11 items-center transition-colors"
          >
            {{ social.label }}
          </a>
        </nav>
      </footer>
    </div>
  </div>
</template>
