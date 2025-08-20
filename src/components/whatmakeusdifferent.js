import React from 'react';
import { useState } from 'react';
import affordableprices from '../assets/prices.jpg';
import happycustomers from '../assets/happy.jpg';
import staff from '../assets/staff.jpg';
import Opened from '../assets/opened.jpg';
import techinicans from '../assets/techinicans.jpg';
import Herosectionmain from '../assets/wtmkssiffrnc.jpg';
const WhatmakeusDifferent = () => {
    const [showWorkingHours, setShowWorkingHours] = useState(false);
    const [showContactDetails, setShowContactDetails] = useState(false);
    const [showBookaAppointment,setShowBookaAppointment] = useState(false);

    const toggleWorkingHours = () => {
        // Toggle Working Hours
        setShowWorkingHours(!showWorkingHours);
        // Ensure Contact Details is closed
        setShowContactDetails(false);
        setShowBookaAppointment(false);
    };

    const toggleContactDetails = () => {
        // Toggle Contact Details
        setShowContactDetails(!showContactDetails);
        // Ensure Working Hours is closed
        setShowWorkingHours(false);
        setShowBookaAppointment(false)
    };
    const toggleBookaAppointment = () =>{
        setShowBookaAppointment(!showBookaAppointment)
      
        setShowContactDetails(false);
        setShowWorkingHours(false);

    }

  
    const showMaps =() =>{
        window.open("https://www.google.com/maps/place/Healthkure+Diagonstics/@17.7451518,83.3263344,16.25z/data=!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3a395dd9b45791d7:0x3eaba5ee15253d9c!2sHealthkure+Diagonstics,+DNO+1-56-22%2F1,+LIG-218,+Venkojipalem+Rd,+Sector+2,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017!2m2!1d83.332103!2d17.7464259!3m5!1s0x3a395dd9b45791d7:0x3eaba5ee15253d9c!8m2!3d17.7464259!4d83.332103!16s%2Fg%2F11xl8zzz0_?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D", "_blank", "noopener,noreferrer");
    }
   const onhandleBookAppointment = () =>{
    window.open("https://web.whatsapp.com/", "_blank", "noopener,noreferrer");
   }
    return (
        <div>
            <div className='section'>
                {/* Working Hours Section */}
                <div
                    id='workinghours'
                    onClick={toggleWorkingHours}
                    // Apply 'expanded-up' class only if showWorkingHours is true
                    className={showWorkingHours ? 'expanded-up' : ''}
                >
                    Working Hours
                    {/* Content only renders if showWorkingHours is true */}
                    {showWorkingHours && (
                        <ol className='working-hours-list'>
                            <li id="inside_order_list">Monday-Friday :08:00 AM To 7:00 PM</li>
                            <li id="inside_order_list">Saturday-Sunday :08:00 AM To 1:00 PM</li>
                        </ol>
                    )}
                </div>

                {/* Contact Details Section */}
                <div
                    id="contactdetails"
                    onClick={toggleContactDetails}
                    // Apply 'expanded-up' class only if showContactDetails is true
                    className={showContactDetails ? 'expanded-up' : ''}
                >
                    Contact Details
                    {/* Content only renders if showContactDetails is true */}
                    {showContactDetails && (
                        <ol className='contact-details-list'>
                            <li id="inside_order_list">DNO 1-56-22/1, LIG-218, Beside Apollo Pharmacy ,Venkojipalem Rd,</li>
                            <li id="inside_order_list"> Sector 2,MVP Colony, Visakhapatnam, Andhra Pradesh 530017</li>
                            <li id="inside_order_list style={[ fontSize:25]}"onClick={showMaps} >Get directions on Map</li>
                        </ol>
                    )}
                </div>

                <div id="book_a_appointment"
                  onClick={toggleBookaAppointment}
                  className={showBookaAppointment ? 'expanded-up': ''}
                >Book an Appointment
                {showBookaAppointment && (
                    <ol className='book-a-appointment-list'>
                        <li id="inside_order_list">Speak to Our team and book a appointment</li>
                        <li id="inside_order_list style={[fontSize:25]}" onClick={onhandleBookAppointment}>Book a Appointment</li>
                    </ol>
                )}
                </div>
            </div>
            <h3 id="secondherosectionheading">What Make us Different</h3>
            <h3 id="textone">On the other hand, we denounce with righteous indignation and dislike men who are so</h3>
            <h3 id="texttwo">beguiled and demoralized by the charms of the moment.</h3>
            
            <div className='somefeatures_what_makes_us_differentcmntmain'>
                <div>
                  <img src={Herosectionmain} id="wtmksdffrnctwo"alt='sideimage'/>
                </div>
            <div>
            <div className='somefeatures_what_makes_us_differentcmnt'>
                <div>
                    < img src={affordableprices} id="affprc" alt="affordableprices"/>
                    <p>Affordable</p>
                    <p>Prices</p>
                    </div>
                     <div>
                     < img src={happycustomers} id="hpycstmrs"alt="happyclients"/>
                    <p>~50000 HAPPY</p>
                    <p>Customers</p>
                    </div>
                    <div>
                     < img src={Opened} id="opndtwfursvn" alt="staff"/>
                    <p>Opened</p>
                    <p>24*7</p>
                    </div>
                    
                </div>
                <div className='somefeatures_what_makes_us_differentcmnttwo'> 
                   <div>  
                     < img src={staff} alt="staff"/>
                    <p>Professional</p>
                    <p>Staff</p>
                    </div>
                    <div>
                     < img src={techinicans} alt="techinicans"/>
                    <p>Qualified</p>
                    <p>Technicans</p>
                    </div>
                   
                  </div> 
                </div>
                </div>
          </div>
        
    );
}

export default WhatmakeusDifferent;