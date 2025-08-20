import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/Logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Assuming this is where your CSS is
import { Link } from 'react-router-dom';

const Header = () => {
  // State for managing the visibility of specific dropdowns
  const [showTypeofTests, setShowTypeofTests] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  // State for managing the visibility of the main mobile navigation menu
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Refs for detecting clicks outside specific elements to close them
  const typeofTestsRef = useRef(null); // Ref for the "Type of Tests" dropdown parent
  const branchesRef = useRef(null);    // Ref for the "Our Branches" dropdown parent
  const mobileNavRef = useRef(null);   // Ref for the main mobile navigation container
  const mobileIconRef = useRef(null);  // Ref for the mobile menu icon

  // Function to close all currently open dropdowns/sub-menus
  const closeAllSubMenus = () => {
    setShowTypeofTests(false);
    setShowBranches(false);
  };

  // useEffect hook to handle clicks outside of the menu and dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close "Type of Tests" dropdown if a click occurs outside its element
      if (typeofTestsRef.current && !typeofTestsRef.current.contains(event.target)) {
        setShowTypeofTests(false);
      }
      // Close "Our Branches" dropdown if a click occurs outside its element
      if (branchesRef.current && !branchesRef.current.contains(event.target)) {
        setShowBranches(false);
      }
      // Close the main mobile navigation if a click occurs outside its container
      // and not on the mobile menu icon itself
      if (
        mobileNavRef.current && !mobileNavRef.current.contains(event.target) &&
        mobileIconRef.current && !mobileIconRef.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Toggle function for "Type of Tests" dropdown
  const toggleTypeofTests = (event) => {
    event.stopPropagation(); // Stop propagation to prevent document click from closing immediately
    setShowTypeofTests(!showTypeofTests);
    setShowBranches(false); // Ensure "Our Branches" dropdown is closed
  };

  // Toggle function for "Our Branches" dropdown
  const toggleShowBrancheslist = (event) => {
    event.stopPropagation(); // Stop propagation to prevent document click from closing immediately
    setShowBranches(!showBranches);
    setShowTypeofTests(false); // Ensure "Type of Tests" dropdown is closed
  };

  // Toggle function for the main mobile navigation menu
  const toggleMobileNav = (event) => {
    event.stopPropagation(); // Stop propagation to prevent document click from closing immediately
    setShowMobileNav(!showMobileNav);
    closeAllSubMenus(); // Close any open sub-menus when the main mobile nav is toggled
  };

  return (
    <div>
      {/* First Section: Logo and Contact Information */}
      <div className='sectionfirstone'>
        <div>
         
          <img src={Logo} id="mainlogo" alt="logo" />
         
          </div>
        
        <div>9705111133</div>
        <div>contact@healthkuredignostics.in</div>
      </div>

      {/* Second Section: Navigation Bar Container */}
      {/* This container helps manage the layout of the mobile icon and the navigation links */}
      <div className="navbar-container">
        {/* Mobile Menu Toggle Icon */}
        {/* This icon is visible only on mobile and triggers the main navigation menu */}
        <div className='mobileresponsivenavbaricon' onClick={toggleMobileNav} ref={mobileIconRef}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Main Navigation Links */}
        {/* The 'mobile-active' class dynamically controls its visibility and layout on mobile */}
        <div className={`headersectionsecondone ${showMobileNav ? 'mobile-active' : ''}`} ref={mobileNavRef}>
          <div className="nav-item">
            <Link to ="/">
            Home 
            </Link>
          
            </div>
          <div className="nav-item">
             <Link to="/aboutus">
             About us
             </Link>
          
            
             
            </div>

          {/* "Our Branches" Dropdown */}
          <div className='dropdown nav-item' onClick={toggleShowBrancheslist} ref={branchesRef}>
            Our Branches
            {showBranches && (
              <ul className='firstrow'>
                <li>Hyderabad</li>
                <li>Visakhapatnam</li>
              </ul>
            )}
          </div>

          {/* "Type of Tests" Dropdown */}
          <div className="dropdown nav-item" onClick={toggleTypeofTests} ref={typeofTestsRef}>
            Type of Tests
            {showTypeofTests && (
              <ul>
                <li>Clinical Bio Chemistry
                  <ul className='subdropdownmenu'>
                    <li>Hormones - Thyroid & Fertility</li>
                    <li>Vitamins</li>
                    <li>Tumour Markers</li>
                    <li>Electrophoresis</li>
                    <li>Cardiac Markers</li>
                    <li>Diabetic Markers</li>
                    <li>Special Proteins</li>
                  </ul>
                </li>
                <li>Hematology
                  <ul>
                    <li>Complete Blood Count</li>
                    <li>ESR</li>
                    <li>Coagulation Disorders</li>
                  </ul>
                </li>
                <li className='rowsecond'>Microbiology
                  <ul>
                    <li>Bacterial, Fungal, Viral</li>
                    <li>Mycobacterial Cultures</li>
                  </ul>
                </li>
                <li className='rowThird'>Serology
                  <ul>
                    <li>All Infectious Diseases-TB, HIV, HBV, HCV, VDRL</li>
                    <li>Auto Immune Disorders-SLE, RA</li>
                    <li>AMH,</li>
                    <li>TORCH,</li>
                  </ul>
                </li>
                <li>Molecular Biology
                  <ul>
                    <li>PCR Tests - Qualitative, Quantitative(Viral Load)</li>
                  </ul>
                </li>
                <li className='rowfourth'>Cytogenetics
                  <ul>
                    <li>Genetic Disorder Studies,</li>
                    <li>Chromosomal Microarray Analysis</li>
                  </ul>
                </li>
                <li>Histopathology
                  <ul>
                    <li>Biopsy,</li>
                    <li>Cytology (PAP Smear, Body Fluid Analysis</li>
                    <li>Immunohistochemistry</li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
          <div className="nav-item">Packages</div>
          <div className="nav-item">Blogs</div>
          <div className="nav-item">Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
