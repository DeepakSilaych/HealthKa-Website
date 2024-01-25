import React from 'react';

const FAQ = () => {
  
  return (
    <section id="faq" className="faq" data-aos="fade-up">
      <div className="container">
        <header className="section-header">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            {/* F.A.Q List 1 */}
            <div className="accordion accordion-flush" id="faqlist1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                  How do I request an ambulance through your app?
                  </button>
                </h2>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                    Requesting an ambulance is simple. Just open our app, provide your location and brief medical details, and our system will match you with the nearest available ambulance. You can track the ambulance's arrival in real time through the app.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                  How does the medicine delivery process work on your app?
                  </button>
                </h2>
                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                  Ordering medicine through our app is convenient. Browse our selection, add the items to your cart, and proceed to checkout. Once your order is confirmed, our team will swiftly prepare your order and a delivery partner will bring it to your location.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                  Is the app available for both Android and iOS?
                  </button>
                </h2>
                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                  Yes, our app is available for download on both the Google Play Store (for Android) and the Apple App Store (for iOS). You can easily install it on your smartphone and start using our services.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* F.A.Q List 2 */}
            <div className="accordion accordion-flush" id="faqlist2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                  Can I store my prescription on the app for easy medicine ordering?
                  </button>
                </h2>
                <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                    Absolutely. Our app features a secure patient portal where you can upload and store your medical prescriptions. This makes it effortless to reorder your medications, ensuring accuracy and convenience.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                  How do I pay for the ambulance service and medicines?
                  </button>
                </h2>
                <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                  We offer multiple secure payment options within the app, including credit/debit cards and digital wallets. Your payment information is protected using industry-standard encryption to ensure your financial security.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                  What if I have an urgent medical situation and slow internet connectivity?
                  </button>
                </h2>
                <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                  We understand the importance of quick responses in emergencies. Our app is designed to work efficiently even with slow internet connections, ensuring that you can access our services promptly when you need them most.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
