import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectSection"
import SkillsSection from "./components/SkillsSection"

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-950 to-black text-white p-8 space-y-16">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}
 

export default App


    
 