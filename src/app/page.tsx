import Header from "./components/Header"
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
