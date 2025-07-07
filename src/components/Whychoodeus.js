import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For icons

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: 'bi bi-shield-check',
      title: 'Accurate Results',
      description: 'State-of-the-art equipment ensures highly accurate and reliable test results.'
    },
    {
      icon: 'bi bi-clock-history',
      title: 'Timely Reports',
      description: 'Fast turnaround times for all diagnostic services, often within 24 hours.'
    },
    {
      icon: 'bi bi-person-check',
      title: 'Qualified Experts',
      description: 'Our lab is staffed by experienced and certified medical professionals.'
    },
    {
      icon: 'bi bi-house-door',
      title: 'Home Sample Collection',
      description: 'Convenient home sample collection available at your doorstep.'
    }
  ];

  return (
    <section className="py-5 bg-light" id="why-choose-us">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose HealthKure Diagnostics?</h2>
          <p className="text-muted">Trusted diagnostics with a commitment to quality care</p>
        </div>
        <div className="row">
          {reasons.map((item, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <i className={`${item.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="card-title fw-semibold">{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;