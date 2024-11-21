"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQPage = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 bg-gradient-to-r from-red-200 to-yellow-200">
      <div className="flex text-4xl justify-center p-4">
        <Link href="/">
          <IoHome className="hover:text-primarygold" />
        </Link>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            How do I set up a user account?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            To create an account on our website, visit and click 'Sign-up.'
            Enter your details and complete the registration.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Are Dignity Medical Training courses accredited/recognized?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            Yes, our courses are accredited and recognized due to their quality
            and relevance in the healthcare industry.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Who can I contact if I cannot log into my account?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            If you are experiencing trouble accessing your account, please reach
            out to our customer service for help.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Do you offer online classes?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            We provide self-paced CEU courses, Direct Care Worker classes with
            in-office skills/written tests online (self-paced), and blended CPR
            and First Aid courses, as well as Abuse Neglect Exploitation
            training via Zoom.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Do you offer private classes?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            Yes, we do offer private classes. Please contact customer service to
            schedule a private session.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(6)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Can you email me the certificate?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            No, all certificates are securely uploaded to your account on our
            website upon completion of the course.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(7)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Where can I find my certificate?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            Your certificate will be available for download and viewing on the
            Dignity Medical Training website, accessible from your account.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(8)} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Can I bring my member to class?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            No, only registered individuals are permitted to attend our classes.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
