import { Award, Calendar } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Ironhack',
    date: '2022',
    image: '/Certificado-ironhack.png',
    description: 'Bootcamp intensivo de desarrollo web full stack'
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    issuer: 'Ironhack',
    date: '2023',
    image: '/certificado-js.png',
    description: 'Certificación en JavaScript avanzado y ES6+'
  },
  {
    id: 3,
    title: 'React Development',
    issuer: 'coddy.tech/',
    date: '2024',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Especialización en React y desarrollo de aplicaciones SPA'
  },
  {
    id: 4,
    title: 'Node.js Backend',
    issuer: 'Ironhack',
    date: '2025',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Desarrollo de APIs REST con Node.js y Express'
  }
];

export default function Certificates() {
  return (
    <section id="certificados" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Certificados y Logros
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Mi formación y certificaciones profesionales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            En continuo aprendizaje y actualización de conocimientos
          </p>
        </div>
      </div>
    </section>
  );
}