import React from 'react';
import './App.css';
import first from './assets/latestfirstimage.PNG';
import second from './assets/latestthirdimage.PNG';
import third from './assets/latestfourthimage.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Herosection from './components/Herosections.js';
import Packagessection from './components/Packagessection.js'
import BookTest from './components/Booktest.js'
import Feedback from './components/Feedback.js';
import FAQ from './components/Faq.js'
import BlogSection from './components/BlogSection';
import WhyChooseUs from './components/Whychoodeus';
import Footer from './components/Footer';
const blogPosts = [
  {
    title: 'Vision',
    excerpt: 'Vision: “To be the World-Class HealthCare provider of choice in Clinical Reference lab industry by exceeding expectation through our commitments with a continuous quality improvement.',
    imageUrl: first, 
    link: '/post1',
  },
  {
    title: 'Goal',
    excerpt: 'Goal: We aim to exceed our client’s clinical expectations by providing best quality reports for a cost-effective pricing.',
    imageUrl: second,
    link: '/post2',
  },
  {
    title: 'Value',
    excerpt: 'Values: As Company we value By committed to the results.Passionsfor upgrading technology & Quality policies.Integrity, Respect and Team Spirit',
    imageUrl: third,
    link: '/post2',
  },
  // Add more posts here
];
function App() {
  return (
      <>
         <Header/>
         <Herosection/>
         <Packagessection/>
         <BookTest/>
         <Feedback/>
         <FAQ/>
         <BlogSection posts={blogPosts} />
         <WhyChooseUs/>
         <Footer/>
      </>
    
  );
}

export default App;
