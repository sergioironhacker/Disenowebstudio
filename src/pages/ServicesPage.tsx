import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Servicios | Diseño Web Estudio</title>
        <meta name="description" content="Descubre los servicios de diseño web profesional que ofrecemos en Segovia." />
      </Helmet>
      <Services />
    </>
  );
}