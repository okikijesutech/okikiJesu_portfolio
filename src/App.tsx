import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '25px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>
        <a 
          href="https://github.com/okikijesutech" 
          target="_blank" 
          rel="noreferrer"
          style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}
        >
          Built by OLUWASINA OkikiJesu © 2026
        </a>
      </footer>
    </div>
  )
}

export default App
