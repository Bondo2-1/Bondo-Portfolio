import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      
      <section id="bio" className="pt-32 pb-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                Hello! I'm a passionate freelance developer with expertise in creating modern, responsive, and user-friendly web applications. With several years of experience in the industry, I've helped numerous clients bring their digital visions to life.
              </p>
              <p className="text-gray-300 text-lg">
                My journey in web development started with a curiosity for creating things that live on the internet. Today, I specialize in building robust web applications using the latest technologies and best practices.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-500 mb-6">Skills</h3>
              <ul className="space-y-4 text-gray-300 list-inside">
                <li>Frontend Development (HTML, CSS, JavaScript)</li>
                <li>Modern Frameworks (React, Vue, Angular)</li>
                <li>Backend Development (Node.js, Python)</li>
                <li>Database Management</li>
                <li>UI/UX Design</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 