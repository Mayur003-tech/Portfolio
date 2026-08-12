import type { MetadataRoute } from "next";

const baseUrl = "https://mayurgotmare.dev"; // TODO: update to your real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experience", "/project", "/skills", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
