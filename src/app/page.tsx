import Home from "@/src/components/Home";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex items-center justify-between">
        <Home/>
      </main>
    </div>
  );
}
