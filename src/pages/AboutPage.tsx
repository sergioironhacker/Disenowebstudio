import { Helmet } from 'react-helmet-async';
import About from '../components/About'; // tu componente real

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Diseño Web Estudio</title>
        <meta name="description" content="Conoce Diseño Web Estudio: diseño web profesional en Segovia." />
      </Helmet>
      <About />
    </>
  );
}