import ScrollSmootherWrapper from '~/components/ScrollSmootherWrapper';
import React from 'react';

import CompetitionSection from '~/main/CompetitionSection';
import ActivityRundownSection from '~/main/ActivityRundownSection';
import LocationLayoutSection from '~/main/LocationLayoutSection';
import WinnerSection from './WinnerSection';
import PartnerSection from './PartnerSection';
import CTASection from './CTASection';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';
import Header from '~/components/Header';
import Preloader from '~/components/Preloader';

function Main() {
  return (
    <>
      <Preloader />
      <Header />
      <ScrollSmootherWrapper>
        <main className="" id="mainpage">
          <HeroSection />
          <CompetitionSection />
          <ActivityRundownSection />
          <LocationLayoutSection />
          <WinnerSection />
          <PartnerSection />
          <CTASection />
          <FooterSection />
        </main>
      </ScrollSmootherWrapper>
    </>
  );
}

export default Main;
