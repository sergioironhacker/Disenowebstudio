import { motion } from 'framer-motion';
import ProjectsEnhanced from '../components/ProjectsEnhanced';
import CaseStudy from '../components/CaseStudy';
import { Helmet } from 'react-helmet-async';

export default function ProjectsPage() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Proyectos Web de Diseño Web Estudio",
    "description": "Listado de proyectos web desarrollados por Diseño Web Estudio: corporativos, ecommerce y webs personales, todas optimizadas para SEO.",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Proyecto Corporativo Profesional" },
      { "@type": "ListItem", "position": 2, "name": "Tienda Online Ecommerce" },
      { "@type": "ListItem", "position": 3, "name": "Web Personal de Marca" }
    ]
  };

  return (
    <>
      {/* 🔹 Helmet SEO */}
      <Helmet>
        <title>Proyectos Web Realizados | Diseño Web Estudio</title>
        <meta
          name="description"
          content="Descubre los proyectos web realizados por Diseño Web Estudio en Segovia. Diseño profesional, responsive y optimizado para SEO para empresas y emprendedores."
        />
        <link rel="canonical" href="https://www.diseñowebstudio.com/projects" />
      </Helmet>

      {/* 🔹 JSON-LD para proyectos */}
      <script type="application/ld+json">
        {JSON.stringify(projectsSchema)}
      </script>

      {/* 🔹 H1 visible */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white pt-24 pb-10">
        Proyectos Web Realizados
      </h1>

      {/* 🔹 Contenido visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-4"
      >
        <ProjectsEnhanced />
        <CaseStudy />
      </motion.div>
    </>
  );
}
