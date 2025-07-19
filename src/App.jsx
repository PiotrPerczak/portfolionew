/**
 * Main App component that serves as the root of the portfolio application
 * Renders all major sections: Navbar, About Me, Projects, Contact, and Footer
 * Uses horizontal dividers to separate each section visually
 */
import "./App.css";
import Navbar from "./elements/Navbar";
import AboutMe from "./elements/Aboutme";
import Projects from "./elements/Projects";
import Contact from "./elements/Contact";
import Footer from "./elements/Footer";

function App() {
  return (
    <div>
      {/* Navigation bar component */}
      <Navbar />
      
      {/* Gradient horizontal divider */}
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      
      {/* About me section */}
      <AboutMe />
      
      {/* Gradient horizontal divider */}
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      
      {/* Projects showcase section */}
      <Projects />
      
      {/* Gradient horizontal divider */}
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      
      {/* Contact form section */}
      <Contact />
      
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
