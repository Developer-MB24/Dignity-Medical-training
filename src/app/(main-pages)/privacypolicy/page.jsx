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

const PrivacyPolicy = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-10 px-5 bg-gradient-to-r from-orange-200 to-blue-200">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
          {/* <div className="flex justify-center mb-6">
            <Link href="/">
              <IoHome className="text-blue-600 text-4xl hover:text-blue-800" />
            </Link>
          </div> */}
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
            Privacy Policy
          </h1>

          {/* Accordion Sections */}
          {[
            {
              title: "Our Commitment",
              body: `Dignity Medical Training of [Insert Place] is committed to protecting your privacy. All personal information provided will be handled with care, and as an entity operating within [Insert Location], we adhere to all applicable laws and regulations pertaining to data protection - this includes GDPR compliance. Furthermore, we stand committed to keeping data safe for users worldwide.`,
            },
            {
              title: "Data Collection, Processing, and Storage",
              body: `We collect, store, and process various forms of information about you - such as information you directly provide when enrolling for an online course) as well as that which is automatically collected (via cookies, log files, or web beacons) - both directly provided by yourself as well as automatically collected in various forms such as cookies log files web beacons, etc. These data are used to enhance services as well as personalize them further - while processing includes gathering, recording, storing, or altering it accordingly.`,
            },
            {
              title: "Personally Identifiable Information (PII)",
              body: `We may collect Personally Identifying Information (PII) during registration to identify you uniquely, such as an email address. PII can also be collected for transactions or certifications as part of building your profile; date of birth, education background, work history data may be part of it as well. Your profile settings give you control over how your information is made public. All data stored in your account is protected from being misused or lost by access permissions and encrypted networks, making sure only authorized personnel have access to it for maximum confidentiality. We may use public postings on our platform for marketing or other uses; however, we cannot be held accountable for how others utilize such information.`,
            },
            {
              title: "Course Information",
              body: `Once registered, you can enroll in courses offered by Dignity Medical Training and its affiliates. Personal data will not be shared; only aggregate demographic data such as gender, age and country of origin is made public. In order to fulfill our service and comply with legal obligations, we collect and process information regarding course progress and interactions - this may result in receiving regular emails informing of progress updates and providing recommendations.`,
            },
            {
              title: "Third-Party Information Processors and Service Providers",
              body: `Cloud storage providers securely store your data. Payment processors and fulfillment companies manage transactions and deliver goods; we do not have access to their payment details or other sensitive data that they handle; instead, we integrate with services like Google and Facebook for advertising analysis and advertising, yet have no say over their collection and usage of information.`,
            },
            {
              title: "Technical Data Collection",
              body: `In order to provide our service at its highest levels, we gather technical information such as IP addresses, device details, usage patterns and cookie usage. Cookies allow us to keep track of sessions while personalizing and facilitating transactions; web beacons monitor emails to ensure service delivery.`,
            },
            {
              title: "User Consent and Self-Service Control",
              body: `By using our service, you acknowledge and consent to the collection and usage of your data according to this Policy. Your account settings allow you to access, modify, or delete personal information. Cookies and tracking technologies may be managed via browser settings while restricting data sharing may affect certain services' functionality. Parents and guardians must closely supervise the online activities of children aged under 13 (or 16 if living within the European Economic Area) without their consent. We will never collect personal data from children under these ages without first receiving parental or guardian approval.`,
            },
            {
              title: "Data Retention",
              body: `We store personal information only as long as necessary for legal or business needs, such as auditing purposes. Your account data may also remain in our system in case any audits or compliance checks need to take place after your account has been closed out, but only for legitimate business or regulatory compliance reasons.`,
            },
            {
              title: "Security and Disclosure",
              body: `Our data security measures aim to protect it against unintended access, modification, disclosure, and destruction by unapproved parties. No system is immune from breaches; therefore our security protocols are regularly reviewed to ensure the highest standards are upheld and access is only granted to authorized personnel.`,
            },
            {
              title: "Our Data Protection Officers",
              body: `Our Data Protection Officers oversee and implement our data protection strategy, so if any concerns about how your information is being treated arise, feel free to reach out at customersupport@dignitymedicaltraining.com and reach out directly.`,
            },
            {
              title: "Access Requests",
              body: `You have the right to access and modify or delete inaccurate or outdated personal data stored about you by us, should it become inaccurate. For this purpose, please reach out to us at customersupport@dignitymedicaltraining.com so we may facilitate these rights.`,
            },
            {
              title: "Right to Oppose",
              body: `Under certain conditions, you have the right to object to the use of your personal data for marketing purposes. To exercise this right, please email customersupport@dignitymedicaltraining.com`,
            },
            {
              title: "International Transmission of Data",
              body: `Your personal data may be processed and transferred between countries. We ensure all transfers comply with applicable data protection laws, so your privacy remains fully protected.`,
            },
            {
              title: "Policy Review and Modification",
              body: `Our Privacy Statement may be modified periodically to account for changes to our practices or laws and to reflect any corresponding updates to our website. By continuing to use the service, you consent to any updated policies by continuing use.`,
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

export default PrivacyPolicy;
































// import Link from "next/link";
// import React from "react";
// import { IoHome } from "react-icons/io5";

// const PrivacyPolicy = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-5 bg-gradient-to-r from-red-200 to-yellow-200">
//       <div className="max-w-6xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
//         <div className="flex text-4xl justify-center p-4">
//           <Link href="/">
//             <IoHome className="hover:text-primarygold" />
//           </Link> 
//         </div>
//         <h1 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           Privacy Policy
//         </h1>

//         <p className="mb-4 text-gray-700">
//           Our Privacy Statement details how Dignity (we, "us", or "our")
//           collects, uses, and protects the personal data we have on you. By
//           accessing or using Dignity Medical Training services ("User") you
//           accept all terms and conditions outlined herein - if not happy simply
//           stop using or close your account!
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           1. Our Commitment
//         </h2>
//         <p className="mb-4 text-gray-700">
//           Dignity Medical Training of [Insert Place] is committed to protecting
//           your privacy. All personal information provided will be handled with
//           care, and as an entity operating within [Insert Location], we adhere
//           to all applicable laws and regulations pertaining to data protection -
//           this includes GDPR compliance. Furthermore, we stand committed to
//           keeping data safe for users worldwide.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           2. Data Collection, Processing, and Storage
//         </h2>
//         <p className="mb-4 text-gray-700">
//           We collect, store, and process various forms of information about you
//           - such as information you directly provide when enrolling for an
//           online course) as well as that which is automatically collected (via
//           cookies, log files, or web beacons) - both directly provided by
//           yourself as well as automatically collected in various forms such as
//           cookies log files web beacons, etc. These data are used to enhance
//           services as well as personalize them further - while processing
//           includes gathering, recording, storing, or altering it accordingly.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           3. Personally Identifiable Information (PII).
//         </h2>
//         <p className="text-gray-700">
//           We may collect Personally Identifying Information (PII) during
//           registration to identify you uniquely, such as an email address. PII
//           can also be collected for transactions or certifications as part of
//           building your profile; date of birth, education background, work
//           history data may be part of it as well. Your profile settings give you
//           control over how your information is made public. All data stored in
//           your account is protected from being misused or lost by access
//           permissions and encrypted networks, making sure only authorized
//           personnel have access to it for maximum confidentiality. We may use
//           public postings on our platform for marketing or other uses; however,
//           we cannot be held accountable for how others utilize such information.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           4. Course Information
//         </h2>
//         <p className="text-gray-700">
//           Once registered, you can enroll in courses offered by Dignity Medical
//           Training and its affiliates. Personal data will not be shared; only
//           aggregate demographic data such as gender, age and country of origin
//           is made public. In order to fulfill our service and comply with legal
//           obligations, we collect and process information regarding course
//           progress and interactions - this may result in receiving regular
//           emails informing of progress updates and providing recommendations.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           5. Third-Party Information Processors and Service Providers
//         </h2>
//         <p className="text-gray-700">
//           Cloud storage providers securely store your data. Payment processors
//           and fulfillment companies manage transactions and deliver goods; we do
//           not have access to their payment details or other sensitive data that
//           they handle; instead, we integrate with services like Google and
//           Facebook for advertising analysis and advertising, yet have no say
//           over their collection and usage of information.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           6. Technical Data Collection
//         </h2>
//         <p className="text-gray-700">
//           In order to provide our service at its highest levels, we gather
//           technical information such as IP addresses, device details, usage
//           patterns and cookie usage. Cookies allow us to keep track of sessions
//           while personalizing and facilitating transactions; web beacons monitor
//           emails to ensure service delivery.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           7. User Consent and Self-Service Control
//         </h2>
//         <p className="text-gray-700">
//           By using our service, you acknowledge and consent to the collection
//           and usage of your data according to this Policy. Your account settings
//           allow you to access, modify, or delete personal information. Cookies
//           and tracking technologies may be managed via browser settings while
//           restricting data sharing may affect certain services' functionality.
//           Parents and guardians must closely supervise the online activities of
//           children aged under 13 (or 16 if living within the European Economic
//           Area) without their consent. We will never collect personal data from
//           children under these ages without first receiving parental or guardian
//           approval.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           8. Data Retention
//         </h2>
//         <p className="text-gray-700">
//           We store personal information only as long as necessary for legal or
//           business needs, such as auditing purposes. Your account data may also
//           remain in our system in case any audits or compliance checks need to
//           take place after your account has been closed out, but only for
//           legitimate business or regulatory compliance reasons.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           9. Security and Disclosure
//         </h2>
//         <p className="text-gray-700">
//           Our data security measures aim to protect it against unintended
//           access, modification, disclosure, and destruction by unapproved
//           parties. No system is immune from breaches; therefore our security
//           protocols are regularly reviewed to ensure the highest standards are
//           upheld and access is only granted to authorized personnel.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           10. Our Data Protection Officers
//         </h2>
//         <p className="text-gray-700">
//           Our Data Protection Officers oversee and implement our data protection
//           strategy, so if any concerns about how your information is being
//           treated arise, feel free to reach out at
//           customersupport@dignitymedicaltraining.com and reach out directly.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           11. Access Requests
//         </h2>
//         <p className="text-gray-700">
//           You have the right to access and modify or delete inaccurate or
//           outdated personal data stored about you by us, should it become
//           inaccurate. For this purpose, please reach out to us at
//           customersupport@dignitymedicaltraining.com so we may facilitate these
//           rights.
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           12. Right to Oppose
//         </h2>
//         <p className="text-gray-700">
//           Under certain conditions, you have the right to object to the use of
//           your personal data for marketing purposes. To exercise this right,
//           please email customersupport@dignitymedicaltraining.com
//         </p>
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           13. International Transmission of Data
//         </h2>
//         <p className="text-gray-700">
//           Your personal data may be processed and transferred between countries.
//           We ensure all transfers comply with applicable data protection laws,
//           so your privacy remains fully protected.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           14. Policy Review and Modification
//         </h2>
//         <p className="text-gray-700">
//           Our Privacy Statement may be modified periodically to account for
//           changes to our practices or laws and to reflect any corresponding
//           updates to our website. By continuing to use the service, you consent
//           to any updated policies by continuing use.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;
