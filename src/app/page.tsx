import Home from "@/src/components/Home";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";

export default function Page() {
  return (
    <div className="min-h-screen font-sans">
      <main className="flex flex-col">
        <Home />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}