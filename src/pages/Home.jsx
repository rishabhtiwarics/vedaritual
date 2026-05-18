import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import OurStory from '../components/home/OurStory';
import RitualSection from '../components/home/RitualSection';
import FullVedaEdit from '../components/home/FullVedaEdit';
import CommunitySection from '../components/home/CommunitySection';

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <OurStory />
      <RitualSection />
      <FullVedaEdit />
      <CommunitySection />
    </>
  );
}

export default Home;
