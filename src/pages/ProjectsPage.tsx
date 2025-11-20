import { motion } from 'framer-motion';
import ProjectsEnhanced from '../components/ProjectsEnhanced';
import CaseStudy from '../components/CaseStudy';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Proyectos realizados | Diseño Web Estudio"
        description="Descubre los proyectos web realizados por Diseño Web Estudio. Diseño profesional, responsive y optimizado para SEO."
        url="https://www.diseñowebstudio.com/projects"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-16"
      >
        <ProjectsEnhanced />
        <CaseStudy />
      </motion.div>
    </>
  );
}
