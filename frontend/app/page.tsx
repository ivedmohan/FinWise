// src/app/page.tsx
import { Header1 } from "../components/nav"; // Change to a named import
import { Hero1 } from "../components/hero"; // Change to a named import
import { Footer1 } from "../components/footer"

export default function Home() {
  return (
    <main>
      <Header1 />
      <Hero1 />
      <Footer1 />
    </main>
  );
}
