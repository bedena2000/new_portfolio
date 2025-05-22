import { Routes, Route } from 'react-router-dom';

// Components
import Header from '@/components/Header';

// Pages
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import ErrorPage from '@/pages/ErrorPage';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default App;