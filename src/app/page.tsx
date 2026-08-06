import HomeClient from "@/components/home/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEZAI | Enterprise Product Engineering & Engineering Mentorship",
  description: "DEZAI builds world-class digital platforms for global enterprises and mentors the next generation of top-tier software engineers.",
  alternates: { canonical: "/" }
};

export default function Page() {
  return (
    <>
      <HomeClient />
    </>
  );
}
