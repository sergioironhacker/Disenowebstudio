import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contacto | Diseño Web Estudio</title>
        <meta
          name="description"
          content="Contacta con Diseño Web Estudio en Segovia para tu página web profesional. Formulario de contacto y datos de contacto."
        />
        <link rel="canonical" href="https://www.diseñowebstudio.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contacto | Diseño Web Estudio" />
        <meta
          property="og:description"
          content="Contacta con Diseño Web Estudio en Segovia para tu página web profesional. Formulario de contacto y datos de contacto."
        />
        <meta property="og:url" content="https://www.diseñowebstudio.com/contact" />
        <meta property="og:image" content="https://www.diseñowebstudio.com/ogImage.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | Diseño Web Estudio" />
        <meta
          name="twitter:description"
          content="Contacta con Diseño Web Estudio en Segovia para tu página web profesional. Formulario de contacto y datos de contacto."
        />
        <meta name="twitter:image" content="https://www.diseñowebstudio.com/ogImage.png" />

        {/* JSON-LD LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Diseño Web Estudio",
            "image": "https://www.diseñowebstudio.com/logo.png",
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
      </Helmet>

      {/* H1 SEO oculto */}
      <h1 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        Contacto con Diseño Web Profesional en Segovia — Diseño Web Estudio
      </h1>

      <main className="min-h-screen">
        <ContactForm />
      </main>
    </>
  );
}