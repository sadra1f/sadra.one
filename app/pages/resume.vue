<script setup lang="ts">
import { resume } from "~/data/resume";

usePageSeo({
  title: "Resume",
  description:
    "Explore Sadra Saderi’s full stack software development experience, education, skills, and open-source projects.",
});

function printResume() {
  window.print();
}
</script>

<template>
  <div class="resume-page">
    <header class="page-intro resume-intro">
      <p class="eyebrow">Experience & education</p>
      <div class="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h1 class="page-heading">My resume.</h1>
        <div class="resume-actions flex flex-wrap gap-3">
          <SharedButton variant="primary" type="button" @click="printResume">
            <UIcon name="i-lucide-printer" class="size-4" aria-hidden="true" />Print / Save PDF
          </SharedButton>
        </div>
      </div>
      <p class="page-description">
        A snapshot of my background, the things I work with, and what I’m learning.
      </p>
    </header>

    <article
      aria-labelledby="resume-name"
      class="resume-document frame-section section-panel bg-white"
    >
      <header class="border-b border-black/10 pb-8">
        <p class="eyebrow mb-3">Curriculum vitae</p>
        <h2 id="resume-name" class="font-editorial text-4xl tracking-tight">{{ resume.name }}</h2>
        <p class="text-portfolio-muted mt-3 text-base">{{ resume.headline }}</p>
        <div
          class="resume-contact text-portfolio-muted mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          <a :href="`mailto:${resume.contact.email}`" class="break-all hover:underline">{{
            resume.contact.email
          }}</a>
          <a :href="resume.contact.phoneHref" class="hover:underline">{{ resume.contact.phone }}</a>
          <a :href="resume.contact.github" rel="nofollow" class="hover:underline">
            github.com/sadra1f
          </a>
        </div>
      </header>
      <section aria-labelledby="summary-heading" class="resume-section">
        <h3 id="summary-heading" class="resume-heading">Profile</h3>
        <p class="text-portfolio-muted text-sm leading-7">{{ resume.summary }}</p>
      </section>
      <section aria-labelledby="experience-heading" class="resume-section">
        <h3 id="experience-heading" class="resume-heading">Experience</h3>
        <div class="space-y-8">
          <article
            v-for="experience in resume.experience"
            :key="`${experience.organization}-${experience.period}`"
            class="resume-entry"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
              <h4 class="font-medium">{{ experience.role }}</h4>
              <p class="text-portfolio-muted text-xs">{{ experience.period }}</p>
            </div>
            <p class="text-portfolio-muted mt-1 text-sm">{{ experience.organization }}</p>
            <ul class="text-portfolio-muted mt-2 list-disc space-y-1 pl-5 text-sm leading-7">
              <li v-for="highlight in experience.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </article>
        </div>
      </section>
      <section aria-labelledby="education-heading" class="resume-section">
        <h3 id="education-heading" class="resume-heading">Education</h3>
        <div class="space-y-8">
          <article
            v-for="education in resume.education"
            :key="education.qualification"
            class="resume-entry"
          >
            <h4 class="font-medium">{{ education.qualification }}</h4>
            <p class="text-portfolio-muted mt-1 text-sm">{{ education.institution }}</p>
            <p class="text-portfolio-muted mt-3 text-sm leading-7">{{ education.description }}</p>
          </article>
        </div>
      </section>
      <section aria-labelledby="skills-heading" class="resume-section">
        <h3 id="skills-heading" class="resume-heading">Skills</h3>
        <div class="grid gap-5 sm:grid-cols-2">
          <div v-for="group in resume.skills" :key="group.category">
            <h4 class="mb-3 text-sm font-medium">{{ group.category }}</h4>
            <ul class="flex flex-wrap gap-2">
              <li v-for="skill in group.items" :key="skill" class="technology-tag">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </section>
      <section aria-labelledby="projects-heading" class="resume-section">
        <h3 id="projects-heading" class="resume-heading">Open-source Projects</h3>
        <div class="space-y-8">
          <article v-for="project in resume.projects" :key="project.url" class="resume-entry">
            <h4 class="font-medium">
              <a :href="project.url" rel="nofollow" class="underline underline-offset-4">
                {{ project.name }}
              </a>
            </h4>
            <ul class="text-portfolio-muted mt-2 list-disc space-y-1 pl-5 text-sm leading-7">
              <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </article>
        </div>
      </section>
    </article>
  </div>
</template>
