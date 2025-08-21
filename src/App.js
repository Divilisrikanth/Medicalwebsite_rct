import React from 'react';
import first from './assets/latestfirstimage.PNG';
import second from './assets/latestthirdimage.PNG';
import third from './assets/latestfourthimage.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Herosection from './components/Herosections.js';
import Whatmakesdiffcards from './components/whatmakesdiffcards';
import Packagessection from './components/Packagessection.js'
import BookTest from './components/Booktest.js'
import Feedback from './components/Feedback.js';
import FAQ from './components/Faq.js'
import BlogSection from './components/BlogSection';
import WhyChooseUs from "./components/Whychoodeus";
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const blogPosts = [
  // ... (your blogPosts array)
];

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Route for the Home Page */}
                <Route exact path="/" element={
                    <>
                        <Herosection />
                        <Whatmakesdiffcards />
                        <Packagessection />
                        <BookTest />
                        <Feedback />
                        <FAQ />
                        <BlogSection posts={blogPosts} />
                        <WhyChooseUs />
                    </>
                } />
           
                {/* Route for the About Us page */}
                <Route exact path="/aboutus" element={<Aboutus />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;