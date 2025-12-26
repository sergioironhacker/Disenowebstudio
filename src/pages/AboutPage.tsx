import { Helmet } from 'react-helmet-async';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Diseño Web Estudio</title>
        <meta
          name="description"
          content="Conoce Diseño Web Estudio: diseño web profesional en Segovia."
        />
        <link
          rel="canonical"
          href="https://www.diseñowebstudio.com/about"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sobre Nosotros | Diseño Web Estudio" />
        <meta property="og:description" content="Conoce Diseño Web Estudio: diseño web profesional en Segovia." />
        <meta property="og:url" content="https://www.diseñowebstudio.com/about" />
        <meta property="og:image" content="https://www.diseñowebstudio.com/ogImage.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nosotros | Diseño Web Estudio" />
        <meta name="twitter:description" content="Conoce Diseño Web Estudio: diseño web profesional en Segovia." />
        <meta name="twitter:image" content="https://www.diseñowebstudio.com/ogImage.png" />

        {/* JSON-LD Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Diseño Web Estudio",
            "url": "https://www.diseñowebstudio.com",
            "logo": "https://www.diseñowebstudio.com/favicon-512.png",
            "sameAs": [
              "https://github.com/sergioironhacker",
              "https://www.linkedin.com/in/sergioeandres",
              "https://www.instagram.com/diseniowebstudio/"
            ]
          })}
        </script>
      </Helmet>

      {/* H1 oculto para SEO */}
      <h1 style={{ 
        position: 'absolute', 
        width: 1, 
        height: 1, 
        overflow: 'hidden', 
        clip: 'rect(0,0,0,0)', 
        whiteSpace: 'nowrap' 
      }}>
        Sobre Nosotros — Diseño Web Estudio
      </h1>

      <About />
    </>
  );
}