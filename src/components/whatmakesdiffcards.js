import React from "react";
import { useState } from 'react';
const Whatmakesdiffcards =() =>{
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
    return(
      <div className="whatmakesdifferentsectioncardsContainer">
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
        <div className="boxes-container-one">
             <div >clinical Bio chemistry</div>
             <div>Hematology</div>
             <div>Molecular Biology</div>
             <div>Histiopathology</div>
        </div>
        <div className="boxes-container-two">
            <div>Microbiology</div>
            <div>Serology</div>
            <div>Cytogenetics</div>
        </div>
      </div>
    )
}
export default Whatmakesdiffcards;