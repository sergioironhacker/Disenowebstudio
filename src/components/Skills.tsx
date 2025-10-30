import { Database, Code, Server, Braces } from 'lucide-react';

const skills = [
  {
    name: 'MongoDB',
    icon: Database,
    description: 'Base de datos NoSQL',
    color: 'from-green-500 to-emerald-600',
    level: 85
  },
  {
    name: 'React',
    icon: Code,
    description: 'Biblioteca de UI',
    color: 'from-blue-500 to-cyan-600',
    level: 90
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Runtime de JavaScript',
    color: 'from-green-600 to-lime-600',
    level: 85
  },
  {
    name: 'JavaScript',
    icon: Braces,
    description: 'Lenguaje de programación',
    color: 'from-yellow-500 to-orange-500',
    level: 90
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Habilidades Principales
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Tecnologías en las que me especializo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                {skill.description}
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Otras Tecnologías
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Express.js', 'TypeScript', 'Tailwind CSS', 'Git', 'REST APIs', 'HTML5', 'CSS3', 'Vite'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:scale-110 transition-transform shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}