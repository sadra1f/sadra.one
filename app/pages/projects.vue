<script setup lang="ts">
import type { ProjectType } from "~/data/projects";
import { projects } from "~/data/projects";
import { projectTypes } from "~/data/project-types";

useSeoMeta({
  title: "Projects",
  description:
    "Explore Sadra Saderi’s projects, including open-source tools, client projects, and company contributions.",
});

const route = useRoute();
const router = useRouter();

const selectedType = computed<ProjectType | "all">(() => {
  const type = route.query.type;
  return projectTypes.find((projectType) => projectType.id === type)?.id ?? "all";
});

const projectGroups = projectTypes.map((projectType) => ({
  ...projectType,
  projects: projects
    .map((project, index) => ({ ...project, number: String(index + 1).padStart(2, "0") }))
    .filter((project) => project.type === projectType.id),
}));

const filters = [
  { id: "all", label: "All projects", count: projects.length },
  ...projectGroups.map((group) => ({
    id: group.id,
    label: group.label,
    count: group.projects.length,
  })),
] as const;

const visibleGroups = computed(() =>
  projectGroups.filter((group) =>
    selectedType.value === "all" ? group.projects.length > 0 : group.id === selectedType.value,
  ),
);

const visibleCount = computed(() =>
  visibleGroups.value.reduce((count, group) => count + group.projects.length, 0),
);

function selectType(type: ProjectType | "all") {
  const query = { ...route.query };
  if (type === "all") {
    delete query.type;
  } else {
    query.type = type;
  }
  return router.push({ query, hash: route.hash });
}
</script>

<template>
  <div class="projects-page">
    <header class="page-intro">
      <p class="eyebrow">Built, explored, shared</p>
      <h1 class="page-heading mt-4">Ideas, made real.</h1>
      <p class="page-description">
        Tools shared with the community, independent client work, and projects built alongside
        teams. Different collaborations, the same curiosity.
      </p>
    </header>

    <div class="project-filters frame-section">
      <fieldset>
        <legend class="text-portfolio-muted mb-4 text-sm">Filter by project type</legend>
        <div class="flex flex-wrap gap-2">
          <SharedButton
            v-for="filter in filters"
            :key="filter.id"
            variant="filter"
            type="button"
            :aria-pressed="selectedType === filter.id"
            aria-controls="project-results"
            @click="selectType(filter.id)"
          >
            {{ filter.label }}
            <span
              class="min-w-5 border border-current px-1 text-xs leading-normal tabular-nums"
              aria-hidden="true"
            >
              {{ filter.count }}
            </span>
          </SharedButton>
        </div>
      </fieldset>
      <p
        class="text-portfolio-muted mt-5 text-sm"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Showing {{ visibleCount }} of {{ projects.length }}
        {{ projects.length === 1 ? "project" : "projects" }}
      </p>
    </div>

    <div id="project-results" class="project-list">
      <section
        v-for="group in visibleGroups"
        :key="group.id"
        :aria-labelledby="`category-${group.id}`"
      >
        <header class="project-group-heading frame-section">
          <h2 :id="`category-${group.id}`" class="section-heading">{{ group.label }}</h2>
          <p class="text-portfolio-muted mt-3 max-w-xl text-sm leading-7">
            {{ group.description }}
          </p>
        </header>
        <article
          v-for="project in group.projects"
          :key="project.name"
          :aria-labelledby="`project-${project.number}`"
          class="project-row frame-section grid md:grid-cols-2 md:items-stretch"
        >
          <a
            :href="project.link"
            rel="nofollow"
            class="project-art project-showcase group"
            :aria-label="`${project.linkLabel}: ${project.name}`"
          >
            <span class="eyebrow project-label">{{ project.year }}</span>
            <img
              :src="`/shapes/${project.visual}.svg`"
              alt=""
              width="240"
              height="240"
              loading="lazy"
              decoding="async"
              class="project-object"
            />
            <span class="project-caption">
              <span class="font-editorial text-2xl tracking-tight sm:text-3xl">
                {{ project.headline || project.name }}
              </span>
              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </span>
          </a>
          <div class="project-details">
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p class="eyebrow">{{ project.category }}</p>
            </div>
            <h3
              :id="`project-${project.number}`"
              class="mt-4 text-2xl font-medium tracking-tight sm:text-3xl"
            >
              {{ project.name }}
            </h3>
            <p class="text-portfolio-muted mt-4 text-base leading-8">{{ project.description }}</p>
            <ul aria-label="Technologies" class="mt-5 flex flex-wrap gap-2">
              <li
                v-for="technology in project.technologies"
                :key="technology"
                class="technology-tag"
              >
                {{ technology }}
              </li>
            </ul>
            <div class="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <SharedButton
                v-if="project.link"
                variant="link"
                :href="project.link"
                rel="nofollow"
                class="text-sm"
              >
                {{ project.linkLabel || "View link" }}
                <UIcon name="i-lucide-arrow-up-right" class="size-4" aria-hidden="true" />
              </SharedButton>
              <SharedButton
                v-if="project.repository"
                variant="link"
                :href="project.repository"
                rel="nofollow"
                class="text-sm"
              >
                <UIcon name="i-lucide-github" class="size-4" aria-hidden="true" />Source code
              </SharedButton>
            </div>
          </div>
        </article>
        <div v-if="!group.projects.length" class="project-empty frame-section">
          <p class="font-editorial text-2xl tracking-tight">No projects published here yet.</p>
          <p class="text-portfolio-muted mt-3 text-sm leading-7">{{ group.emptyMessage }}</p>
          <SharedButton
            variant="link"
            type="button"
            class="mt-4 text-sm"
            @click="selectType('all')"
          >
            View all projects<UIcon name="i-lucide-arrow-right" class="size-4" aria-hidden="true" />
          </SharedButton>
        </div>
      </section>
      <p v-if="!visibleGroups.length" class="section-panel frame-section text-portfolio-muted">
        Projects will appear here as they’re added.
      </p>
    </div>

    <div
      class="section-panel frame-section text-portfolio-muted flex flex-wrap items-center justify-between gap-4 text-sm"
    >
      <p>There’s more to explore.</p>
      <SharedButton
        variant="link"
        href="https://github.com/sadra1f?tab=repositories"
        rel="nofollow"
      >
        All repositories on GitHub
        <UIcon name="i-lucide-arrow-up-right" class="size-4" aria-hidden="true" />
      </SharedButton>
    </div>
  </div>
</template>
