import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { ProfileOverview } from "@/components/main/profile-overview";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Shah",
    url: "https://alishahcv.vercel.app",
    image: "https://alishahcv.vercel.app/logo.png",
    sameAs: [
      "https://www.linkedin.com/in/aleekaay/?originalSubdomain=pk",
      "https://alishahcv.vercel.app",
    ],
    jobTitle: "Senior IT and Development Manager",
    knowsAbout: [
      "Artificial Intelligence",
      "CRM Architecture",
      "Web Development",
      "Workflow Automation",
      "Technology Integration",
    ],
    alumniOf: [
      "Islamabad College for Boys, G-6/3",
      "Islamabad Model School for Boys, Chak Shehzad",
    ],
  };

  return (
    <main className="h-full w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <ProfileOverview />
      </div>
    </main>
  );
}
