import Hero from "@/components/Hero";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black">
      <ScrollProvider>
        <Hero />
      </ScrollProvider>
    </main>
  );
}
