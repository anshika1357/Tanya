import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { WorkExperience } from './components/WorkExperience'
import { Leadership } from './components/Leadership'
import { Projects } from './components/Projects'
import { InMyQueue } from './components/InMyQueue'
import { Writing } from './components/Writing'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <WorkExperience />
        <Leadership />
        <Projects />
        <InMyQueue />
        <Writing />
      </main>
      <Footer />
    </>
  )
}

export default App
