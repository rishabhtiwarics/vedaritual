import React from 'react';

const categories = [
  {
    id: 1,
    title: "Botanical Drops",
    desc: "High-potency liquid extracts for immediate absorption",
    img: "/images/2.jfif",
    link: "#",
    btnText: "SHOP DROPS"
  },
  {
    id: 2,
    title: "Capsules",
    img: "/images/7.jfif",
    link: "#",
    btnText: "VIEW RITUALS"
  },
  {
    id: 3,
    title: "Juices",
    img: "/images/9.jfif",
    link: "#",
    btnText: "EXPLORE"
  }
];

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">
            <i className="fa-solid fa-leaf section-eyebrow-icon"></i>Curated Collections <span className="eyebrow-dot">·</span> Sacred Botany
          </p>
          <h2 className="section-title">Choose Your Path to Balance</h2>
          <p className="section-desc">
            Explore our three ritual families, each one a doorway into deeper balance. Find the path your body has been calling for.
          </p>
        </div>
        <div className="cat-grid-wrapper">
          {/* Main Card */}
          <a href={categories[0].link} className="cat-card">
            <img src={categories[0].img} alt={categories[0].title} />
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <h3 className="cat-card-title">{categories[0].title}</h3>
              <p className="cat-card-desc">{categories[0].desc}</p>
              <span className="cat-card-link">{categories[0].btnText} <i className="fa-solid fa-arrow-right"></i></span>
            </div>
          </a>

          {/* Right Column */}
          <div className="cat-right-col">
            {categories.slice(1).map(cat => (
              <a key={cat.id} href={cat.link} className="cat-card">
                <img src={cat.img} alt={cat.title} />
                <div className="cat-card-overlay"></div>
                <div className="cat-card-content">
                  <h3 className="cat-card-title">{cat.title}</h3>
                  <span className="cat-card-link">{cat.btnText} <i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
