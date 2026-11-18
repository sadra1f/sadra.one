import type { projectTypes } from "./project-types";

export type ProjectType = (typeof projectTypes)[number]["id"];

export interface Project {
  name: string;
  year: number | null;
  type: ProjectType;
  category: string;
  description: string;
  technologies: string[];
  repository?: string;
  link: string;
  linkLabel: string;
  visual: string;
  headline: string;
}

export const projects: Project[] = [
  {
    name: "Kian Tejarat",
    year: 2026,
    type: "team",
    category: "Front-end / Mobile",
    description:
      "Develop websites and applications for AI, gold, e-commerce, and utility products using React, React Native, and Trusted Web Activities. Collaborate with the SEO team on technical SEO and Google Lighthouse scores.",
    technologies: ["React", "React Native", "Trusted Web Activities"],
    repository: "",
    link: "",
    linkLabel: "",
    visual: "kian",
    headline: "",
  },
  {
    name: "Shatel Mobile",
    year: 2024,
    type: "team",
    category: "Full-stack",
    description:
      "Developed and maintained websites using Django, Flask, and Next.js, and contributed to the My Shatel Mobile application using React Native. Deployed centralized logging, containerized projects, and maintained production servers.",
    technologies: ["Django", "Flask", "Next.js", "React Native", "Docker", "ELK Stack", "Nginx"],
    repository: "",
    link: "",
    linkLabel: "",
    visual: "shatel",
    headline: "",
  },
  {
    name: "PySpark Hadoop Notebook",
    year: 2024,
    type: "open-source",
    category: "Data & development",
    description:
      "A local development environment bringing Apache Hadoop and Jupyter Notebook together with Docker. Built for experimentation with data workflows.",
    technologies: ["Docker", "Hadoop", "Jupyter", "PySpark"],
    repository: "https://github.com/sadra1f/pyspark-hadoop-notebook",
    link: "https://github.com/sadra1f/pyspark-hadoop-notebook#readme",
    linkLabel: "Read documentation",
    visual: "notebook",
    headline: "Make room for discovery.",
  },
  {
    name: "Delta Panel",
    year: 2024,
    type: "client",
    category: "Internal business tools",
    description:
      "Built an internal order management tool for an elevator panel manufacturer using React, Django, and Tailwind CSS. Coordinated orders across company divisions and implemented a complex user permissions system to control access across departments.",
    technologies: ["React", "Django", "Tailwind CSS", "MariaDB"],
    repository: "",
    link: "https://deltapanelco.com/",
    linkLabel: "View website",
    visual: "delta",
    headline: "",
  },
  {
    name: "Tesmino",
    year: 2022,
    type: "team",
    category: "Full-stack",
    description:
      "Developed customer panels, the website, and a component library using Vue, Quasar, Nuxt, Tailwind CSS, Storybook, and TypeScript. Built a Python crawler to check the health of published advertisements.",
    technologies: [
      "Vue",
      "Quasar",
      "Nuxt",
      "Tailwind CSS",
      "Storybook",
      "TypeScript",
      "Python",
      "Scrapy",
      "Docker",
    ],
    repository: "",
    link: "",
    linkLabel: "",
    visual: "tesmino",
    headline: "",
  },
  {
    name: "Unity AR Tutorial",
    year: 2022,
    type: "open-source",
    category: "Experiments & learning",
    description:
      "An example project and tutorial for creating an augmented reality application on Android with Unity and AR Foundation.",
    technologies: ["Unity", "C#", "AR Foundation", "Android"],
    repository: "https://github.com/sadra1f/unity-ar-tutorial",
    link: "https://sadra1f.github.io/unity-ar-tutorial/",
    linkLabel: "Explore tutorial",
    visual: "unity",
    headline: "An idea, in a new dimension.",
  },
  {
    name: "Oskar Fishing",
    year: 2021,
    type: "client",
    category: "Website",
    description:
      "Developed and supported the website using Django, jQuery, and Tailwind CSS, including authentication, caching, and automated backups. Later rebuilt the front end, added a blog and custom pages with TinyMCE, and optimized database queries and caching.",
    technologies: [
      "Django",
      "jQuery",
      "Tailwind CSS",
      "MariaDB",
      "Bootstrap 5",
      "PostCSS",
      "SCSS",
      "Rollup",
      "TinyMCE",
    ],
    repository: "",
    link: "https://oskarfishing.com/",
    linkLabel: "View website",
    visual: "oskar",
    headline: "",
  },
  {
    name: "wggb/whiteboard",
    year: 2021,
    type: "open-source",
    category: "Creative tools",
    description:
      "A whiteboard web application built with Paper.js, jQuery, and Bootstrap, deployed with GitHub Pages.",
    technologies: ["Paper.js", "jQuery", "Bootstrap", "GitHub Pages"],
    repository: "https://github.com/wggb/whiteboard",
    link: "https://wggb.github.io/whiteboard",
    linkLabel: "Open whiteboard",
    visual: "wggb",
    headline: "A blank canvas for your next idea.",
  },
  {
    name: "Sabtekalhor",
    year: 2020,
    type: "client",
    category: "Website",
    description: "Developed and optimized website pages using Bootstrap 3 and jQuery.",
    technologies: ["Bootstrap 3", "jQuery"],
    repository: "",
    link: "https://sabtekalhor.com/",
    linkLabel: "View website",
    visual: "cube",
    headline: "",
  },
  {
    name: "Minimal Dark",
    year: 2020,
    type: "open-source",
    category: "Developer tools",
    description:
      "A minimal dark theme for Visual Studio Code, with a considered palette for the editor and syntax highlighting.",
    technologies: ["VS Code", "JSON", "Color themes"],
    repository: "https://github.com/sadra1f/minimal-dark-vscode-theme",
    link: "https://marketplace.visualstudio.com/items?itemName=Sadra1f.minimal-dark-s1f",
    linkLabel: "View extension",
    visual: "minimaldark",
    headline: "A quieter place to code.",
  },
];
