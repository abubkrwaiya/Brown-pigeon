import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, background = "from-blue-600 to-indigo-700" }) => {
  return (
    <section className={`bg-gradient-to-r ${background} text-white py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl opacity-90">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;