"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Header from "@/components/client/common/Header";
import Footer from "@/components/client/common/Footer";

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

const TermsAndConditions = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Header />
      <div className="bg-goldlight min-h-screen py-10 px-5 ">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
          {/* <div className="flex justify-center mb-6">
            <Link href="/">
              <IoHome className="text-blue-600 text-4xl hover:text-blue-800" />
            </Link>
          </div> */}
          <h1 className="text-4xl font-bold mb-6 text-center text-goldlight">
            Terms and Conditions
          </h1>

          {/* Accordion Sections */}
          {[
            {
              title: "Welcome to Dignity Medical Training",
              body: `Welcome to Dignity Medical Training. This website is operated by Dignity Medical Training - that company that we refer to when speaking about us! By using this site and the tools, information, or services it offers, you agree to be bound by these Terms of Service ("Terms"). These conditions apply regardless of whether someone is just browsing or making purchases from this site.`,
            },
            {
              title: "Section 1: Online Store Terms",
              body: `By using our services and website, you verify that you have attained the legal age of majority in your state or province and assume responsibility for any minor who depends on you. You agree not to use our products in any manner that violates any applicable law or is otherwise illegal or improper, including illegal or unlawful practices. If you breach these Terms, we reserve the right to immediately terminate your service.`,
            },
            {
              title: "Section 2: General Conditions",
              body: `At any time and for any reason, we reserve the right to refuse service. Content can be safely transmitted across various networks without encryption; only credit card details will remain secure during transmission. You agree not to copy, sell, or exploit any part of our Service without written authorization from us.`,
            },
            {
              title:
                "Section 3: Accuracy, Completeness, and Timing of Information",
              body: `While we make every attempt to present information that is both reliable and timely on this site, no guarantees can be provided as to its completeness or accuracy. Please exercise caution when basing any decisions solely on information found here. This website may change at any time without prior notification or obligation, with or without our knowledge and consent.`,
            },
            {
              title: "Section 4: Changes in Service and Price",
              body: `Prices of our products may change at any time and without prior notification; furthermore, we reserve the right to discontinue or modify our Service at any point without giving prior warning. Price changes or service discontinuation won't affect us in any way.`,
            },
            {
              title: "Section 5: Accuracy in Billing and Account Information",
              body: `We reserve the right to reject or limit orders placed by resellers, dealers, or distributors. In these instances, orders may be canceled immediately. All transactions completed on our site require you to provide accurate, current and complete information regarding your account and purchase. Please update all contact information (email, physical addresses etc) as well as payment details regularly.`,
            },
            {
              title: "Section 6: Optional Tools",
              body: `You may gain access to tools from third parties we don't control. By accepting that these tools are provided "as-is and "as available" without warranty and that their use falls solely within your discretion and risk, Future services or features we may add through our website will also fall under these Terms of Service.`,
            },
            {
              title: "Section 7: Third-Party Links",
              body: `Links to websites unaffiliated with us may appear on our site, although these third-party websites are outside our sphere of influence and we do not support their content. No liability can be accepted for harm caused by visiting websites owned by third parties. Please read and comply with the terms and conditions of any site you visit before accessing it.`,
            },
            {
              title:
                "Section 8: User Comments, Feedback, and Other Submissions",
              body: `Your feedback, ideas, or suggestions may be used without restrictions or compensation being placed upon us; there will be no obligation for us to keep any comments confidential, pay for them, or respond. We may, but are not required to, remove content that violates these Terms and Conditions or is offensive or illegal. You agree not to violate the rights of any third party, including privacy or copyright rights, nor post illegal, harmful, or offensive material.`,
            },
            {
              title: "Section 9: Personal Data Collection",
              body: `Our Privacy Policy governs how we handle any personal information submitted via our website. Please read it to gain insight into how we protect it.`,
            },
            {
              title: "Section 10: Errors and Inaccuracies",
              body: `Due to discrepancies, errors, and/or omissions on our website, we reserve the right to make necessary corrections and update or cancel orders as necessary. By law, we are not required to keep information updated.`,
            },
            {
              title:
                "Section 11: Prohibited Uses for certain uses is provided herein",
              body: `Legal or inappropriate usage of this site or its content is strictly forbidden and could result in severe legal ramifications; violations could include breaking laws or regulations as well as violations to our intellectual property or other rights. Harassing or abusing others or discriminating against them are behaviors that constitute harassment or abuse, respectively. Spamming or phishing are illegal acts, while unauthorized entry has breached website security features and constitutes an attempt at intrusion. Should any unauthorized usage arise, we reserve the right to temporarily or permanently block access to our Services.`,
            },
            {
              title: "Section 12: Disclaimer and Limitation on Liability",
              body: `Our service cannot guarantee to be error-free, timely, or uninterrupted; use at your own risk without warranty of any kind; all products and services are provided "as-is". Dignity Medical Training and its directors, employees or affiliates cannot be held liable for damages that may result from using our service, even when informed of its potential danger.`,
            },
            {
              title: "Section 13: Indemnification Provision",
              body: `Dignity Medical Training and its employees agree to indemnify any claims brought forth by third parties due to your violation of its Terms of Services or applicable laws, which includes attorney's fees.`,
            },
            {
              title:
                "Section 14: Law to Apply in Case of Conflict (Governing Law)",
              body: `Dignity Medical Training's Terms of Service will be subject to and governed by the laws of the State in which its headquarters are situated. Changes to Terms of Service Agreement Terms The Terms of Service may change at any time, and it's wise to review this page regularly in order to stay aware of any updates to the site that would require acceptance by continuing use. Contact Information Should you have any inquiries about these Terms of Service, please email customersupport@dignitymedicaltraining.com for assistance.`,
            },
          ].map((section, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className="bg-gradient-to-r from-orange-500 to-blue-500 inline-block text-transparent bg-clip-text"
              >
                {section.title}
              </AccordionHeader>
              <AccordionBody className="text-lg text-gray-700">
                {section.body}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

// import Link from "next/link";
// import React from "react";
// import { IoHome } from "react-icons/io5";

// const TermsAndConditions = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-5 bg-gradient-to-r from-red-200 to-yellow-200">
//       <div className="max-w-6xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
//         <div className="flex text-4xl justify-center p-4">
//           <Link href="/">
//             <IoHome className="hover:text-primarygold" />
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Terms and Conditions
//         </h1>

//         <p className="mb-4 text-gray-700">
//           Welcome to Dignity Medical Training. This website is operated by
//           Dignity Medical Training - that company that we refer to when speaking
//           about us! By using this site and the tools, information, or services
//           it offers, you agree to be bound by these Terms of Service ("Terms").
//           These conditions apply regardless of whether someone is just browsing
//           or making purchases from this site.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 1: Online Store Terms
//         </h2>
//         <p className="mb-4 text-gray-700">
//           By using our services and website, you verify that you have attained
//           the legal age of majority in your state or province and assume
//           responsibility for any minor who depends on you. You agree not to use
//           our products in any manner that violates any applicable law or is
//           otherwise illegal or improper, including illegal or unlawful
//           practices. If you breach these Terms, we reserve the right to
//           immediately terminate your service.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 2: General Conditions
//         </h2>
//         <p className="mb-4 text-gray-700">
//           At any time and for any reason, we reserve the right to refuse
//           service. Content can be safely transmitted across various networks
//           without encryption; only credit card details will remain secure during
//           transmission. You agree not to copy, sell, or exploit any part of our
//           Service without written authorization from us.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 3: Accuracy, Completeness, and Timing of Information
//         </h2>
//         <p className="mb-4 text-gray-700">
//           While we make every attempt to present information that is both
//           reliable and timely on this site, no guarantees can be provided as to
//           its completeness or accuracy. Please exercise caution when basing any
//           decisions solely on information found here. This website may change at
//           any time without prior notification or obligation, with or without our
//           knowledge and consent.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 4: Changes in Service and Price
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Prices of our products may change at any time and without prior
//           notification; furthermore, we reserve the right to discontinue or
//           modify our Service at any point without giving prior warning. Price
//           changes or service discontinuation won't affect us in any way.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 5:Accuracy in Billing and Account Information
//         </h2>
//         <p className="mb-4 text-gray-700">
//           We reserve the right to reject or limit orders placed by resellers,
//           dealers, or distributors. In these instances, orders may be canceled
//           immediately. All transactions completed on our site require you to
//           provide accurate, current and complete information regarding your
//           account and purchase. Please update all contact information (email,
//           physical addresses etc) as well as payment details regularly.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 6: Optional Tools
//         </h2>
//         <p className="mb-4 text-gray-700">
//           You may gain access to tools from third parties we don't control. By
//           accepting that these tools are provided "as-is and "as available"
//           without warranty and that their use falls solely within your
//           discretion and risk, Future services or features we may add through
//           our website will also fall under these Terms of Service.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 7: Third-Party Links
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Links to websites unaffiliated with us may appear on our site,
//           although these third-party websites are outside our sphere of
//           influence and we do not support their content. No liability can be
//           accepted for harm caused by visiting websites owned by third parties.
//           Please read and comply with the terms and conditions of any site you
//           visit before accessing it.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 8: User Comments, Feedback, and Other Submissions
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Your feedback, ideas, or suggestions may be used without restrictions
//           or compensation being placed upon us; there will be no obligation for
//           us to keep any comments confidential, pay for them, or respond. We
//           may, but are not required to, remove content that violates these Terms
//           and Conditions or is offensive or illegal. You agree not to violate
//           the rights of any third party, including privacy or copyright rights,
//           nor post illegal, harmful, or offensive material.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 9: Personal Data Collection
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Our Privacy Policy governs how we handle any personal information
//           submitted via our website. Please read it to gain insight into how we
//           protect it.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 10: Errors and Inaccuracies
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Due to discrepancies, errors, and/or omissions on our website, we
//           reserve the right to make necessary corrections and update or cancel
//           orders as necessary. By law, we are not required to keep information
//           updated.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 11: Prohibited Uses for certain uses is provided herein.
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Legal or inappropriate usage of this site or its content is strictly
//           forbidden and could result in severe legal ramifications; violations
//           could include breaking laws or regulations as well as violations to
//           our intellectual property or other rights. Harassing or abusing others
//           or discriminating against them are behaviors that constitute
//           harassment or abuse, respectively. Spamming or phishing are illegal
//           acts, while unauthorized entry has breached website security features
//           and constitutes an attempt at intrusion. Should any unauthorized usage
//           arise, we reserve the right to temporarily or permanently block access
//           to our Services.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 12: Disclaimer and Limitation on Liability
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Our service cannot guarantee to be error-free, timely, or
//           uninterrupted; use at your own risk without warranty of any kind; all
//           products and services are provided "as-is". Dignity Medical Training
//           and its directors, employees or affiliates cannot be held liable for
//           damages that may result from using our service, even when informed of
//           its potential danger.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 13:Indemnification Provision
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Dignity Medical Training and its employees agree to indemnify any
//           claims brought forth by third parties due to your violation of its
//           Terms of Services or applicable laws, which includes attorney's fees.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Section 14: Law to Apply in Case of Conflict (Governing Law).
//         </h2>
//         <p className="text-gray-700">
//           Dignity Medical Training's Terms of Service will be subject to and
//           governed by the laws of the State in which its headquarters are
//           situated. Changes to Terms of Service Agreement Terms The Terms of
//           Service may change at any time, and it's wise to review this page
//           regularly in order to stay aware of any updates to the site that would
//           require acceptance by continuing use. Contact Information Should you
//           have any inquiries about these Terms of Service, please email
//           customersupport@dignitymedicaltraining.com for assistance.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;
