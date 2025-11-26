import { motion } from 'framer-motion';
import CertificatesGallery from '../components/CertificatesGallery';
import Testimonials from '../components/Testimonials';
import CVViewer from '../components/CVViewer';
import SEO from '../components/SEO';

export default function CertificatesPage() {
  return (
    <>
      {/* 🔹 SEO principal */}
      <SEO
        title="Certificados de Diseño Web y Logros Profesionales | Diseño Web Estudio"
        description="Descubre los certificados profesionales, formación especializada y logros de Diseño Web Estudio. Experiencia demostrada en diseño web, desarrollo Full Stack y SEO avanzado."
        url="https://www.diseñowebstudio.com/certificates"
      />

      {/* 🔹 H1 oculto solo para SEO */}
      <h1
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          margin: -1,
          padding: 0,
          border: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
        }}
      >
        Certificados Profesionales y Formación en Diseño Web — Diseño Web Estudio
      </h1>

      {/* 🔹 Marcado estructurado: Perfil Profesional + Logros */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Diseño Web Estudio",
          "url": "https://www.diseñowebstudio.com",
          "jobTitle": "Diseñador Web y Desarrollador Full Stack",
          "description":
            "Diseñador web profesional especializado en desarrollo Full Stack, experiencia en SEO técnico y diseño web moderno.",
          "knowsAbout": [
            "Diseño web",
            "Desarrollo Full Stack",
            "SEO",
            "JavaScript",
            "React",
            "WordPress",
            "UI/UX"
          ],
          "award": [
            "Certificados oficiales de desarrollo web",
            "Certificaciones en SEO",
            "Logros profesionales en diseño web"
          ],
        })}
      </script>

      {/* 🔹 Contenido visual */}
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
    </>
  );
}
