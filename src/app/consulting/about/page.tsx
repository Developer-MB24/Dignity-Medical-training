"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const images = [
    "slider1.jpeg",
    "slider2.jpeg",
    "slider3.jpeg",
    "slider1.jpeg",
    "slider2.jpeg",
    "slider3.jpeg",
  ];
  const GROUP_SIZE = 3;
  const TOTAL_GROUPS = Math.ceil(images.length / GROUP_SIZE);

  // Refs for different sections
  const titleRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLHeadingElement>(null);
  const inspireRef = useRef<HTMLDivElement>(null);
  const connectionRef = useRef<HTMLDivElement>(null);
  const extraordinaryRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Visibility states
  const [titleVisible, setTitleVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [actionVisible, setActionVisible] = useState(false);
  const [inspireVisible, setInspireVisible] = useState(false);
  const [connectionVisible, setConnectionVisible] = useState(false);

  const [extraordinaryVisible, setExtraordinaryVisible] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);

  // For title section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTitleVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  // For heading section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeadingVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  // For action section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActionVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (actionRef.current) observer.observe(actionRef.current);
    return () => {
      if (actionRef.current) observer.unobserve(actionRef.current);
    };
  }, []);

  // For inspire section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInspireVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (inspireRef.current) observer.observe(inspireRef.current);
    return () => {
      if (inspireRef.current) observer.unobserve(inspireRef.current);
    };
  }, []);

  // For connection section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setConnectionVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (connectionRef.current) observer.observe(connectionRef.current);
    return () => {
      if (connectionRef.current) observer.unobserve(connectionRef.current);
    };
  }, []);

  // Observe heading for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setExtraordinaryVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (extraordinaryRef.current) observer.observe(extraordinaryRef.current);
    return () => {
      if (extraordinaryRef.current)
        observer.unobserve(extraordinaryRef.current);
    };
  }, []);

  // 3 images carousel
  // Auto slide group every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % TOTAL_GROUPS);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll when group changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentGroup * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentGroup]);

  return (
    <>
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/images/slider3.jpeg"
          alt="Chanelle sitting on couch with plants"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-full px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-4">
            An Extraordinary Life
          </h1>

          <hr className="w-3/4 max-w-md border-white/40 my-2" />

          <p className="font-handwriting text-3xl md:text-5xl mt-4">
            one day at a time
          </p>

          {/* Down Arrow */}
          <div className="mt-10 animate-bounce">
            <span className="text-3xl">⌄</span>
          </div>
        </div>

        {/* Logo (top left) */}
        {/* <div className="absolute top-6 left-6 z-30">
          <h2 className="text-white text-2xl font-serif">Segerius Bruce</h2>
        </div> */}

        {/* Menu Icon (top right) */}
        {/* <div className="absolute top-6 right-6 z-30">
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-6 h-[2px] bg-white" />
          </div>
        </div> */}
      </section>

      {/* second section titleRef */}

      <section className="relative bg-white bg-[url('/images/palms-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 px-6 md:px-20">
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-12">
          <div
            ref={titleRef}
            className={`transition-all duration-1000 text-3xl md:text-5xl font-serif font-normal ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-center">
              <span className="font-handwriting text-yellow-600 block text-4xl mb-2">
                Chanelle Segerius-Bruce
              </span>
              Background and experience in business
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-[50%] flex justify-center md:justify-end order-1 md:order-2">
              <div className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Chanelle"
                  width={450}
                  height={450}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>

            <div className="md:w-[50%] space-y-6 order-2 md:order-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-relaxed text-gray-800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vitae odio non magna convallis convallis.
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* third section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/greetingvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay text at bottom */}
        {/* <div className="absolute bottom-12 w-full text-center px-4 z-10">
          <h2 className="text-2xl md:text-4xl font-serif text-black">
            What are you being called to do?
          </h2>
          <p className="font-handwriting text-3xl md:text-5xl text-yellow-600 mt-2">
            it's time to thrive
          </p>
        </div> */}

        {/* Optional: dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent z-[1]" />
      </section>

      {/* fourth section headingRef */}

      <section>
        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Top-right Brushstroke Image */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-90 z-0">
            <Image
              src="/images/brushstroke.png"
              alt="Brushstroke"
              fill
              className="object-contain object-top"
            />
          </div>

          {/* Animated Heading */}
          <div
            ref={headingRef}
            className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
              headingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-snug">
              You Can Be Anything You Want To Be!
            </h2>
            <p className="font-handwriting text-4xl text-black mt-6">
              I know because ...
            </p>
            <p className="uppercase text-sm tracking-wider mt-6 text-gray-800 max-w-2xl mx-auto">
              I've changed career paths a few times, moved to 3 continents and
              had a baby in the middle of it!
            </p>
          </div>
        </section>

        {/* left  */}

        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry - Left side */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10 mt-20">
            {/* Left-aligned content */}
            <div className="md:w-1/2 relative pr-8 text-left">
              {/* Label Box */}
              <div className="bg-gray-200 px-6 py-4 inline-block text-left shadow-md relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  1998 — DIPLOMA IN GRAPHIC DESIGN
                </p>
                <div className="absolute -right-2 top-4 w-4 h-4 bg-gray-200 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-700 leading-relaxed space-y-2">
                <p>
                  Finished high school, did a diploma in Graphic Design /
                  Artworking. Switched on my first Apple.
                </p>
                <p className="italic">Once you go Mac, you never go back!</p>
              </div>
            </div>

            {/* Empty right space */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* right */}
        <section className="relative bg-white py-20 px-6  overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry (right aligned) */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Empty left space */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content right side */}
            <div className="md:w-1/2 relative pl-8">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-6 text-gray-300 text-2xl"></div>

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2000 — BOARDED A JET PLANE FOR THE UK
                </p>
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  Left Durban, South Africa with my boyfriend at the time (now
                  husband). Worked at a print shop in Baker Street creating
                  letterheads and business cards. I walked home to Marylebone
                  every day and we had a W1 postcode, although it was the size
                  of a shoebox.
                </p>
                <p>
                  Moved jobs to a DVD packaging company working 12–hour night
                  shifts on clients such as{" "}
                  <strong className="font-semibold">
                    MGM, FOX, and Paramount
                  </strong>
                  . Guys would throw grapes at co–workers who looked like they
                  might be nodding off at 3am.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Blue car"
                  width={400}
                  height={260}
                  className="rounded-md shadow-md"
                />
                <p className="text-sm italic mt-2 text-gray-700">
                  We went on to spend 12–Years in the UK living in London,
                  Hampshire and Dorking in Surrey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* left  */}
        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Left side content */}
            <div className="md:w-1/2 relative pr-8 text-left">
              {/* Timeline Icon Right Side */}
              {/* <div className="absolute -right-5 top-6 text-gray-300 text-2xl">
              🖼️
            </div> */}

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2004 — I BECAME OBSESSED WITH HIGH-END RETOUCHING
                </p>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  I found an online mentor, mastered the art and got a full–time
                  role at{" "}
                  <strong className="font-semibold">THE BODY SHOP</strong> head
                  office in London which left me with a year’s worth of
                  strawberry body butter after I resigned.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider1.jpeg"
                  alt="The Body Shop Logo"
                  width={160}
                  height={160}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Empty right space */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* right */}
        <section className="relative bg-white py-20 px-6  overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry (right aligned) */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Empty left space */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content right side */}
            <div className="md:w-1/2 relative pl-8">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-6 text-gray-300 text-2xl"></div>

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2000 — BOARDED A JET PLANE FOR THE UK
                </p>
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  Left Durban, South Africa with my boyfriend at the time (now
                  husband). Worked at a print shop in Baker Street creating
                  letterheads and business cards. I walked home to Marylebone
                  every day and we had a W1 postcode, although it was the size
                  of a shoebox.
                </p>
                <p>
                  Moved jobs to a DVD packaging company working 12–hour night
                  shifts on clients such as{" "}
                  <strong className="font-semibold">
                    MGM, FOX, and Paramount
                  </strong>
                  . Guys would throw grapes at co–workers who looked like they
                  might be nodding off at 3am.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Blue car"
                  width={400}
                  height={260}
                  className="rounded-md shadow-md"
                />
                <p className="text-sm italic mt-2 text-gray-700">
                  We went on to spend 12–Years in the UK living in London,
                  Hampshire and Dorking in Surrey
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* left  */}
        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Left side content */}
            <div className="md:w-1/2 relative pr-8 text-left">
              {/* Timeline Icon Right Side */}
              {/* <div className="absolute -right-5 top-6 text-gray-300 text-2xl">
              🖼️
            </div> */}

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2004 — I BECAME OBSESSED WITH HIGH-END RETOUCHING
                </p>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  I found an online mentor, mastered the art and got a full–time
                  role at{" "}
                  <strong className="font-semibold">THE BODY SHOP</strong> head
                  office in London which left me with a year’s worth of
                  strawberry body butter after I resigned.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider1.jpeg"
                  alt="The Body Shop Logo"
                  width={160}
                  height={160}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Empty right space */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* right */}
        <section className="relative bg-white py-20 px-6  overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry (right aligned) */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Empty left space */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content right side */}
            <div className="md:w-1/2 relative pl-8">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-6 text-gray-300 text-2xl"></div>

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2000 — BOARDED A JET PLANE FOR THE UK
                </p>
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  Left Durban, South Africa with my boyfriend at the time (now
                  husband). Worked at a print shop in Baker Street creating
                  letterheads and business cards. I walked home to Marylebone
                  every day and we had a W1 postcode, although it was the size
                  of a shoebox.
                </p>
                <p>
                  Moved jobs to a DVD packaging company working 12–hour night
                  shifts on clients such as{" "}
                  <strong className="font-semibold">
                    MGM, FOX, and Paramount
                  </strong>
                  . Guys would throw grapes at co–workers who looked like they
                  might be nodding off at 3am.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Blue car"
                  width={400}
                  height={260}
                  className="rounded-md shadow-md"
                />
                <p className="text-sm italic mt-2 text-gray-700">
                  We went on to spend 12–Years in the UK living in London,
                  Hampshire and Dorking in Surrey
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* left  */}
        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Left side content */}
            <div className="md:w-1/2 relative pr-8 text-left">
              {/* Timeline Icon Right Side */}
              {/* <div className="absolute -right-5 top-6 text-gray-300 text-2xl">
              🖼️
            </div> */}

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2004 — I BECAME OBSESSED WITH HIGH-END RETOUCHING
                </p>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  I found an online mentor, mastered the art and got a full–time
                  role at{" "}
                  <strong className="font-semibold">THE BODY SHOP</strong> head
                  office in London which left me with a year’s worth of
                  strawberry body butter after I resigned.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider1.jpeg"
                  alt="The Body Shop Logo"
                  width={160}
                  height={160}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Empty right space */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* right */}
        <section className="relative bg-white py-20 px-6  overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry (right aligned) */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Empty left space */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content right side */}
            <div className="md:w-1/2 relative pl-8">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-6 text-gray-300 text-2xl"></div>

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2000 — BOARDED A JET PLANE FOR THE UK
                </p>
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  Left Durban, South Africa with my boyfriend at the time (now
                  husband). Worked at a print shop in Baker Street creating
                  letterheads and business cards. I walked home to Marylebone
                  every day and we had a W1 postcode, although it was the size
                  of a shoebox.
                </p>
                <p>
                  Moved jobs to a DVD packaging company working 12–hour night
                  shifts on clients such as{" "}
                  <strong className="font-semibold">
                    MGM, FOX, and Paramount
                  </strong>
                  . Guys would throw grapes at co–workers who looked like they
                  might be nodding off at 3am.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Blue car"
                  width={400}
                  height={260}
                  className="rounded-md shadow-md"
                />
                <p className="text-sm italic mt-2 text-gray-700">
                  We went on to spend 12–Years in the UK living in London,
                  Hampshire and Dorking in Surrey
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* left  */}
        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Left side content */}
            <div className="md:w-1/2 relative pr-8 text-left">
              {/* Timeline Icon Right Side */}
              {/* <div className="absolute -right-5 top-6 text-gray-300 text-2xl">
              🖼️
            </div> */}

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2004 — I BECAME OBSESSED WITH HIGH-END RETOUCHING
                </p>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  I found an online mentor, mastered the art and got a full–time
                  role at{" "}
                  <strong className="font-semibold">THE BODY SHOP</strong> head
                  office in London which left me with a year’s worth of
                  strawberry body butter after I resigned.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider1.jpeg"
                  alt="The Body Shop Logo"
                  width={160}
                  height={160}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Empty right space */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* right */}
        <section className="relative bg-white py-20 px-6  overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry (right aligned) */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Empty left space */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content right side */}
            <div className="md:w-1/2 relative pl-8">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-6 text-gray-300 text-2xl"></div>

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2000 — BOARDED A JET PLANE FOR THE UK
                </p>
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  Left Durban, South Africa with my boyfriend at the time (now
                  husband). Worked at a print shop in Baker Street creating
                  letterheads and business cards. I walked home to Marylebone
                  every day and we had a W1 postcode, although it was the size
                  of a shoebox.
                </p>
                <p>
                  Moved jobs to a DVD packaging company working 12–hour night
                  shifts on clients such as{" "}
                  <strong className="font-semibold">
                    MGM, FOX, and Paramount
                  </strong>
                  . Guys would throw grapes at co–workers who looked like they
                  might be nodding off at 3am.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Blue car"
                  width={400}
                  height={260}
                  className="rounded-md shadow-md"
                />
                <p className="text-sm italic mt-2 text-gray-700">
                  We went on to spend 12–Years in the UK living in London,
                  Hampshire and Dorking in Surrey
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* left  */}
        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Left side content */}
            <div className="md:w-1/2 relative pr-8 text-left">
              {/* Timeline Icon Right Side */}
              {/* <div className="absolute -right-5 top-6 text-gray-300 text-2xl">
              🖼️
            </div> */}

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2004 — I BECAME OBSESSED WITH HIGH-END RETOUCHING
                </p>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  I found an online mentor, mastered the art and got a full–time
                  role at{" "}
                  <strong className="font-semibold">THE BODY SHOP</strong> head
                  office in London which left me with a year’s worth of
                  strawberry body butter after I resigned.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider1.jpeg"
                  alt="The Body Shop Logo"
                  width={160}
                  height={160}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Empty right space */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* right */}
        <section className="relative bg-white py-20 px-6  overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry (right aligned) */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Empty left space */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content right side */}
            <div className="md:w-1/2 relative pl-8">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-6 text-gray-300 text-2xl"></div>

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2000 — BOARDED A JET PLANE FOR THE UK
                </p>
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  Left Durban, South Africa with my boyfriend at the time (now
                  husband). Worked at a print shop in Baker Street creating
                  letterheads and business cards. I walked home to Marylebone
                  every day and we had a W1 postcode, although it was the size
                  of a shoebox.
                </p>
                <p>
                  Moved jobs to a DVD packaging company working 12–hour night
                  shifts on clients such as{" "}
                  <strong className="font-semibold">
                    MGM, FOX, and Paramount
                  </strong>
                  . Guys would throw grapes at co–workers who looked like they
                  might be nodding off at 3am.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Blue car"
                  width={400}
                  height={260}
                  className="rounded-md shadow-md"
                />
                <p className="text-sm italic mt-2 text-gray-700">
                  We went on to spend 12–Years in the UK living in London,
                  Hampshire and Dorking in Surrey
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* left  */}
        <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Left side content */}
            <div className="md:w-1/2 relative pr-8 text-left">
              {/* Timeline Icon Right Side */}
              {/* <div className="absolute -right-5 top-6 text-gray-300 text-2xl">
              🖼️
            </div> */}

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2004 — I BECAME OBSESSED WITH HIGH-END RETOUCHING
                </p>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  I found an online mentor, mastered the art and got a full–time
                  role at{" "}
                  <strong className="font-semibold">THE BODY SHOP</strong> head
                  office in London which left me with a year’s worth of
                  strawberry body butter after I resigned.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider1.jpeg"
                  alt="The Body Shop Logo"
                  width={160}
                  height={160}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Empty right space */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* right */}
        <section className="relative bg-white py-20 px-6  overflow-hidden">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-100 transform -translate-x-1/2 z-0" />

          {/* Timeline Entry (right aligned) */}
          <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Empty left space */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content right side */}
            <div className="md:w-1/2 relative pl-8">
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-6 text-gray-300 text-2xl"></div>

              {/* Label Box */}
              <div className="bg-gray-100 px-6 py-4 inline-block text-left shadow-sm relative mb-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-700">
                  2000 — BOARDED A JET PLANE FOR THE UK
                </p>
                <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-100 rotate-45" />
              </div>

              {/* Description */}
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
                <p>
                  Left Durban, South Africa with my boyfriend at the time (now
                  husband). Worked at a print shop in Baker Street creating
                  letterheads and business cards. I walked home to Marylebone
                  every day and we had a W1 postcode, although it was the size
                  of a shoebox.
                </p>
                <p>
                  Moved jobs to a DVD packaging company working 12–hour night
                  shifts on clients such as{" "}
                  <strong className="font-semibold">
                    MGM, FOX, and Paramount
                  </strong>
                  . Guys would throw grapes at co–workers who looked like they
                  might be nodding off at 3am.
                </p>
              </div>

              {/* Image */}
              <div className="mt-6">
                <Image
                  src="/images/slider2.jpeg"
                  alt="Blue car"
                  width={400}
                  height={260}
                  className="rounded-md shadow-md"
                />
                <p className="text-sm italic mt-2 text-gray-700">
                  We went on to spend 12–Years in the UK living in London,
                  Hampshire and Dorking in Surrey
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* fifth section actionRef */}
      <section className="bg-white py-20 px-6 text-center">
        <h2
          ref={actionRef}
          className={`text-2xl md:text-4xl font-serif font-light transition-all duration-1000 ${
            actionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <span className="font-handwriting text-yellow-600 text-5xl md:text-6xl mr-2">
            Are you ready
          </span>
          to take action?
        </h2>

        <button className="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white uppercase tracking-wide text-sm py-3 px-6">
          › Book an Alignment Call
        </button>
      </section>

      {/* sixth section inspireRef */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/slider1.jpeg"
          alt="Chanelle on rock"
          fill
          className="object-cover object-center"
        />

        {/* Text Overlay with Transition */}
        <div
          ref={inspireRef}
          className={`absolute z-10 top-[20%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 ease-in-out ${
            inspireVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-black">
            If You Aspire To{" "}
            <span className="font-handwriting text-5xl text-black">
              inspire
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl tracking-widest text-black uppercase">
            Then you better go and live your dream life!
          </p>
        </div>
      </section>

      {/*  section connectionRef */}
      <section className="bg-white py-20 px-6 md:px-20">
        {/* Header with transition */}
        <div
          ref={connectionRef}
          className={`transition-all duration-1000 w-full text-center max-w-5xl mx-auto ${
            connectionVisible ? "opacity-100 ..." : "opacity-0 ..."
          }`}
        >
          <h2 className="font-handwriting text-4xl md:text-5xl text-black">
            I don’t want to miss Saharah’s childhood
          </h2>
          <p className="uppercase text-sm tracking-wide mt-4 text-gray-700 max-w-3xl mx-auto">
            I longed for the same connection I had with my parents.
            <br />
            That’s why I became a mom.
          </p>
        </div>

        {/* Paragraph and Image layout */}
        <div className="mt-16 flex flex-col md:flex-row items-stretch gap-10 max-w-6xl mx-auto">
          {/* Left – Text */}
          <div className="md:w-1/2 space-y-6 text-[16px] text-gray-800 leading-relaxed">
            <p>
              Gone are the days of shooting 12–hour weddings on weekends,
              feeling like I’d been run over by a bus every Sunday, and editing
              pictures all week long!
            </p>
            <p className="font-semibold">
              I’m designing a life that I want and I’ve created a business that
              supports it.
            </p>
            <p className="font-semibold uppercase">
              Once Saharah was born, things shifted.
            </p>
            <p>
              I want freedom. I don’t want to be limited to a small number of
              days off per year or to have to ask permission every time I want
              to go on holiday.
            </p>
            <p>
              <strong>Do you find yourself feeling a bit “over it”</strong>{" "}
              sometimes? I help you avoid feeling overwhelmed and burnt–out.
              Business coaching is more than learning about marketing and
              branding. It’s also here to protect you as a mother.
            </p>
            <p>
              I want freedom. I don’t want to be limited to a small number of
              days off per year or to have to ask permission every time I want
              to go on holiday.
            </p>
            <p>
              <strong>Do you find yourself feeling a bit “over it”</strong>{" "}
              sometimes? I help you avoid feeling overwhelmed and burnt–out.
              Business coaching is more than learning about marketing and
              branding. It’s also here to protect you as a mother.
            </p>
          </div>

          {/* Right – Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full h-full max-w-sm">
              <Image
                src="/images/slider2.jpeg"
                alt="Chanelle playing with Saharah"
                width={500}
                height={600}
                className="object-cover w-full h-full shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* extraordinaryVisible */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        {/* ⛔ No transition on this block */}
        <div className="max-w-5xl mx-auto space-y-6">
          <h3 className="uppercase tracking-widest text-sm md:text-base text-gray-800">
            I didn’t have a baby for somebody else to bring up!
          </h3>
          <p className="text-lg leading-relaxed text-gray-900">
            I want to be with her every afternoon like my own mother was for me.
            My husband gets to work from home too and we’re able to share
            quality time with our toddler. I realise this is a privilege, some
            would say an extraordinary circumstance.
          </p>
        </div>

        {/* ✅ Transition applied here */}
        <div
          ref={extraordinaryRef}
          className={`transition-all duration-1000 mt-16 ${
            extraordinaryVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-6xl font-serif font-light">
            Extraordinary is what I'm striving for,
          </h2>
          <p className="font-handwriting text-5xl md:text-6xl text-black mt-4">
            one day at a time!
          </p>
        </div>
      </section>

      {/* 3 images slider  */}
      <section className="bg-white py-12">
        {/* Carousel */}
        <div className="overflow-hidden w-full" ref={scrollRef}>
          <div className="flex w-max transition-transform ease-in-out duration-1000">
            {Array.from({ length: TOTAL_GROUPS }).map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-0"
                style={{ width: "100vw" }}
              >
                {images
                  .slice(
                    groupIndex * GROUP_SIZE,
                    groupIndex * GROUP_SIZE + GROUP_SIZE
                  )
                  .map((img, index) => (
                    <div
                      key={index}
                      className="aspect-[3/4] relative w-full h-[450px]"
                    >
                      <Image
                        src={`/images/${img}`}
                        alt={`Slide ${groupIndex * GROUP_SIZE + index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-center mt-10">
          <button className="bg-[#d4a857] hover:bg-[#c49645] text-white text-lg tracking-wider uppercase py-5 px-10 transition-all duration-300">
            <span className="text-xl mr-2">›</span> Book an Alignment Call
          </button>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat text-center py-24 px-6"
        style={{ backgroundImage: "url('/images/slider2.jpeg')" }}
      >
        {/* Overlay (optional if text is not visible over image) */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Headline */}
          <h2 className="text-3xl md:text-6xl font-serif text-black leading-snug">
            Ready to take the next step?
            <span className="block md:inline font-handwriting text-yellow-600 text-5xl md:text-7xl ml-2">
              Let's chat!
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 uppercase tracking-wider text-base md:text-lg text-black">
            Let's chat on Zoom for around 30 mins to see if we're the right fit
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="border border-yellow-600 px-8 py-4 text-yellow-600 uppercase tracking-wider hover:bg-yellow-600 hover:text-white transition-all duration-300">
              › Book a Call
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-white text-center py-20 px-6">
        {/* Decorative Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-contain pointer-events-none opacity-90 z-0"
          style={{ backgroundImage: "url('/images/gold-splatter-bg.png')" }} // Replace with your image path
        />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-light">
            <span className="font-handwriting text-yellow-600 text-5xl md:text-6xl mr-2">
              My life on
            </span>
            <span className="text-black">INSTAGRAM</span>
          </h2>

          {/* CTA Button */}
          <div className="mt-16">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300">
              › Join the Build Your Brand Online FB Group
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
