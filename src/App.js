import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Home';
import AboutUs from './components/AboutUs';
import NewsSection from './components/NewsSection';
import OurPartners from './components/OurPartners';
import OurWorks from './components/OurWorks';
import ContactUs from './components/ContactUs';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/page4';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              <AboutUs />
              <OurWorks />
              <OurPartners />
              <NewsSection />
              <ContactUs />
              <Footer />
            </>
          } />
          <Route path="/about-us" element={<Page1 />} />
          <Route path="/vision" element={<Page2 />} />
          <Route path="/mission" element={<Page3 />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/contactus" element={<Page4 />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
