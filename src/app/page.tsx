import Home from "@/src/components/Home";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen font-sans">
      <main>
        <Home />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}