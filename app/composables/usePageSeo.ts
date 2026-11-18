export function usePageSeo(meta: { title: string; description: string }) {
  useSeoMeta(meta);

  defineOgImage("SeoOgImage.takumi", meta, {
    height: 630,
    alt: `${meta.title} — portrait of Sadra Saderi`,
  });
}
