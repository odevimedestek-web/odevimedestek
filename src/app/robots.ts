import type { MetadataRoute } from "next";

// Yapay zekâ asistanlarının arama/tarama botları: önerilerde görünmek için açıkça izinli.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "YandexBot",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/odeme/"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: aiBots, allow: "/", disallow },
    ],
    sitemap: "https://www.odevimedestek.com/sitemap.xml",
  };
}
