import React from 'react';

const OurStory = () => {
  return (
    <section style={{ padding: '120px 0', background: '#fcfbfa', position: 'relative', overflow: 'hidden' }}>
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
              Our Story · Ancient Wisdom
            </p>
            
            <h2 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '48px',
              fontWeight: 400,
              color: 'var(--text-dark)',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              The Philosophy of Balance <em style={{ color: 'var(--primary)', fontStyle: 'italic', display: 'block' }}>Rooted in Ayurveda</em>
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
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
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

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="/our-story" className="btn-primary" style={{ padding: '14px 32px' }}>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }} />
                Learn Our Story
              </a>
              <a href="/shop" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: '"Jost", sans-serif',
                fontSize: '12.5px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)',
                textDecoration: 'none',
                padding: '14px 16px'
              }}>
                Shop Collection
                <i className="fa-solid fa-arrow-right" style={{ fontSize: '10px', color: 'var(--primary)' }} />
              </a>
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
            <div style={{
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
  );
};

export default OurStory;
