import React from 'react';

import amsterdamInstitute from '~/assets/sponsor-amsterdam-institute.svg';
import angkasaPura from '~/assets/sponsor-angkasa-pura.svg';
import fajar from '~/assets/sponsor-fajar.svg';
import indosat from '~/assets/sponsor-indosat.svg';
import kaku from '~/assets/sponsor-kaku.svg';
import kalbe from '~/assets/sponsor-kalbe.svg';
import sosro from '~/assets/sponsor-sosro.svg';
import relyte from '~/assets/sponsor-relyte.svg';
import TextTicker from '~/components/TextTicker';

import sponsorDecor from '~/assets/sponsor-decor.svg';
import compassDecor from '~/assets/sponsor-compass.png';
import Button from '~/components/Button';
import { Link } from 'react-router';
import MagneticAnim from '~/components/MagneticAnim';

function PartnerSection() {
  const partners = [
    {
      name: 'Amsterdam Institute',
      logo: amsterdamInstitute,
    },
    {
      name: 'Relyte',
      logo: relyte,
    },
    {
      name: 'Angkasa Pura',
      logo: angkasaPura,
    },
    {
      name: 'Fajar',
      logo: fajar,
    },
    {
      name: 'Indosat',
      logo: indosat,
    },
    {
      name: 'Kaku',
      logo: kaku,
    },
    {
      name: 'Kalbe',
      logo: kalbe,
    },
    {
      name: 'Sosro',
      logo: sosro,
    },
  ];

  return (
    <section
      id="partner-section"
      className="bg-violet violet-section flex flex-col items-center pb-[10rem] text-white max-md:pt-[8rem] md:pb-[11rem]"
    >
      <div className="max-width-desktop w-full">
        <div className="relative flex w-full flex-col px-4 md:px-[5rem] lg:flex-row lg:justify-between">
          <h2 className="font-dm-sans relative z-10 w-[19rem] text-[3rem] leading-[110%] font-bold md:mt-[12rem] md:w-[40rem] md:text-[5.1rem]">
            Our Sponsors & Partners
          </h2>

          <Link
            to="https://wa.me/6285756981005?text=Saya%20ingin%20menanyakan%20informasi%20terkait%20program%20sponsorship%20D'jure.%20Apakah%20Anda%20dapat%20membantu%20saya%3F"
            target="_blank"
            className="mt-8 cursor-pointer lg:mt-auto"
          >
            <MagneticAnim>
              <Button className="relative z-10">Be Our Sponsor</Button>
            </MagneticAnim>
          </Link>

          <img
            src={sponsorDecor}
            alt="Sponsor Decoration"
            className="absolute top-0 -left-16"
          />
        </div>
      </div>

      <div className="mt-[3.61rem] flex min-w-max flex-row-reverse overflow-x-clip">
        <TextTicker>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex w-max items-center border border-[rgba(255,255,255,0.3)] px-[3.45rem] py-[2.32rem] transition-colors duration-200 hover:bg-[#11A87B]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="min-w-max"
              />

              <img
                src={compassDecor}
                alt="Sponsor Decoration"
                className="absolute -top-5 -right-3 hidden h-12 w-12 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:flex"
              />
            </div>
          ))}
        </TextTicker>
      </div>

      <div className="relative flex min-w-max flex-row-reverse overflow-x-clip">
        <TextTicker direction="left">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex w-max items-center border border-[rgba(255,255,255,0.3)] px-[3.45rem] py-[2.32rem] transition-colors duration-200 hover:bg-[#11A87B]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="min-w-max"
              />

              <img
                src={compassDecor}
                alt="Sponsor Decoration"
                className="absolute -top-5 -right-3 hidden h-12 w-12 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:flex"
              />
            </div>
          ))}
        </TextTicker>

        <img
          src={compassDecor}
          alt="Sponsor Decoration"
          className="absolute right-6 -bottom-6 h-12 w-12 sm:hidden"
        />
      </div>
    </section>
  );
}

export default PartnerSection;
