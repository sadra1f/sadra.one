<script setup lang="ts">
import { aboutParagraphs } from "~/data/about";
import { profile } from "~/data/profile";

useSeoMeta({
  title: "About",
  description:
    "Get to know Sadra Saderi, a software engineer building web and mobile applications and pursuing a master’s in Computer Engineering, specializing in AI and Robotics.",
});

const interests = [
  {
    title: "Useful software, thoughtfully built",
    description:
      "Web and mobile applications that solve practical problems, with clear interfaces and reliable services behind them.",
    icon: "i-lucide-panels-top-left",
  },
  {
    title: "Tools for everyday work",
    description:
      "Making work simpler through internal business tools, automated workflows, and better development environments.",
    icon: "i-lucide-wrench",
  },
  {
    title: "AI, robotics, and experimentation",
    description:
      "Deepening my understanding of AI and Robotics through graduate study, alongside hands-on experiments with data and augmented reality.",
    icon: "i-lucide-flask-conical",
  },
];
</script>

<template>
  <div class="about-page">
    <header class="page-intro">
      <p class="eyebrow">The person behind the projects</p>
      <h1 class="page-heading mt-4">A little more about me.</h1>
      <p class="page-description">
        Software engineer, AI and Robotics graduate student, and a curious person who learns by
        building.
      </p>
    </header>

    <section
      aria-labelledby="story-heading"
      class="about-story frame-section section-panel grid items-start gap-9 md:grid-cols-[0.85fr_1.15fr] md:gap-14"
    >
      <figure>
        <div class="portrait-frame hero-surface overflow-hidden">
          <img
            src="/images/portrait.webp"
            alt="Portrait of Sadra Saderi"
            width="1254"
            height="1254"
            decoding="async"
            class="aspect-[0.9] h-auto w-full object-cover object-bottom grayscale"
          />
        </div>
        <figcaption class="text-portfolio-muted mt-4 text-xs">
          {{ profile.name }} · {{ profile.role }}
        </figcaption>
      </figure>
      <div class="text-portfolio-muted space-y-5 text-base leading-8">
        <h2 id="story-heading" class="section-heading text-portfolio-ink">Hi again. I’m Sadra.</h2>
        <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
        <SharedButton variant="link" to="/projects" class="text-sm">
          Explore my projects
          <UIcon name="i-lucide-arrow-up-right" class="size-4" aria-hidden="true" />
        </SharedButton>
      </div>
    </section>

    <section
      aria-labelledby="next-heading"
      class="frame-section section-panel grid gap-7 md:grid-cols-[1fr_1.5fr] md:gap-16"
    >
      <div>
        <p class="eyebrow">Always a work in progress</p>
        <h2 id="next-heading" class="section-heading mt-4">Learning by doing.</h2>
      </div>
      <div class="text-portfolio-muted space-y-4 text-base leading-8">
        <p>
          I studied Software Engineering as part of my bachelor’s in Computer Engineering, and I’m
          now building on that foundation through a master’s focused on AI and Robotics. Alongside
          my professional work, I use personal projects to try new ideas and put what I’m learning
          into practice.
        </p>
        <SharedButton variant="link" to="/resume" class="text-sm"
          >View my resume<UIcon name="i-lucide-arrow-up-right" class="size-4" aria-hidden="true"
        /></SharedButton>
      </div>
      <div class="interests-grid grid md:col-span-2 md:grid-cols-3">
        <article v-for="interest in interests" :key="interest.title" class="interest-cell">
          <UIcon
            :name="interest.icon"
            class="text-portfolio-muted mb-5 size-6"
            aria-hidden="true"
          />
          <h3 class="text-base font-medium">{{ interest.title }}</h3>
          <p class="text-portfolio-muted mt-3 text-sm leading-7">{{ interest.description }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
