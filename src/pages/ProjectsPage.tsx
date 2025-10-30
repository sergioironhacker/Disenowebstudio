import { motion } from 'framer-motion';
import ProjectsEnhanced from '../components/ProjectsEnhanced';
import CaseStudy from '../components/CaseStudy';

export default function ProjectsPage() {
  return (
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
  );
}
