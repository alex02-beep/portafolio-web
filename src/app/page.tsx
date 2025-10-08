import Header from "./components/Header"
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback"
import { FcFeedback } from "react-icons/fc";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Feedback />
      <Skills />
      <Contact />
    </main>
  );
}
