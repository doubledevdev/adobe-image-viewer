import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
