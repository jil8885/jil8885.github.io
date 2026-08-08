import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/posts` },
    { url: `${SITE_URL}/tags` },
    { url: `${SITE_URL}/about` },
    ...posts.map((post) => ({
      url: `${SITE_URL}/posts/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
