import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {FiMonitor, FiCode, FiUsers, FiBookOpen} from "react-icons/fi";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FiMonitor size={24} />,
      title: "IT Consultancy",
      description:
        "Strategic technology solutions tailored to your business needs",
    },
    {
      icon: <FiCode size={24} />,
      title: "Software Development",
      description:
        "Custom software solutions built with cutting-edge technology",
    },
    {
      icon: <FiUsers size={24} />,
      title: "IT Training",
      description: "Comprehensive training programs for individuals and teams",
    },
    {
      icon: <FiBookOpen size={24} />,
      title: "Digital Literacy",
      description: "Foundation courses for essential computer skills",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: 'url("./images/brown-pigeon.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-00/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Businesses & Individuals Through Technology
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Professional IT services and foundational training for the digital
              age
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.8}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Comprehensive IT solutions for your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: 'url("./images/brown-pigeon.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-blue-900/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Transform Your Digital Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join our training program or get a consultation today
          </p>
          <div className="space-x-4">
            <a
              href="/training"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Join Training
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900/50 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
