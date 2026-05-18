import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const swiperRef = useRef(null);

  const slidesData = [
    {
      id: 1,
      bgLetter: "VE",
      eyebrow: "Ancient Wisdom • Modern Form",
      eyebrowIcon: "fa-spa",
      title: ["Vata Balancing", "Ritual"],
      desc: "Warm, grounding botanicals to soothe the nervous system. Crafted for the contemporary seeker who bridges soulful tradition with daily intention.",
      counter: "01 / 03",
      img: "/images/1.jfif"
    },
    {
      id: 2,
      bgLetter: "VE",
      eyebrow: "Nature's Intelligence • Refined",
      eyebrowIcon: "fa-fire-flame-curved",
      title: ["Pitta Cooling", "Ritual"],
      desc: "Cool, clarifying botanicals to calm inflammation and illuminate the mind. A meditation in botanicals that reawakens your truest clarity.",
      counter: "02 / 03",
      img: "/images/5.jfif"
    },
    {
      id: 3,
      bgLetter: "VE",
      eyebrow: "Sacred Botany • Daily Ritual",
      eyebrowIcon: "fa-sun",
      title: ["Kapha Awakening", "Ritual"],
      desc: "Invigorating, uplifting oils to awaken the senses and restore vital energy. Bring lightness and a luminous glow to your morning ritual.",
      counter: "03 / 03",
      img: "/images/homebanner3.jfif"
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={900}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="swiper-hero"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive, isNext, isPrev }) => (
                <div className={`slide-flex ${isActive ? 'txt-entering' : ''} ${(isNext || isPrev) ? 'txt-exiting' : ''}`}>
                  <div className="slide-text-col">
                    <span className="slide-bg-letter">{slide.bgLetter}</span>
                    <p className="txt-el txt-el-1 slide-eyebrow">
                      <i className={`fa-solid ${slide.eyebrowIcon} slide-eyebrow-icon`}></i>
                      {slide.eyebrow}
                    </p>
                    <h1 className="txt-el txt-el-2 slide-heading">
                      <span className="heading-gradient">{slide.title[0]}</span><br />
                      <span className="heading-gradient">{slide.title[1]}</span>
                    </h1>
                    <p className="txt-el txt-el-3 slide-desc">{slide.desc}</p>
                    <div className="txt-el txt-el-4 slide-btns">
                      <a href="#" className="btn-primary"><i className="fa-solid fa-arrow-right btn-icon"></i> Explore Collection</a>
                      <a href="#" className="btn-secondary">The Story</a>
                    </div>
                    <div className="txt-el txt-el-5 slide-counter">
                      <span className="counter-line"></span>
                      <span className="counter-text">{slide.counter}</span>
                    </div>
                  </div>
                  <div className="img-col">
                    <div className="hero-img-wrap">
                      <img src={slide.img} alt={slide.title.join(' ')} className="hero-img" />
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="arrow-nav">
          <button className="btn-prev" onClick={() => swiperRef.current?.slidePrev()}>
            <i className="fa-solid fa-chevron-up"></i>
          </button>
          <button className="btn-next" onClick={() => swiperRef.current?.slideNext()}>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div className="trust-bar-wrap">
        <div className="trust-bar">
          <div className="trust-item trust-item-border-r">
            <div className="trust-icon-wrap"><i className="fa-solid fa-seedling trust-icon"></i></div>
            <div>
              <p className="trust-title">100% Natural</p>
              <p className="trust-desc">Sourced directly from earth's bounty.</p>
            </div>
          </div>
          <div className="trust-item trust-item-border-r">
            <div className="trust-icon-wrap"><i className="fa-solid fa-shield-halved trust-icon"></i></div>
            <div>
              <p className="trust-title">GMP Certified</p>
              <p className="trust-desc">Highest global safety standards.</p>
            </div>
          </div>
          <div className="trust-item trust-item-border-r">
            <div className="trust-icon-wrap"><i className="fa-solid fa-flask-vial trust-icon"></i></div>
            <div>
              <p className="trust-title">No Chemicals</p>
              <p className="trust-desc">Pure botanicals, nothing artificial.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-wrap"><i className="fa-solid fa-users trust-icon"></i></div>
            <div>
              <p className="trust-title">Thousands Trust</p>
              <p className="trust-desc">Join our community of wellness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
