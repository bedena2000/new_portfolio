import { Routes, Route } from "react-router-dom";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import ErrorPage from "@/pages/ErrorPage";

const App = () => {
  return (
    <div className="min-h-screen flex w-full flex-col p-4 lg:p-[70px] bg-[#020618]">
      <div className="flex-none w-full">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="flex-none w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
