import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import SocialSidebar from "./components/SocialSidebar";
import "./index.css";

function App() {
  return (
    <div className='app'>
      <CustomCursor />
      <SocialSidebar />
      <Navbar />
      <main className='container'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "25px",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--text-secondary)",
        }}
      >
        <a
          href='https://github.com/okikijesutech'
          target='_blank'
          rel='noreferrer'
          style={{
            display: "block",
            marginBottom: "10px",
            color: "var(--text-secondary)",
          }}
        >
          Built by OLUWASINA OkikiJesu © 2026
        </a>
      </footer>
    </div>
  );
}

export default App;
