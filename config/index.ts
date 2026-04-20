import type { Metadata } from "next";

const siteUrl = "https://alishahcv.vercel.app";

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali Shah | CV Portfolio",
    template: "%s | Ali Shah",
  },
  description:
    "Ali Shah's personal CV portfolio showcasing experience, certifications, projects, skills, and professional achievements.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ali Shah",
    "Ali Shah CV",
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
  creator: "Ali Shah",
  publisher: "Ali Shah",
  openGraph: {
    title: "Ali Shah | CV Portfolio",
    description:
      "Explore Ali Shah's profile, work experience, certifications, skills, and achievements.",
    url: siteUrl,
    siteName: "Ali Shah CV Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ali Shah CV Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Shah | CV Portfolio",
    description:
      "Personal CV portfolio of Ali Shah with certifications, experience, and professional highlights.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
} as const;
