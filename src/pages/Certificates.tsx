import { Helmet } from 'react-helmet-async';
import CertificatesList from '../components/Certificates'; // tu componente existente

export default function CertificatesPage() {
  return (
    <>
      <Helmet>
        <title>Certificados | Diseño Web Estudio</title>
        <meta
          name="description"
          content="Consulta los certificados y logros de Diseño Web Estudio en Segovia. Páginas web profesionales y proyectos realizados."
        />
        <link rel="canonical" href="https://www.diseñowebstudio.com/certificates" />
      </Helmet>

      <main className="min-h-screen">
        <CertificatesList />
      </main>
    </>
  );
}