import React from 'react';
import Accordion from '~/components/Accordion';
import { Link } from 'react-router';

import underline from '~/assets/underline-font-orange.svg';
import folderDownload from '~/assets/folder-download.svg';
import DashedLine from '~/components/DashedLine';

function ActivityRundownSection() {
  const kegiatan = [
    {
      date: 'Rabu, 3 September 2025',
      description: [
        'Preparing: 15.30 - 16.00',
        'Konfirmasi Kehadiran: 16.00 - 17.00',
        'Pemasangan Tenda: 17.00',
      ],
    },
    {
      date: 'Kamis, 4 September 2025',
      description: [
        'Check In & Registrasi: 10.00 - 14.00',
        'Technical Meeting: 14.00 - 15.30',
        'Persiapan dan Gladi Opening Ceremony: 15.30 - 17.00',
        'Opening Ceremony: 19.00 - 21.30',
        'Penyeragaman Materi First Aid: 21.30 - 23.00',
      ],
    },
    {
      date: 'Jumat, 5 September 2025',
      description: [
        'Arena Aqua Champion dan Forum Brief: 08.00 - 11.00',
        'Tes Tertulis First Aid (Wira & Madya): 08.00 - 11.00',
        "Penyisihan D'JURE Arena (Wira & Madya): 08.00 - 11.00",
        'ISHOMA: 11.00 - 13.30',
        'Praktek First Aid Madya: 13.30 - 15.30',
        'Penyisihan Emergency Stretcher (Wira & Madya): 13.30 - 15.30',
        'ISHOMA: 15.30 - 16.30',
        'Praktek First Aid Madya: 16.30 - 18.30',
        'Semifinal Emergency Stretcher (Wira & Madya): 16.30 - 18.30',
        'ISHOMA: 18.30 - 19.30',
        'Praktek First Aid Madya dan Forum Brief: 19.30 - 22.30',
        'Final Emergency Stretcher (Wira & Madya) dan Forum Brief: 19.30 - 22.30',
        'Forum Brief dan Announcement Camp Arena Showdown: 19.30 - 22.30',
      ],
    },
    {
      date: 'Sabtu, 6 September 2025',
      description: [
        "D'JURE Culinary Competition: 08.30 - 12.00",
        'Praktek First Aid Wira: 08.30 - 12.00',
        "Semi Final D'JURE Arena Madya: 08.30 - 12.00",
        'ISHOMA: 12.00 - 13.30',
        "Forum Brief D'JURE Culinary Competition: 13.30 - 15.30",
        'Praktek First Aid Wira: 13.30 - 15.30',
        "Semi Final D'JURE Arena Wira: 13.30 - 15.30",
        'ISHOMA: 15.30 - 16.30',
        'Praktek First Aid Wira: 16.30 - 18.20',
        'ISHOMA: 18.20 - 19.30',
        'Forum Brief First Aid Wira: 19.30 - 21.30',
        "FInal D'JURE Arena (Wira & Madya) dan Forum Brief: 19.30 - 21.30",
        'Forum Brief dan Announcement Camp Arena Showdown: 19.30 - 21.30',
      ],
    },
    {
      date: 'Minggu, 7 September 2025',
      description: [
        'Preparing: 06.00 - 10.00',
        'Closing Ceremony: 10.00 - 12.30',
        'Check Out: 12.30',
      ],
    },
  ];

  return (
    <section
      className="activity-rundown bg-bg-white h-max"
      id="layout-kegiatan"
    >
      <div className="flex max-w-[2400px] flex-col gap-12 px-4 pt-[7rem] pb-[5rem] sm:flex-row sm:justify-between lg:px-[3.3rem] lg:pt-[9rem] lg:pb-[8.5rem] xl:gap-[5rem]">
        <h2 className="relative z-10 flex flex-col">
          <div className="font-artine text-5xl font-bold lg:text-[5.5rem]">
            Layout
          </div>

          <div className="relative w-fit">
            <div className="font-roman text-[3.25rem] leading-8 font-normal italic lg:text-[6rem]">
              kegiatan
            </div>
            <img
              src={underline}
              alt="underline decoration"
              className="relative bottom-2 -left-1 -z-10 w-[12.5rem] lg:bottom-0 lg:w-[21rem]"
            />
          </div>
        </h2>

        <div className="w-full max-w-[51rem]">
          {kegiatan.map((item, index) => (
            <Accordion
              key={index}
              title={item.date}
              answer={item.description}
            />
          ))}

          <button className="border-violet bg-violet flex h-min w-full items-center gap-3 border px-5 py-6 text-white lg:text-[1.5rem]">
            <span>
              <img
                src={folderDownload}
                alt="folder download icon"
                className="w-[1.7rem] lg:w-[2.25rem]"
              />
            </span>

            <Link
              to="https://drive.google.com/drive/folders/1OGPsyWguVvzMSF0zhkwNKBkrQ_TKDjwc?usp=sharing"
              target="_blank"
            >
              <span>Download Full PDF</span>
            </Link>
          </button>
        </div>
      </div>

      <DashedLine color="hsla(0, 0%, 0%, 1)" gap={30} dash={30} />
    </section>
  );
}

export default ActivityRundownSection;
