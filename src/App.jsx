import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'   // adjust if your alias is @/

// import each page component
import HomePage        from '@/components/Pages/Home'
import ProjectsPage from '@/components/Pages/Projects'
import AboutPage from '@/components/pages/About'
import ContactPage from '@/components/pages/Contact'
import ProjectDetailsPage from '@/components/pages/ProjectDetails'

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* root → Introduction */}
        <Route index element={<HomePage />} />

        {/* match the URLs your createPageUrl produces */}
        <Route path="home"           element={<HomePage />} />
        <Route path="projects"           element={<ProjectsPage />} />
        <Route path="about"           element={<AboutPage />} />
        <Route path="contact"           element={<ContactPage />} /> 
        <Route path="project-details" element={<ProjectDetailsPage />} />

        

        {/* any unknown path → back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout> 
  )
}