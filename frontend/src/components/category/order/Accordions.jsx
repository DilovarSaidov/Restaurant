import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Accordions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
        <AccordionHeader className="bg-green-400 px-4  rounded-xl text-white" onClick={() => handleOpen(1)}>
          У наших курьеров всегда должна быть сдача!
        </AccordionHeader>
        <AccordionBody className="bg-gray-600 px-4 rounded-b-xl text-white">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="bg-green-400 px-4 mt-2 rounded-xl text-white" onClick={() => handleOpen(2)}>
          Вам что-то не довезли?
        </AccordionHeader>
        <AccordionBody className="bg-gray-600 px-4  rounded-b-xl text-white">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="bg-green-400 px-4 mt-2 rounded-xl text-white" onClick={() => handleOpen(3)}>
          Не понравился продукт?
        </AccordionHeader>
        <AccordionBody className="bg-gray-600 px-4  rounded-b-xl text-white">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="bg-green-400 px-4 mt-2 rounded-xl text-white" onClick={() => handleOpen(4)}>
          Если появились замечания
        </AccordionHeader>
        <AccordionBody className="bg-gray-600 px-4  rounded-b-xl text-white">
          Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className="bg-green-400 px-4 mt-2 rounded-xl text-white" onClick={() => handleOpen(5)}>
          Оплата Visa, MasterCard и МИР
        </AccordionHeader>
        <AccordionBody className="bg-gray-600 px-4  rounded-b-xl text-white">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader className="bg-green-400 px-4 mt-2 rounded-xl text-white" onClick={() => handleOpen(6)}>
          Реквизиты
        </AccordionHeader>
        <AccordionBody className="bg-gray-600 px-4  rounded-b-xl text-white">
          We&apos;re not always in theposition that we want to be at.
          We're constantly growing. We're constantly making mistakes.
          We're constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}