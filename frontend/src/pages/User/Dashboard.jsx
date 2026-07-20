import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";


function DashboardUser() {
  return (
    <div id="home">
      <Hero fullname="Harsh" />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default DashboardUser;
