import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div style={{ background: '#fcfbfa', minHeight: '100vh' }}>
      
      {/* ── Page Header / Hero Section (Standardized) ── */}
      <section className="shop-hero">
        {/* Decorative floating orbs */}
        <div className="shop-hero-orb shop-hero-orb-1" />
        <div className="shop-hero-orb shop-hero-orb-2" />
        
        <div className="section-container shop-hero-inner">
          {/* Breadcrumb */}
          <div className="shop-hero-breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Our Story</span>
          </div>

          {/* Eyebrow */}
          <p className="shop-hero-eyebrow">
            <i className="fa-solid fa-seedling" />
            Heritage · Philosophy
          </p>

          {/* Heading */}
          <h1 className="shop-hero-title">
            Our <em>Story</em>
          </h1>

          {/* Subtitle */}
          <p className="shop-hero-subtitle">
            A harmonious fusion of 5,000-year-old Ayurvedic wisdom and modern botanical science.
          </p>
        </div>
      </section>

      {/* ── Modern Split Layout Section (New Look) ── */}
      <section style={{ padding: '100px 0', background: '#fcfbfa', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient background glow */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(226, 213, 195, 0.3)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 }} />
        
        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}>
            
            {/* Left Content */}
            <div>
              <p style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--bloom-pale)',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <i className="fa-solid fa-spa" style={{ fontSize: '9px' }} />
                The Philosophy of Balance
              </p>
              
              <h2 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '48px',
                fontWeight: 400,
                color: 'var(--text-dark)',
                marginBottom: '24px',
                lineHeight: '1.2'
              }}>
                Rooted in <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Ayurveda</em>
              </h2>
              
              <div style={{ width: '60px', height: '1.5px', background: 'var(--primary)', marginBottom: '32px' }} />
              
              <p style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '15px',
                lineHeight: '1.8',
                color: 'var(--text-mid)',
                marginBottom: '24px'
              }}>
                Ayurveda is not just a system of medicine — it's a way of life. For over 5,000 years, this ancient wisdom has guided humanity toward true vitality by aligning our internal rhythms with the natural world.
              </p>
              <p style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '15px',
                lineHeight: '1.8',
                color: 'var(--text-mid)',
                marginBottom: '40px'
              }}>
                At Veda Ritual, we bridge these timeless principles with modern scientific extraction methods — providing high-potency botanical formulas that effortlessly integrate into your contemporary lifestyle.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ padding: '8px 16px', background: 'rgba(1, 114, 110, 0.05)', borderRadius: '50px', fontSize: '12px', fontWeight: 500, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-seedling" /> 100% Natural
                </span>
                <span style={{ padding: '8px 16px', background: 'rgba(1, 114, 110, 0.05)', borderRadius: '50px', fontSize: '12px', fontWeight: 500, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-shield-halved" /> GMP Certified
                </span>
                <span style={{ padding: '8px 16px', background: 'rgba(1, 114, 110, 0.05)', borderRadius: '50px', fontSize: '12px', fontWeight: 500, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-flask-vial" /> No Synthetics
                </span>
              </div>
            </div>

            {/* Right Image Feature */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '100%',
                height: '100%',
                border: '1px solid rgba(1, 114, 110, 0.2)',
                borderRadius: '24px',
                zIndex: 0
              }} />
              <img 
                src="/images/1.jfif" 
                alt="Founder Story" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 24px 48px rgba(0,0,0,0.1)'
                }}
              />
              {/* Founder Tag floating */}
              <div className="founder-tag-mobile" style={{
                position: 'absolute',
                bottom: '30px',
                right: '-30px',
                background: '#ffffff',
                padding: '20px 32px',
                borderRadius: '12px',
                boxShadow: '0 12px 36px rgba(0,0,0,0.1)',
                zIndex: 3
              }}>
                <div style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginBottom: '4px'
                }}>Ananya Verma</div>
                <div style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)'
                }}>Founder & Chief Formulator</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom Section: Modern Apothecary Vision ── */}
      <section className="shop-connect-section" style={{ margin: '0' }}>
         <div className="shop-connect-gradient-overlay" />
         <div className="shop-connect-grid">
           <div className="shop-connect-img-col">
             <img src="/images/homebanner3.jfif" alt="Ayurvedic Ritual Essentials" className="shop-connect-img" />
             <div className="shop-connect-img-overlay" />
           </div>
           <div className="shop-connect-content-col">
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '280px', height: '280px', background: 'rgba(226, 213, 195, 0.05)', filter: 'blur(70px)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />
             <div style={{ position: 'relative', zIndex: 3 }}>
               <p className="shop-connect-eyebrow">
                 <i className="fa-solid fa-leaf" />
                 Our Vision
               </p>
               <h2 className="shop-connect-title">A Modern Apothecary</h2>
               <div style={{ width: '60px', height: '1.5px', background: 'linear-gradient(90deg, var(--bloom-pale) 0%, rgba(226, 213, 195, 0.1) 100%)', margin: '14px 0 22px' }} />
               <p className="shop-connect-desc">We exist to inspire moments of grounding in a fast-paced world, offering botanical solutions that restore your natural radiance from the inside out.</p>
               <Link to="/shop" className="btn-primary w-fit" style={{ background: 'var(--bloom-pale)', color: 'var(--primary)', border: 'none', boxShadow: '0 8px 24px rgba(1, 114, 110, 0.2)', position: 'relative', zIndex: 4 }}>
                 <i className="fa-solid fa-bag-shopping mr-2" />
                 Explore Rituals
               </Link>
             </div>
           </div>
         </div>
      </section>

    </div>
  );
};

export default OurStory;
