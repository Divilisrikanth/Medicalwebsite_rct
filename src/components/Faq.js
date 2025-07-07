// FAQ.js
import React, { useState } from 'react';
import ExpandableSection from './ExpandableSection.js'; 

const FAQ = () => {

  const [openSectionId, setOpenSectionId] = useState(null);


  const handleToggle = (sectionId) => {
   
    setOpenSectionId(openSectionId === sectionId ? null : sectionId);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>Frequently Asked Questions</h2>
      <hr style={{ borderColor: '#eee', marginBottom: '25px' }} />

      <ExpandableSection
        title="1) How to Book a test"
        isOpen={openSectionId === 'section-1'} 
        onToggle={() => handleToggle('section-1')} 
      >
        <p>1. Login or Sign up by clicking on the ‘Login’ option or ‘My Account’ option on the main menu or the footer.</p>
        <p>2. After Login, select one or multiple tests as below:</p>
        <p>a) Click on Tests &gt; Pathology &gt; Select a test &gt; Click on the BOOK NOW button.</p>
        <p>b) Click on Home Sample &gt; Select Test &gt; Click on the BOOK NOW button.</p>
        <p>c) For Packages – Click on Packages &gt; Click on Comprehensive Packages &gt; Select a Package Click on the BOOK NOW button.</p>
        <p>d) For Profiles – Click on Packages &gt; Click on Profiles &gt; Select a Profile &gt; Click on the BOOK NOW button.</p>
        <p>3. After adding the tests to the cart, proceed to checkout, select “Booking Type” (if available) and fill in all the required details.</p>
        <p>4. Accept the T&C and click on the “Confirm Booking” button to proceed with payment.</p>
        <p>5. A popup with payment options will be shown, where you can select the desired payment method.</p>
        <p>6. If the transaction is successful, you will be receiving a Receipt ID to mail and SMS shortly (within minutes).</p>
      </ExpandableSection>

      <ExpandableSection
        title="2) How to view reports online?"
        isOpen={openSectionId === 'section-2'}
        onToggle={() => handleToggle('section-2')}
      >
        <p>1. Login to your account on our website.</p>
        <p>2. Navigate to the "My Reports" or "Order History" section.</p>
        <p>3. Click on the relevant test to view or download your report.</p>
        <p>4. You may need to verify your identity with a one-time password (OTP).</p>
      </ExpandableSection>

      <ExpandableSection
        title="3) What are the available payment options?"
        isOpen={openSectionId === 'section-3'}
        onToggle={() => handleToggle('section-3')}
      >
        <p>We accept various payment methods, including:</p>
        <ul>
          <li>Credit/Debit Cards (Visa, MasterCard, Rupay)</li>
          <li>Net Banking</li>
          <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
          <li>Digital Wallets</li>
        </ul>
        <p>Cash on delivery might be available for home sample collections in select areas.</p>
      </ExpandableSection>

      <ExpandableSection
        title="4) Can I reschedule my appointment?"
        isOpen={openSectionId === 'section-4'}
        onToggle={() => handleToggle('section-4')}
      >
        <p>Yes, you can reschedule your appointment. Please follow these steps:</p>
        <p>1. Log in to your account.</p>
        <p>2. Go to "My Bookings" or "Appointments".</p>
        <p>3. Select the booking you wish to modify.</p>
        <p>4. Click on the "Reschedule" option and choose a new date and time.</p>
        <p>Alternatively, you can contact our customer support for assistance.</p>
      </ExpandableSection>

      <ExpandableSection
        title="5) What should I do if I didn't receive a confirmation?"
        isOpen={openSectionId === 'section-5'}
        onToggle={() => handleToggle('section-5')}
      >
        <p>If you haven't received a confirmation email or SMS within a few minutes of booking, please:</p>
        <p>1. Check your spam or junk folder.</p>
        <p>2. Verify the email address and phone number provided during booking.</p>
        <p>3. Contact our customer support team with your transaction details, and we'll assist you promptly.</p>
      </ExpandableSection>

    </div>
  );
};

export default FAQ;