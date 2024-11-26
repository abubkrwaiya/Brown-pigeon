import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { FiMonitor, FiCode, FiDatabase, FiCloud, FiShield, FiSmartphone } from 'react-icons/fi';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FiMonitor size={32} />,
      title: "IT Strategy Consulting",
      description: "Strategic planning and roadmap development for digital transformation initiatives."
    },
    {
      icon: <FiCode size={32} />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs."
    },
    {
      icon: <FiDatabase size={32} />,
      title: "Data Management",
      description: "Comprehensive data solutions including analytics and visualization."
    },
    {
      icon: <FiCloud size={32} />,
      title: "Cloud Solutions",
      description: "Cloud migration and optimization services for improved scalability."
    },
    {
      icon: <FiShield size={32} />,
      title: "Cybersecurity",
      description: "Protection against threats and implementation of security best practices."
    },
    {
      icon: <FiSmartphone size={32} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile application development."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive IT solutions for your business" 
        background="from-indigo-600 to-purple-700"
      />

      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;