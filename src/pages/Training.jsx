import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { FiBook, FiMonitor, FiCode, FiDatabase } from 'react-icons/fi';

const Training = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    {
      icon: <FiBook size={32} />,
      title: "Digital Literacy Fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      description: "Master basic computer skills, internet usage, and office applications."
    },
    {
      icon: <FiMonitor size={32} />,
      title: "IT Essentials",
      duration: "8 weeks",
      level: "Intermediate",
      description: "Learn hardware basics, networking, and system administration."
    },
    {
      icon: <FiCode size={32} />,
      title: "Programming Basics",
      duration: "12 weeks",
      level: "Beginner-Intermediate",
      description: "Introduction to programming concepts and web development."
    },
    {
      icon: <FiDatabase size={32} />,
      title: "Data Management",
      duration: "6 weeks",
      level: "Intermediate",
      description: "Database fundamentals and data analysis techniques."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Training Programs" 
        subtitle="Enhance your digital skills with our comprehensive courses" 
        background="from-green-600 to-blue-600"
      />

      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex space-x-4 mb-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;