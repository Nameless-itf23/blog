import { getCollection } from "astro:content";
import { nerdFontData } from "@components/nerd/NerdUtils";

export const getAllTags = async () => {
  const allPosts = await getCollection("posts");
  const expectedTags: string[] = Object.keys(nerdFontData);
  const existTags: string[] = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  const sortedExistTags: string[] = expectedTags.filter((tag) => existTags.includes(tag));
  const unexpectedTags = existTags.filter((tag) => !expectedTags.includes(tag));
  return sortedExistTags.concat(unexpectedTags);
};
