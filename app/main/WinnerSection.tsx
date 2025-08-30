import principleStar from '~/assets/principle-star.svg';
import TextTicker from '~/components/TextTicker';
import winnerMedal from '~/assets/winner-medal.svg';
import DashedLine from '~/components/DashedLine';

import winner2016 from '~/assets/winner-16.png';
import winner16Decor from '~/assets/winner-16-decor.svg';

import winner2018 from '~/assets/winner-18.png';
import winner18Decor from '~/assets/winner-18-decor.svg';

import winner2022 from '~/assets/winner-22.png';
import winner22Decor from '~/assets/winner-22-decor.svg';

import winnerCurrent from '~/assets/winner-current.png';
import winnerCurrentDecor from '~/assets/winner-current-decor.svg';

function WinnerSection() {
  const redCrossFundamentalPrinciples = [
    'Humanity',
    'Impartiality',
    'Neutrality',
    'Independence',
    'Voluntary Service',
    'Unity',
    'Universality',
  ];

  const theWinners = [
    {
      year: 2016,
      winner: 'SMP 25 Makassar',
      img: winner2016,
      imgClass: 'rotate-[8.5deg]',
      imgDecor: winner16Decor,
      imgDecorClass:
        'absolute top-5 -right-5 z-10 max-lg:w-12 h-auto lg:-top-4 lg:-right-20',
      textColor:
        'text-orange lg:text-violet lg:group-hover:text-orange lg:group-hover:[text-shadow:-0px_-0px_0_#2E1E5F,0px_-0px_0_#2E1E5F,-0px_0px_0_#2E1E5F,0px_0px_0_#2E1E5F]',
      bgColor: 'bg-orange lg:group-hover:bg-orange lg:group-hover:opacity-100',
    },
    {
      year: 2018,
      winner: 'SMP 25 Makassar',
      img: winner2018,
      imgClass: '-rotate-[14deg]',
      imgDecor: winner18Decor,
      imgDecorClass:
        'absolute top-0 right-1 rotate-[-23deg] z-10 max-lg:w-[2.6rem] h-auto lg:-top-7 lg:right-1',
      textColor:
        'text-green lg:text-violet lg:group-hover:text-green lg:group-hover:[text-shadow:-0px_-0px_0_#2E1E5F,0px_-0px_0_#2E1E5F,-0px_0px_0_#2E1E5F,0px_0px_0_#2E1E5F]',
      bgColor: 'bg-green lg:group-hover:bg-green lg:group-hover:opacity-100',
    },
    {
      year: 2022,
      winner: 'SMP 25 Makassar',
      img: winner2022,
      imgClass: 'rotate-[8.5deg]',
      imgDecor: winner22Decor,
      imgDecorClass:
        'absolute top-12 -left-9 z-10 rotate-[10deg] max-lg:w-[5.2rem] h-auto lg:top-12 lg:-left-20',
      textColor:
        'text-[#9C66F5] lg:text-violet lg:group-hover:text-[#9C66F5] lg:group-hover:[text-shadow:-0px_-0px_0_#2E1E5F,0px_-0px_0_#2E1E5F,-0px_0px_0_#2E1E5F,0px_0px_0_#2E1E5F]',
      bgColor:
        'bg-[#9C66F5] lg:group-hover:bg-[#9C66F5] lg:group-hover:opacity-100',
    },
    {
      year: 2025,
      winner: 'Are you the next winner?',
      img: winnerCurrent,
      imgClass: '-rotate-[14deg]',
      imgDecor: winnerCurrentDecor,
      imgDecorClass:
        'absolute top-8 -right-4  z-10 rotate-[19deg] max-lg:w-[3.4rem] h-auto lg:top-8 lg:-right-8',
      textColor:
        'text-orange lg:text-violet lg:group-hover:text-orange lg:group-hover:[text-shadow:-0px_-0px_0_#2E1E5F,0px_-0px_0_#2E1E5F,-0px_0px_0_#2E1E5F,0px_0px_0_#2E1E5F]',
      bgColor: 'bg-orange lg:group-hover:bg-orange lg:group-hover:opacity-100',
    },
  ];

  return (
    <section
      className="bg-violet violet-section flex min-h-screen flex-col items-center"
      id="winner-section"
    >
      <TextTicker speed={0.3}>
        <div className="mt-4 flex">
          {redCrossFundamentalPrinciples.map((principle, index) => (
            <span key={index} className="ml-7 flex h-fit items-baseline gap-7">
              <span className="font-artine text-[7.15rem] leading-none font-bold text-white uppercase">
                {principle}
              </span>

              <div className="h-max w-max bg-white">
                <img
                  src={principleStar}
                  alt="principle star"
                  className="h-[5rem] w-[5rem]"
                />
              </div>
            </span>
          ))}
        </div>
      </TextTicker>

      <div className="w-full max-w-[1400px] px-4 pt-4 pb-[8rem] text-white md:px-12 md:pt-[6.25rem]">
        <h2 className="font-artine relative top-8 text-[1rem] font-bold md:top-0 md:text-[2.7rem]">
          Our Winner
        </h2>

        <ul className="flex flex-col gap-6">
          {theWinners.map((winner, index) => (
            <li
              key={index}
              className={`group relative flex cursor-pointer items-end gap-5 overflow-y-clip border-b md:gap-20 lg:-mt-28 ${index % 2 !== 0 && 'flex-row-reverse'}`}
            >
              <div className="flex flex-col pb-2 md:pb-5">
                <div
                  className={`flex items-center gap-2 md:gap-[6.3rem] ${index % 2 !== 0 && 'flex-row-reverse'}`}
                >
                  <div className="flex flex-col">
                    <p
                      className={[
                        'font-hanson',
                        'text-[2.5rem]',
                        'leading-[110%]',
                        'transition-colors',
                        'duration-300',
                        'lg:[text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff]',
                        'md:text-[7.5rem]',
                        winner.textColor,
                      ].join(' ')}
                    >
                      {winner.year}
                    </p>

                    <div className="flex items-center gap-1">
                      <img
                        src={winnerMedal}
                        alt="Winner Medal"
                        className="md:h-[1.25rem] md:w-[1.25rem]"
                      />

                      <p className="font-dm-sans text-[0.75rem] leading-[100%] text-[#C7B5FD] md:text-[1.5rem]">
                        {winner.winner}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`h-[0.0625rem] w-[1.25rem] md:w-[10.5rem] lg:bg-white lg:opacity-30 ${winner.bgColor}`}
                  />
                </div>
              </div>

              <div className="relative transition-transform duration-300 ease-in-out md:max-lg:hidden lg:translate-y-[7rem] lg:scale-[90%] lg:group-hover:translate-y-6">
                <img
                  src={winner.img}
                  alt={`Winner ${winner.year} image`}
                  className={`relative top-7 w-[12.5rem] transition-colors duration-300 ease-in-out md:w-max lg:grayscale-[95%] lg:group-hover:grayscale-0 ${winner.imgClass}`}
                />

                <img
                  src={winner.imgDecor}
                  alt={`Winner decoration`}
                  className={`${winner.imgDecorClass}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <DashedLine color="#fff" gap={30} dash={30} />
    </section>
  );
}

export default WinnerSection;
