import type { Metadata } from "next";

export const siteConfig = {
  name: "Orisyn Limited",
  description:
    "Integrated engineering, construction, supply, and investment solutions in Bangladesh.",
  email: "orisynlimited@gmail.com",
  phone: "+8801746644478",
  address:
    "House #263 (2nd Floor), Road #19, Mohakhali DOHS, Dhaka Cantonment, Dhaka 1206, Bangladesh",
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const siteUrl = new URL(configuredUrl).origin;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  noIndex = false,
}: SeoInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_BD",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${title} — ${siteConfig.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
