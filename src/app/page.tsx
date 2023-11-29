import Navbar from './components/Navbar'
import BannerPage from './components/banner'
import ProjectsPage from './components/projects'
import WhatIKnowPage from './components/whatIKnow'
import SocialLink from './components/socialLink'
import ContactPage from './components/contactForm'
import ResumePage from './components/resume'
export default function Home() {
  return (
    <main>
      <Navbar/>
      <BannerPage/>
      <ProjectsPage/>
      <WhatIKnowPage/>
      <SocialLink/>
      <ContactPage/>
    </main>
  )
}
