import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/Contact'; // tu componente existente

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
      </Helmet>

      <main className="min-h-screen">
        <ContactForm />
      </main>
    </>
  );
}
