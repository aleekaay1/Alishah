import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Ali Shah",
  description: "Personal CV portfolio of Ali Shah.",
  keywords: [
    "Ali Shah",
    "personal CV",
    "portfolio",
    "resume",
    "IT",
    "AI",
    "development",
    "experience",
    "certifications",
  ] as Array<string>,
  authors: {
    name: "Ali Shah",
    url: "https://www.linkedin.com/in/aleekaay/?originalSubdomain=pk",
  },
} as const;
