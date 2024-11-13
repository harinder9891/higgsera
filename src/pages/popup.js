import React, { useState } from 'react';

const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // If popup is not open, return null to prevent rendering
  
  return (
    <>
      {isOpen && (
        <div className="adp-popup adp-popup-open" style={{ width: '100%' }}>
          <div className="adp-popup-wrap">
            <div className="adp-popup-container">
              <div className="adp-popup-outer" style={{ maxWidth: '100%' }}>
                <div className="adp-popup-thumbnail">
                  <img
                    src="./assets/images/consultation-1.jpeg"
                    alt=""
                    className="adp-lazyload-disabled"
                  />
                </div>

                <div className="adp-popup-content">
                  <div className="adp-popup-inner">
                    <h2>Send Queries Today!</h2>
                    <form className="mc4wp-form" method="post">
                      <div className="mc4wp-form-fields">
                        <div className="main1">
                          <div className="main11">
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter Your Name:"
                              required
                            />
                          </div>
                          <div className="main11">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Phone Number:"
                              required
                            />
                          </div>
                          <div className="main11">
                            <input
                              type="phone"
                              name="phone"
                              placeholder="Enter Email Address:"
                              required
                            />
                          </div>
                          <div className="main11">
                          <select name="service" className="service-dropdown" required>
                            <option value="" disabled selected>Select a Service</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-app-development">Mobile App Development</option>
                            <option value="seo-services">SEO Services</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="graphic-design">Graphic Design</option>
                        </select>
        
                          </div>
                         <div className="main11">
                         <textarea name="additional_requirements" placeholder="Please describe your requirements in detail..." rows="4" required></textarea>

                          </div>
                          <div className="main44">
                            <input type="submit" value="Subscribe Now" />
                          </div>
                        </div>
                      </div>
                    
                    </form>
                  </div>

                  {/* Close button */}
                  <button type="button" className="adp-popup-close" onClick={onClose}>
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
