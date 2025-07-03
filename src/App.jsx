import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import useTouchScreen from "./hooks/useTouchScreen";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <ThemeProvider>
      {/* <AnimatedBackground /> */}
      {!useTouchScreen() && <CustomCursor />}

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}