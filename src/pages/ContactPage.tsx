import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      {/* 🔹 SEO principal */}
      <SEO
        title="DWS | Diseño Web Profesional en Segovia | Diseño Web Estudio"
        description="Ponte en contacto con Diseño Web Estudio para solicitar presupuestos de diseño web profesional, desarrollo Full Stack y proyectos SEO. Atendemos clientes en Segovia y toda España."
        url="https://www.diseñowebstudio.com/contact"
      />

      {/* 🔹 H1 oculto solo para Google */}
      <h1 className="sr-only">
        Contacto para Diseño Web Profesional y Desarrollo Web en Segovia
      </h1>

      {/* 🔹 JSON-LD LocalBusiness para SEO local */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Diseño Web Estudio",
          "image": "https://www.diseñowebstudio.com/logo.png",
          "description":
            "Estudio especializado en diseño web profesional, desarrollo Full Stack y optimización SEO.",
          "url": "https://www.diseñowebstudio.com",
          "telephone": "+34 689195597",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Roma 12",
            "addressLocality": "Segovia",
            "postalCode": "40003",
            "addressRegion": "Castilla y León",
            "addressCountry": "ES"
          },
          "areaServed": "ES",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "availableLanguage": ["Spanish", "English"]
          }
        })}
      </script>

      {/* 🔹 Contenido visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-16"
      >
        <CTASection />
        <Contact />
      </motion.div>
    </>
  );
}