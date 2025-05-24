import { Routes, Route } from 'react-router-dom';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Pages
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import ErrorPage from '@/pages/ErrorPage';

const App = () => {
    return (
        <div className=' p-4 lg:p-[70px] bg-[#020618]'>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;