<script setup lang="ts">
import { profile } from "~/data/profile";
import { socialLinks } from "~/data/social-links";

useSeoMeta({
  title: profile.role,
  description:
    "Sadra Saderi, a software engineer with a focus on AI. Combining full-stack engineering experience with graduate studies in AI and Robotics.",
});

const toolkit = [
  {
    title: "Interfaces",
    icon: "i-lucide-panels-top-left",
    description: "Building clear, responsive experiences for the web.",
    tools: ["Vue / Nuxt", "React / Next", "Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Applications",
    icon: "i-lucide-code-xml",
    description: "Connecting useful features with the services behind them.",
    tools: ["Python", "Django", "Flask", "PHP", "Laravel", "React Native"],
  },
  {
    title: "Infrastructure",
    icon: "i-lucide-server",
    description: "Deploying software and keeping it running reliably.",
    tools: ["Docker", "Ansible", "Linux", "Nginx", "Elastic Stack (ELK)"],
  },
];
</script>

<template>
  <div class="home-page">
    <section
      aria-labelledby="hero-heading"
      class="home-hero frame-section border-t-0! [&::before,&::after]:hidden"
    >
      <div class="hero-copy">
        <p class="eyebrow mb-5">{{ profile.role }}</p>
        <h1 id="hero-heading" class="hero-heading font-editorial">
          Hi, I’m Sadra.<br /><span class="text-portfolio-muted">I build useful software.</span>
        </h1>
        <p class="hero-description text-portfolio-muted text-base leading-7">
          I build web and mobile applications, from thoughtful interfaces to the services behind
          them. I’m also pursuing a master’s in Computer Engineering, specializing in AI and
          Robotics.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <SharedButton variant="primary" to="/projects">
            View projects<UIcon name="i-lucide-arrow-up-right" class="size-4" aria-hidden="true" />
          </SharedButton>
          <SharedButton variant="secondary" to="/resume">My resume</SharedButton>
        </div>
        <nav aria-label="Connect with Sadra" class="hero-socials mt-5 flex flex-wrap gap-2">
          <SharedButton
            v-for="social in socialLinks"
            :key="social.label"
            variant="social"
            :href="social.href"
            :aria-label="social.label"
          >
            <UIcon :name="social.icon" class="size-4" aria-hidden="true" />
          </SharedButton>
        </nav>
      </div>
      <div class="hero-portrait bg-portfolio-surface">
        <img
          src="/images/portrait.webp"
          alt="Sadra Saderi"
          width="1254"
          height="1254"
          fetchpriority="high"
          loading="eager"
          decoding="async"
          class="hero-portrait-image"
        />
      </div>
    </section>

    <div class="hatch-strip" aria-hidden="true" />

    <section
      aria-labelledby="about-heading"
      class="frame-section section-panel grid gap-7 md:grid-cols-[1fr_1.5fr] md:gap-16"
    >
      <div>
        <p class="eyebrow">A little about me</p>
        <h2 id="about-heading" class="section-heading mt-4">
          Thoughtful by design.<br />Built with purpose.
        </h2>
      </div>
      <div class="text-portfolio-muted space-y-4 text-base leading-8">
        <p>
          My experience spans full stack development, mobile apps, and the infrastructure that keeps
          them running. I’ve built customer-facing products and internal business tools that make
          everyday work easier.
        </p>
        <p>
          Alongside my work, I’m studying AI and Robotics and exploring new ideas through personal
          projects.
        </p>
        <SharedButton variant="link" to="/about">
          More about me<UIcon name="i-lucide-arrow-up-right" class="size-4" aria-hidden="true" />
        </SharedButton>
      </div>
    </section>

    <section aria-labelledby="toolkit-heading" class="frame-section">
      <div class="section-panel">
        <p class="eyebrow">Tools I work with</p>
        <h2 id="toolkit-heading" class="section-heading mt-3">My toolkit</h2>
        <p class="text-portfolio-muted mt-4 max-w-xl text-base leading-7">
          The tools I reach for to take an idea from its first interface to a running application.
        </p>
      </div>
      <div class="border-portfolio-border grid border-t md:grid-cols-3">
        <article
          v-for="group in toolkit"
          :key="group.title"
          class="border-portfolio-border min-w-0 p-[clamp(1.5rem,3.5vw,2.5rem)] not-first:border-t md:not-first:border-t-0 md:not-first:border-l"
        >
          <UIcon :name="group.icon" class="text-portfolio-muted mb-5 size-6" aria-hidden="true" />
          <h3 class="text-lg font-medium tracking-tight">{{ group.title }}</h3>
          <p class="text-portfolio-muted mt-3 text-sm leading-7">{{ group.description }}</p>
          <ul :aria-label="`${group.title} tools`" class="mt-5 flex flex-wrap gap-2">
            <li v-for="tool in group.tools" :key="tool" class="technology-tag">{{ tool }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section
      aria-labelledby="connect-heading"
      class="frame-section section-panel grid gap-7 md:grid-cols-[1fr_1.5fr] md:gap-16"
    >
      <div>
        <p class="eyebrow">Around the internet</p>
        <h2 id="connect-heading" class="section-heading mt-4">Let’s stay connected.</h2>
      </div>
      <div class="grid grid-cols-1 gap-x-7 sm:grid-cols-2">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          class="group flex min-h-18 items-center gap-3 border-b border-black/10 text-sm"
        >
          <UIcon :name="social.icon" class="size-5" aria-hidden="true" />
          <span>{{ social.label }}</span>
          <UIcon
            name="i-lucide-arrow-up-right"
            class="ml-auto size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  </div>
</template>
