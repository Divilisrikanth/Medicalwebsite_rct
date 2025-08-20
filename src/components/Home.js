import React from "react";

import first from '../assets/latestfirstimage.PNG';
import second from '../assets/latestthirdimage.PNG';
import third from '../assets/latestfourthimage.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Herosection from './Herosections.js';
//import WhatmakeusDifferent from './components/whatmakeusdifferent';
import Whatmakesdiffcards from './whatmakesdiffcards';
import Packagessection from './Packagessection.js'
import BookTest from './Booktest.js'
import Feedback from './Feedback.js';
import FAQ from './Faq.js'
import BlogSection from './BlogSection';
import WhyChooseUs from './Whychoodeus';
import Footer from './Footer';
import '../App.css';
const blogPosts=[
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
function Home() {
  return (
    <>
    <Header/>
    <Herosection/>
    <Whatmakesdiffcards/>
    <Packagessection/>
    <BookTest/>
    <Feedback/>
    <FAQ/>
    <BlogSection posts={blogPosts} />
    <WhyChooseUs/>
  <Footer/>
  </>
  )
}
export default Home;