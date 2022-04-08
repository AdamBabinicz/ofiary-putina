import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Milestones from "./components/Milestones";
import Blog from "./components/Blog";
import Video from "./components/Video";
// import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <motion.div initial="hidden" animate="show">
        <ScrollToTop />
        <Home />
        <Services />
        <Portfolio />
        <Milestones />
        <Blog />
        <Video />
        {/* <Pricing /> */}
        <Testimonials />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
}

export default App;
