import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "¿Cuál es el precio de sus servicios?",
        answer:
            "Ofrecemos diferentes planes según tus necesidades, desde opciones básicas gratuitas hasta planes profesionales con todas las funcionalidades.",
    },
    {
        question: "¿Cuánto tiempo tarda en crear una página web?",
        answer:
            "Depende de la complejidad y de si usas nuestras plantillas. Una página básica puede estar lista en unas horas, mientras que proyectos más completos pueden tardar varios días.",
    },
    {
        question: "¿Se requiere mantenimiento posterior?",
        answer:
            "Sí, recomendamos mantener la página actualizada y realizar backups periódicos para garantizar su correcto funcionamiento y seguridad.",
    },
    {
        question: "¿Qué tipo de soporte ofrecen?",
        answer:
            "Ofrecemos soporte vía chat y correo electrónico. Los planes profesionales incluyen soporte prioritario y asistencia personalizada.",
    },
    {
        question: "¿Puedo personalizar las funcionalidades?",
        answer:
            "Sí, puedes añadir módulos y plugins según las necesidades de tu proyecto, así como personalizar el diseño a tu gusto.",
    },
    {
        question: "¿Es compatible con dispositivos móviles?",
        answer:
            "Todas nuestras páginas son responsive y se adaptan a móviles, tablets y ordenadores de forma automática.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page pt-32 sm:pt-24 pb-16 px-4 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">P</span>reguntas Frecuentes
            </h1>
            <div className="faq-list space-y-5">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="faq-item border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md dark:shadow-none bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                        <button
                            className="w-full flex justify-between items-center px-6 py-5 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-left">{item.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </motion.div>
                        </button>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { height: "auto", opacity: 1 },
                                        collapsed: { height: 0, opacity: 0 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="px-6 pb-5 text-gray-700 dark:text-gray-300"
                                >
                                    {item.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
