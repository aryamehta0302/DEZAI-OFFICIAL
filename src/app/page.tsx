import HomeClient from "@/components/home/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

export default function Page() {
  return <HomeClient />;
}
