import { useState } from 'react';

const Accordion = ({
  title,
  answer,
  className,
}: {
  title: string;
  answer: Array<string>;
  className?: string;
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-black-100 h-min border bg-white px-5 py-6">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between"
      >
        <h3
          className={`${
            accordionOpen && 'text-green-700'
          } font-dm-sans text-start text-[1rem] font-normal lg:text-[1.5rem]`}
        >
          {title}
        </h3>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-violet ml-8 shrink-0"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="10"
            width="24"
            height="4"
            rx="0"
            className={`origin-center transform transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
          <rect
            y="10"
            width="24"
            height="4"
            rx="0"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
      </button>
      <div
        className={`text-md grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? 'grid-rows-[1fr] pt-4 opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden max-sm:text-[0.875rem] lg:text-[1rem]">
          {answer.map((item, index) => (
            <span key={index} className="block">
              {item}
              {index < answer.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
