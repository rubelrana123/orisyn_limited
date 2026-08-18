import type { MetadataRoute } from "next";
import { careerData } from "@/lib/career";
import { people } from "@/lib/people";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about", "/business", "/career", "/contact"];
  const profiles = Object.keys(people);

  return [
    ...staticPages.map((path, index) => ({
      url: absoluteUrl(path),
      changeFrequency: (path === "/career" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "/" ? 1 : index < 3 ? 0.8 : 0.7,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/business/${service.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(service.image)],
    })),
    ...profiles.map((person) => ({
      url: absoluteUrl(`/about/${person}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...careerData.map((job) => ({
      url: absoluteUrl(`/career/${job.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
