import React from 'react';
import iconEmail from '~/assets/footer-mail.svg';
import iconTiktok from '~/assets/footer-social-1.svg';
import iconInstagram from '~/assets/footer-social.svg';
import relyteLogo from '~/assets/footer-relyte.svg';
import { Link } from 'react-router';

function FooterSection() {
  const navFooter = [
    {
      name: 'Kategori Lomba',
      link: '#kategori-lomba',
    },
    {
      name: 'Layout kegiatan',
      link: '#layout-kegiatan',
    },
    {
      name: 'Denah Lokasi',
      link: '#denah-lokasi',
    },
    {
      name: 'D’jure Winner',
      link: '#winner-section',
    },
    {
      name: 'Sponsor & partner',
      link: '#partner-section',
    },
    {
      name: 'Klasemen',
      link: '#klasemen',
    },
  ];

  return (
    <footer
      id="footer-section"
      className="bg-violet violet-section flex flex-col border-t-[12px] border-[#9c66f5] text-white"
    >
      <div className="mt-[3rem] mb-[7.2rem] flex flex-col gap-[0.8rem] px-4 lg:mb-[5rem] lg:flex-row lg:items-end lg:justify-between lg:px-[2.5rem]">
        <p className="font-artine text-[2.75rem] leading-[100%] font-bold max-lg:text-balance max-sm:max-w-[17rem] sm:max-w-[35rem] lg:max-w-[55rem] lg:text-[5.5rem]">
          Ikuti Keseruan Kegiatan D’jure 2025!
        </p>
        <p className="font-dm-sans h-min text-sm text-[#C7B5FD] lg:pb-4 lg:text-[1.25rem]">
          Palang Merah Remaja SMP Negeri 12 Makassar
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-4">
        <div className="flex flex-col lg:col-span-3 lg:grid lg:grid-cols-2">
          {navFooter.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => {
                window.scrollSmoother?.scrollTo(item.link, true);
              }}
              className={`font-dm-sans flex justify-between border-b border-white px-4 py-3 text-[1rem] uppercase lg:py-4 ${index === 0 && 'border-t'} ${index === 1 && 'lg:border-t'}`}
            >
              <span className="font-dm-sans text-[1rem] leading-[100%] font-normal lg:text-[1.5rem]">
                {item.name}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
                className="lg:mr-32"
              >
                <path
                  d="M0.834961 1.0016L7.9996 1V7.95061"
                  stroke="white"
                  strokeWidth="0.625"
                />
              </svg>
            </Link>
          ))}
        </div>

        <div className="flex lg:flex-col lg:justify-center lg:border-y lg:border-l">
          <div className="mb-5 flex items-center justify-center gap-5 px-4 py-6 lg:mb-0 lg:gap-10">
            <Link to="mailto:hello@rccd.space" target="_blank">
              <img
                src={iconEmail}
                alt="email icon"
                className="h-[1.5rem] w-[1.9rem] lg:h-[3rem] lg:w-[3.7rem]"
              />
            </Link>
            <Link to="https://www.instagram.com/djure.2025/" target="_blank">
              <img
                src={iconInstagram}
                alt="instagram icon"
                className="h-auto w-[1.5rem] lg:w-[3rem]"
              />
            </Link>
            <Link to="https://www.tiktok.com/@rccdubels" target="_blank">
              <img
                src={iconTiktok}
                alt="tiktok icon"
                className="h-auto w-[1.5rem] lg:w-[3rem]"
              />
            </Link>
          </div>

          <Link
            to="https://wa.me/6285756981005?text=Hai%21%20Saya%20mau%20ngobrol%20soal%20D'jure%2C%20bisa%20bantu%20saya%3F"
            target="_blank"
          >
            <span className="font-artine center hidden h-[42px] text-center text-[1.5rem] font-bold lg:block lg:border-t lg:py-3">
              [ Contact Us ]
            </span>
          </Link>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2 bg-[white] px-4 py-6 lg:py-7">
        <p className="font-dm-sans text-sm font-medium text-black lg:text-2xl">
          Designed with ❤️ by
        </p>
        <Link to="https://relyte.space" target="_blank">
          <img
            src={relyteLogo}
            alt="relyte logo"
            className="w-[6.2rem] lg:w-[8.75rem]"
          />
        </Link>
      </div>
    </footer>
  );
}

export default FooterSection;
