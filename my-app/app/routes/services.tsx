import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      
      <section id="services" className="pt-32 pb-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">Services I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg border border-indigo-500/10 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Web Development</h3>
              <p className="text-gray-300">Custom website development tailored to your specific needs, built with modern technologies and best practices.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg border border-indigo-500/10 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">E-commerce Solutions</h3>
              <p className="text-gray-300">Complete e-commerce platforms with secure payment integration and inventory management systems.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg border border-indigo-500/10 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Web Application Development</h3>
              <p className="text-gray-300">Scalable and robust web applications that help businesses streamline their operations.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg border border-indigo-500/10 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">UI/UX Design</h3>
              <p className="text-gray-300">User-centered design solutions that enhance user experience and drive engagement.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg border border-indigo-500/10 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Maintenance & Support</h3>
              <p className="text-gray-300">Ongoing maintenance and support services to keep your digital products running smoothly.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg border border-indigo-500/10 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Consulting</h3>
              <p className="text-gray-300">Expert advice on technology stack selection, architecture design, and development strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 