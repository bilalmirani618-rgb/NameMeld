import { useEffect } from 'react';

type Breadcrumb = { name: string; path: string };

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  breadcrumbs?: Breadcrumb[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  indexable?: boolean;
};

const SITE_NAME = 'NameMeld';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SEO({ title, description, path = '/', type = 'website', keywords = [], breadcrumbs = [], structuredData, indexable = true }: SEOProps) {
  useEffect(() => {
    const canonicalUrl = new URL(path, window.location.origin).href;
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', indexable ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, nofollow');
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    if (keywords.length) upsertMeta('name', 'keywords', keywords.join(', '));
    upsertLink('canonical', canonicalUrl);

    const existing = document.getElementById('namemeld-page-schema');
    if (existing) existing.remove();

    const graph: Record<string, unknown>[] = [];
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: window.location.origin + '/' },
      inLanguage: 'en-US',
    });

    if (breadcrumbs.length) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: new URL(item.path, window.location.origin).href,
        })),
      });
    }

    if (structuredData) {
      const items = Array.isArray(structuredData) ? structuredData : [structuredData];
      graph.push(...items);
    }

    const script = document.createElement('script');
    script.id = 'namemeld-page-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(script);

    return () => {
      const current = document.getElementById('namemeld-page-schema');
      if (current) current.remove();
    };
  }, [title, description, path, type, keywords.join('|'), JSON.stringify(breadcrumbs), JSON.stringify(structuredData), indexable]);

  return null;
}
