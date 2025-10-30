import { motion } from 'framer-motion';
import CertificatesGallery from '../components/CertificatesGallery';
import Testimonials from '../components/Testimonials';
import CVViewer from '../components/CVViewer';

export default function CertificatesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-16"
    >
      <CertificatesGallery />
      <Testimonials />
      <CVViewer />
    </motion.div>
  );
}
