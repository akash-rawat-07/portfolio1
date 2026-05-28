import LoadingScreen from "./components/layout/LoadingScreen";
import ScrollProgress from "./components/layout/ScrollProgress";
import CursorGlow from "./components/layout/CursorGlow";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
