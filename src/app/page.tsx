import Navbar from './components/Navbar'
import BannerPage from './components/banner'
import ProjectsPage from './components/projects'
import WhatIKnowPage from './components/whatIKnow'
import SocialLink from './components/socialLink'
export default function Home() {
  return (
    <main>
      <Navbar/>
      <BannerPage/>
      <ProjectsPage/>
      <WhatIKnowPage/>
      <SocialLink/>
    </main>
  )
}
