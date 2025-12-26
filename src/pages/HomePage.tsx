import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseMe from '../components/WhyChooseMe';
import TechStack from '../components/TechStack';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      {/* Helmet para SEO */}
      <Helmet>
        <title>
          Diseño Web Profesional y Desarrollo Full Stack en Segovia | Diseño Web Estudio
        </title>
        <meta
          name="description"
          content="Diseño Web Estudio ofrece diseño web profesional y desarrollo Full Stack en Segovia. Creamos páginas web modernas, rápidas y optimizadas para SEO para empresas y emprendedores."
        />
        <link rel="canonical" href="https://www.diseñowebstudio.com/" />
      </Helmet>

      {/* SEO H1 oculto a usuarios */}
      <h1
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap'
        }}
      >
        Diseño Web Profesional en Segovia — Diseño Web Estudio
      </h1>

      {/* Contenido visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Hero />
        <About />
        <WhyChooseMe />
        <TechStack />
        <Timeline />
        <Skills />
        <Statistics />
        <Services />
      </motion.div>
    </>
  );
}