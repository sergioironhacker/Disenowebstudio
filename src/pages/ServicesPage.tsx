import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Servicios de Diseño Web Profesional en Segovia | Diseño Web Estudio</title>
        <meta
          name="description"
          content="Descubre los servicios de diseño web profesional y desarrollo Full Stack que ofrecemos en Segovia. Páginas web modernas, rápidas y optimizadas para SEO."
        />
        <link rel="canonical" href="https://www.diseñowebstudio.com/services" />
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
        Servicios de Diseño Web Profesional en Segovia — Diseño Web Estudio
      </h1>

      {/* Contenido visible */}
      <Services />
    </>
  );
}
