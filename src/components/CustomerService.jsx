import React, { useEffect, useRef } from 'react';

const CustomerService = () => {
  const animateRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    animateRefs.current.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      animateRefs.current.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !animateRefs.current.includes(el)) {
      animateRefs.current.push(el);
    }
  };

  return (
    <section className="customer-service bg-white">
      <div className="container">
        <div className="service-row">
          
          {/* Help Column */}
          <div className="service-col service-col-md service-col-mobile">
            <div className="service-card">
              <div className="full-width animate-on-scroll" ref={addToRefs}>
                <div className="service-content">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <g clipPath="url(#clip0_276_1442)">
                        <path d="M3.97001 10H20.06C21.69 10 23.01 11.2 23.01 12.67V22.07C23.01 23.05 22.13 23.85 21.04 23.85H8.47001C7.63001 23.85 6.84001 24.17 6.28001 24.74L3.26001 27.78C2.82001 28.22 2.01001 27.94 2.01001 27.35V11.78C2.01001 10.8 2.89001 10 3.98001 10H3.97001Z" stroke="#1F1F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M2 6.99995V5.19995C2 4.23995 2.78 3.44995 3.75 3.44995H27.35C28.31 3.44995 29.1 4.22995 29.1 5.19995V18.16C29.1 19.12 28.32 19.91 27.35 19.91H26" stroke="#1F1F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M18 15H8" stroke="#1F1F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M15 19H8" stroke="#1F1F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_276_1442">
                          <rect width="32" height="32" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>Chat with one of our customer service reps</p>
                </div>
                <a href="/pages/contact" className="service-btn btn-dark btn-sweep">
                  Chat now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="service-col service-col-md service-col-mobile">
            <div className="service-card">
              <div className="full-width animate-on-scroll" ref={addToRefs}>
                <div className="service-content">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M12.52 8.01342C12.76 8.34675 12.9333 8.65341 13.0533 8.94675C13.1733 9.22675 13.24 9.50675 13.24 9.76008C13.24 10.0801 13.1467 10.4001 12.96 10.7067C12.7867 11.0134 12.5333 11.3334 12.2133 11.6534L11.2 12.7067C11.0533 12.8534 10.9867 13.0267 10.9867 13.2401C10.9867 13.3467 11 13.4401 11.0267 13.5467C11.0667 13.6534 11.1067 13.7334 11.1333 13.8134C11.3733 14.2534 11.7867 14.8267 12.3733 15.5201C12.9733 16.2134 13.6133 16.9201 14.3067 17.6267C15.0267 18.3334 15.72 18.9867 16.4267 19.5867C17.12 20.1734 17.6933 20.5734 18.1467 20.8134C18.2133 20.8401 18.2933 20.8801 18.3867 20.9201C18.4933 20.9601 18.6 20.9734 18.72 20.9734C18.9467 20.9734 19.12 20.8934 19.2667 20.7467L20.28 19.7467C20.6133 19.4134 20.9333 19.1601 21.24 19.0001C21.5467 18.8134 21.8533 18.7201 22.1867 18.7201C22.44 18.7201 22.7067 18.7734 23 18.8934C23.2933 19.0134 23.6 19.1867 23.9333 19.4134L28.3467 22.5467C28.6933 22.7867 28.9333 23.0667 29.08 23.4001C29.2133 23.7334 29.2933 24.0667 29.2933 24.4401C29.2933 24.9201 29.1867 25.4134 28.96 25.8934C28.7333 26.3734 28.44 26.8267 28.0533 27.2534C27.4 27.9734 26.68 28.4934 25.8667 28.8267C25.0667 29.1601 24.2 29.3334 23.2667 29.3334C21.9067 29.3334 20.4533 29.0134 18.92 28.3601C17.3867 27.7067 15.8533 26.8267 14.3333 25.7201C12.8 24.6001 11.3467 23.3601 9.96 21.9867C8.58667 20.6001 7.34667 19.1467 6.24 17.6267C5.14667 16.1067 4.26667 14.5867 3.62667 13.0801C2.98667 11.5601 2.66667 10.1067 2.66667 8.72008C2.66667 7.81341 2.82667 6.94675 3.14667 6.14675C3.46667 5.33341 3.97333 4.58675 4.68 3.92008C5.53333 3.08008 6.46667 2.66675 7.45333 2.66675C7.82667 2.66675 8.2 2.74675 8.53333 2.90675C8.88 3.06675 9.18667 3.30675 9.42667 3.65341" stroke="#1F1F27" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M24.6667 11.9999C24.6667 11.1999 24.04 9.97325 23.1067 8.97325C22.2533 8.05325 21.12 7.33325 20 7.33325" stroke="#1F1F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M22.68 3.05341C21.8267 2.80008 20.9333 2.66675 20 2.66675" stroke="#1F1F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M29.3333 12.0001C29.3333 8.84011 27.76 6.04011 25.36 4.36011" stroke="#1F1F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <a href="tel:18001234567" className="phone-link">Call Us - 1-800-123-4567</a>
                  <p>We're here to answer your questions</p>
                </div>
                <div className="social-section">
                  <div className="social-list">
                    <div className="social-icons">
                      <SocialIcon 
                        href="https://facebook.com/shopify" 
                        className="facebook" 
                        title="Follow on Facebook"
                        viewBox="0 0 320 512"
                        path="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                      <SocialIcon 
                        href="https://twitter.com/shopify" 
                        className="twitter" 
                        title="Follow on Twitter"
                        viewBox="0 0 512 512"
                        path="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      />
                      <SocialIcon 
                        href="https://instagram.com/shopify" 
                        className="instagram" 
                        title="Follow on Instagram"
                        viewBox="0 0 448 512"
                        path="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                      <SocialIcon 
                        href="https://www.youtube.com/shopify" 
                        className="youtube" 
                        title="Follow on YouTube"
                        viewBox="0 0 576 512"
                        path="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Locator Column */}
          <div className="service-col service-col-md service-col-mobile">
            <div className="service-card">
              <div className="full-width animate-on-scroll" ref={addToRefs}>
                <div className="service-content">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 17.9067C18.2975 17.9067 20.16 16.0442 20.16 13.7467C20.16 11.4492 18.2975 9.58667 16 9.58667C13.7025 9.58667 11.84 11.4492 11.84 13.7467C11.84 16.0442 13.7025 17.9067 16 17.9067Z" stroke="#1F1F27" strokeWidth="1.5"></path>
                      <path d="M4.82667 11.3201C7.45333 -0.226582 24.56 -0.213249 27.1733 11.3334C28.7067 18.1068 24.4933 23.8401 20.8 27.3868C18.12 29.9734 13.88 29.9734 11.1867 27.3868C7.50667 23.8401 3.29333 18.0934 4.82667 11.3201Z" stroke="#1F1F27" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <p>Explore a retail store or outlet near you.</p>
                </div>
                <a href="/pages/store-location" className="service-btn btn-dark btn-sweep">
                  Find a store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Social Icon Component for reusability
const SocialIcon = ({ href, className, title, viewBox, path }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className} title={title}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      <path d={path}></path>
    </svg>
  </a>
);

export default CustomerService;