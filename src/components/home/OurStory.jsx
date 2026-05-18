import React from 'react';

const OurStory = () => {
  return (
    <section className="founder-section">
      <div className="founder-inner">
        <div className="founder-img-wrap">
          <img src="/images/1.jfif" alt="Veda Ritual Story" className="founder-img" />
          <div className="founder-tag">
            <div className="founder-tag-name">Ananya Verma</div>
            <div className="founder-tag-role">Founder & Chief Formulator</div>
          </div>
        </div>

        <div className="founder-text">
          <p className="founder-eyebrow">
            <i className="fa-solid fa-spa" style={{ fontSize: '8px' }}></i>
            Our Story · Ancient Wisdom
          </p>
          <h2 className="founder-heading">
            The Philosophy of Balance
            <em>Rooted in Ayurveda</em>
          </h2>
          <p className="founder-para">
            Ayurveda is not just a system of medicine — it's a way of life. For
            over 5,000 years, this ancient wisdom has guided humanity toward
            true vitality by aligning our internal rhythms with the natural
            world.
          </p>
          <div className="founder-divider">
            <div className="founder-divider-line"></div>
            <i className="fa-solid fa-leaf"></i>
            <div className="founder-divider-line"></div>
          </div>
          <p className="founder-para">
            At Veda Ritual, we bridge these timeless principles with modern
            scientific extraction methods — providing high-potency botanical
            formulas that effortlessly integrate into your contemporary
            lifestyle.
          </p>
          <div className="founder-pills">
            <span className="founder-pill"><i className="fa-solid fa-seedling"></i> 100% Natural</span>
            <span className="founder-pill"><i className="fa-solid fa-shield-halved"></i> GMP Certified</span>
            <span className="founder-pill"><i className="fa-solid fa-flask-vial"></i> No Synthetics</span>
          </div>
          <div className="founder-cta-row">
            <a href="/our-story" className="founder-btn-primary">
              <i className="fa-solid fa-arrow-right" style={{ fontSize: '9px' }}></i>
              Learn Our Story
            </a>
            <a href="/shop" className="founder-btn-ghost">
              Shop Collection
              <i className="fa-solid fa-arrow-right" style={{ fontSize: '9px' }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
