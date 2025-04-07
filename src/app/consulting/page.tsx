// app/consulting/page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ConsultingPage() {
  const logos = [
    { src: "/coursesimage/abouthero1.jpeg", alt: "Thrive Global" },
    { src: "/coursesimage/abouthero1.jpeg", alt: "Entrepreneur" },
    { src: "/coursesimage/abouthero1.jpeg", alt: "Forbes" },
    {
      src: "/coursesimage/abouthero1.jpeg",
      alt: "Professional Photographer",
    },
    { src: "/coursesimage/abouthero1.jpeg", alt: "Coach Magazine" },
    { src: "/coursesimage/abouthero1.jpeg", alt: "Stylist Magazine" },
  ];

  const testimonials = [
    {
      quote: "Joe landed a $40K contract PLUS generated $30K in 9 weeks!",
      author: "Joe Mebrahtu",
    },
    {
      quote: "Sarah tripled her income and gained 12 high-ticket clients!",
      author: "Sarah Blake",
    },
    {
      quote: "Amelia launched a brand and replaced her 9–5 income in 2 months!",
      author: "Amelia Grant",
    },
    {
      quote: "Mike secured 3 retainer clients after one strategy session!",
      author: "Mike Fernandez",
    },
    {
      quote: "Tina filled her entire group program within 10 days of launch!",
      author: "Tina Roberts",
    },
    {
      quote: "Chloe turned her passion into a profitable business in 6 weeks!",
      author: "Chloe Evans",
    },
  ];

  const blogPosts = [
    {
      title: "SPIRIT FEST AFRICA 2024!",
      excerpt:
        "Spirit Fest Africa: A Journey of Consciousness, Connection, and Growth. Four years ago, I attended Spirit Fest Africa, a transformative...",
      image: "/images/slider1.jpeg",
      link: "#",
    },
    {
      title: "5 Tools I Use to Stay Focused Working From Home",
      excerpt:
        "Struggling with distractions? These 5 tools help me stay grounded and efficient even in a busy household...",
      image: "/images/slider2.jpeg",
      link: "#",
    },
    {
      title: "How I Booked Out My First Course Launch",
      excerpt:
        "I opened the cart and within days I had filled every seat. Here’s the strategy I used and how you can do it too...",
      image: "/images/slider3.jpeg",
      link: "#",
    },
  ];
  // Testimonial Carousel
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Blog Carousel
  const [blogIndex, setBlogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlogIndex((prev) => (prev + 1) % blogPosts.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  if (!blogPosts[blogIndex]) return null;
  const post = blogPosts[blogIndex];

  return (
    <>
      <section className="relative w-full h-screen text-white bg-black">
        <Image
          src="/coursesimage/abouthero1.jpeg"
          alt="Chanelle on the beach"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif">
            Build Your Brand Online
          </h1>
          <p className="text-2xl mt-4 font-handwriting">with Chanelle</p>
          <div className="mt-6 animate-bounce text-3xl">↓</div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg font-light uppercase tracking-widest mb-6 relative inline-block">
            <span className="before:absolute before:content-[''] before:w-20 before:h-px before:bg-black before:left-[-90px] before:top-1/2" />
            Featured In
            <span className="after:absolute after:content-[''] after:w-20 after:h-px after:bg-black after:right-[-90px] after:top-1/2" />
          </h2>

          <div className="flex flex-wrap justify-center gap-8 items-center mt-6">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FormSection */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-96 md:h-[600px] mb-10 md:mb-0">
          <Image
            src="/coursesimage/abouthero1.jpeg"
            alt="Flatlay with keyboard and phone"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 md:pl-12 max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-handwriting mb-2">
            Create your sold-out offers
          </h2>
          <p className="uppercase text-sm tracking-widest font-semibold mb-4">
            Free Instant Access Masterclass
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In 45–mins get the 3 Insider Secrets to create your sold-out offers
            for 6–Figures $ and beyond – make this the year you majorly leverage
            by teaching what you know.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full border border-yellow-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-yellow-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            {/* Checkbox */}
            <label className="flex items-start space-x-2 text-sm text-gray-700">
              <input type="checkbox" className="mt-1" />
              <span>
                I agree to receiving occasional marketing emails from
                Segerius-Bruce Coaching and the{" "}
                <a href="#" className="text-yellow-600 underline">
                  T&Cs
                </a>{" "}
                &{" "}
                <a href="#" className="text-yellow-600 underline">
                  privacy policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600 transition"
            >
              REGISTER NOW!
            </button>
          </form>
        </div>
      </section>

      <section className="flex flex-col md:flex-row bg-white items-stretch">
        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 h-[600px]">
          <Image
            src="/coursesimage/abouthero1.jpeg"
            alt="Chanelle smiling"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-12 text-gray-900 space-y-6">
          <h3 className="text-3xl text-yellow-500 font-handwriting">
            Welcome!
          </h3>
          <h2 className="text-2xl font-semibold">Meet Chanelle</h2>
          <p className="font-medium text-base">
            Business Coach & Personal Branding Expert
          </p>
          <p className="text-gray-700 leading-relaxed">
            Featured in Forbes, Stylist and Entrepreneur Magazine, Chanelle’s
            background is in the design departments of Top 10 Ad Agencies around
            London as well as for world–famous photographer, Mario Testino.
            Brands include Versace, D&G and Vogue.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chanelle ran a successful photography business in the UK for 10
            years and photographed weddings around the world. She now uses her
            20 years of experience in design, marketing, branding and business
            to coach women from around the world on how they can create their
            version of an extraordinary freedom–based lifestyle through
            entrepreneurship.
          </p>

          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 uppercase text-sm tracking-widest mt-4">
            Learn more about me &gt;
          </button>
        </div>
      </section>

      <section className="relative bg-white py-20 px-6 md:px-16 text-center">
        {/* Gold splash graphic (optional) */}
        <div className="absolute bottom-0 right-10 w-48 h-48 opacity-60 pointer-events-none">
          <Image
            src="/coursesimage/abouthero1.jpeg"
            alt="Gold splash"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-xs md:text-sm uppercase tracking-wide text-gray-800">
          <span className="font-handwriting text-xl text-black">
            Hi there...
          </span>{" "}
          Do you feel like you're at a turning point in your life and business?
        </p>

        <h2 className="text-3xl md:text-5xl font-serif my-6 leading-snug">
          Are you ready to step into your
          <br />
          next phase of business?
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base">
          You’ve been around the block, you’ve done your time, you’re an expert
          in your field and the time has come for you to lead, mentor and coach
          the next generation and teach what you know.
        </p>

        <p className="mt-10 font-handwriting text-2xl md:text-3xl text-gray-900">
          I’ve been there … let me tell you my story.
        </p>
      </section>

      {/* lifestylesection */}

      <section className="bg-white py-16 px-6 md:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Text content */}
          <div className="flex-1 space-y-6 text-gray-800 text-[17px] leading-relaxed font-light">
            <p>
              <strong>I got the dreaded call (again)</strong> – my grandmother
              had passed away this time.
            </p>
            <p>
              <strong>I was half way around the world</strong> and wasn’t able
              to fly home to be with my family for her funeral as I had weddings
              to shoot for the studio that weekend.
            </p>
            <p>
              She’s not the first person I’ve lost and my Dad leaving us when he
              was only 54 got me re–assessing my life and where I wanted to be
              and what I wanted to do.
            </p>
            <p>
              I’d run a successful photography business in London for 8 years
              which took my husband and I around the world to far–flung
              destinations including Bali and Marrakech.
            </p>
            <p>
              We then joined a studio in the picture perfect Caribbean where I
              had my baby girl and went back to work when she was 6 months old.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-[350px] h-[300px] shrink-0 border border-gray-300">
            <Image
              src="/images/slider1.jpeg"
              alt="Woman holding child at beach"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-20">
        {/* Full-width image */}
        <div className="w-full max-w-4xl mx-auto aspect-[4/3] relative">
          <Image
            src="/images/slider1.jpeg"
            alt="Woman walking with child on tropical beach"
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Paragraphs */}
        <div className="max-w-3xl mx-auto mt-10 space-y-6 text-[17px] text-gray-800 font-light leading-relaxed">
          <p>
            I’d gone back to having a job and the terms of my life were dictated
            by the needs of the studio and the photography clients.
          </p>
          <p>
            I started experiencing anxiety, had no time for myself, was feeling
            the pressure of when I’d be going back to work full time (when in
            truth all I really wanted at the time was to be with my baby who was
            under the age of one).
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20 text-center relative overflow-hidden">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif leading-snug max-w-4xl mx-auto">
          The truth was I never wanted to go
          <br />
          back to work full time.
        </h2>

        {/* Handwritten "Ever." over gold brushstroke */}
        <div className="relative inline-block mt-2">
          <Image
            src="/images/slider1.jpeg"
            alt="Gold brush stroke"
            width={220}
            height={120}
            className="absolute top-0 left-1/2 -translate-x-1/2 -z-10"
          />
          <p className="font-handwriting text-4xl mt-4 text-black relative z-10">
            Ever.
          </p>
        </div>

        {/* Paragraph content */}
        <div className="text-[17px] text-gray-800 font-light leading-relaxed max-w-3xl mx-auto mt-12 space-y-6 text-left">
          <p>
            I don’t want to work in my business full time either! So I don’t.
          </p>
          <p>
            I was juggling a teething baby, who I loved with all my heart – but
            let’s face it there are some difficult times. Cue a 1–hour session
            bouncing on a medicine ball trying to lull her to sleep!
          </p>
          <p className="font-medium text-black">
            Worst of all when I ran the numbers Sahara’s nanny was making more
            than me!
          </p>
          <p>
            Because she had to be there half an hour before I left for work and
            half an hour after I had finished it worked out that she took home
            more than I did at the end of each month.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20 text-center">
        {/* Handwritten "Crazy!" */}
        <p className="text-4xl text-yellow-600 font-handwriting mb-4">Crazy!</p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-serif leading-snug max-w-4xl mx-auto">
          There had to be a better way to do this
          <br />
          mom + passionate career thing!
        </h2>

        {/* Paragraphs */}
        <div className="text-[17px] text-gray-800 font-light leading-relaxed max-w-3xl mx-auto mt-12 space-y-6 text-left">
          <p>
            I’d had my own business before and although it comes with its ups
            and downs I love that when I come up with ideas, work harder and get
            more clients in, it directly increases my income.
          </p>
          <p>
            <strong>
              I had to overcome my guilt about leaving a good job, a gorgeous
              location and followed my heart.
            </strong>
          </p>
          <p>
            My heart lead us back to Africa, to be near our family for a while
            and see what it’s like to live here again.
          </p>
          <p>
            I invested in a high–level business coach, got clear on my real
            desires and discovered that my core values include:
          </p>

          {/* Core Values List */}
          <ul className="list-disc list-inside font-semibold mt-4 space-y-2">
            <li>FAMILY</li>
            <li>TIME FREEDOM</li>
            <li>OWNING MY OWN BUSINESS</li>
          </ul>

          {/* Drop cap intro paragraph */}
          <p className="mt-10 text-justify">
            <span className="text-5xl font-serif float-left mr-2 leading-none">
              W
            </span>
            ithin 3 months I’d launched a new Social Media Marketing company,
            signed up 5 ongoing clients in my first month, resigned from my job
            and started packing for South Africa!
          </p>

          {/* Follow-up paragraphs */}
          <p>
            The company grew to the point where I had two full–time staff
            helping me with up to 10 clients per month! People started reaching
            out to me for mentoring / coaching help and my business coaching
            grew organically.
          </p>
          <p>
            I invested in a year–long coaching program in 2015 and officially
            launched my coaching business in January 2016.
          </p>
          <p>
            Since then I've helped women transition from PA jobs to full–time
            photographer, burned out wedding photographer to brand developer,
            wedding blogger to a business coach, struggling entrepreneur to
            fully booked out web design business... the list goes on.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20 text-center">
        {/* Uppercase intro */}
        <p className="text-xs uppercase tracking-widest max-w-3xl mx-auto text-gray-700">
          The point is you can transform, evolve and step into who you want to
          become{" "}
          <span className="text-black font-serif text-lg align-middle">
            both
          </span>
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-10">
          in your life and business.
        </h2>

        {/* Supporting paragraphs */}
        <div className="text-[17px] text-gray-800 font-light leading-relaxed max-w-3xl mx-auto space-y-6">
          <p>
            I know how scary it can be to follow your dreams and go for it. I’ve
            moved continents 3 times, launched 3 new successful businesses,
            traveled to 25 countries and had a baby in the middle of all of
            this!
          </p>
          <p>
            I know that the dream you have for your extraordinary life is
            possible if you get clear, get support and then take action!
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12">
          <p className="font-handwriting text-5xl text-gray-400">Chanelle</p>
          <p className="text-xl font-serif mt-[-8px]">Segerius-Bruce</p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white uppercase text-sm tracking-widest px-6 py-3 shadow-md">
            › Book an Alignment Call
          </button>
        </div>
      </section>

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
        <div className="absolute bottom-12 w-full text-center px-4 z-10">
          <h2 className="text-2xl md:text-4xl font-serif text-black">
            What are you being called to do?
          </h2>
          <p className="font-handwriting text-3xl md:text-5xl text-yellow-600 mt-2">
            it's time to thrive
          </p>
        </div>

        {/* Optional: dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent z-[1]" />
      </section>

      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div>
            <div className="relative mb-6">
              <Image
                src="/images/slider1.jpeg"
                alt="Voice Coaching"
                width={400}
                height={500}
                className="rounded-t-md"
              />
              <div className="w-16 h-8 bg-white mx-auto -mt-4 rounded-t-full z-10 relative">
                01
              </div>
            </div>
            {/* <p className="text-lg font-semibold text-gray-800">01</p> */}
            <h3 className="text-yellow-600 font-semibold mt-2 uppercase tracking-wider text-sm">
              Voice Coaching + Reviews
            </h3>
            <p className="text-gray-700 text-[15px] mt-2 leading-relaxed">
              Mentorship in your pocket with access Mon – Friday plus weekly
              reviews for copy and so on
            </p>
          </div>

          {/* Service 2 */}
          <div>
            <div className="relative mb-6">
              <Image
                src="/images/slider2.jpeg"
                alt="Live Launch Template"
                width={400}
                height={500}
                className="rounded-t-md"
              />
              <div className="w-16 h-8 bg-white mx-auto -mt-4 rounded-t-full z-10 relative">
                02
              </div>
            </div>
            {/* <p className="text-lg font-semibold text-gray-800">02</p> */}
            <h3 className="text-yellow-600 font-semibold mt-2 uppercase tracking-wider text-sm">
              Live Launch Template
            </h3>
            <p className="text-gray-700 text-[15px] mt-2 leading-relaxed">
              Every single task you need to do to have a successful course or
              group program launch done for you
            </p>
          </div>

          {/* Service 3 */}
          <div>
            <div className="relative mb-6">
              <Image
                src="/images/slider3.jpeg"
                alt="Amplify Your Brand"
                width={400}
                height={500}
                className="rounded-t-md"
              />
              <div className="w-16 h-8 bg-white mx-auto -mt-4 rounded-t-full z-10 relative">
                03
              </div>
            </div>
            {/* <p className="text-lg font-semibold text-gray-800">03</p> */}
            <h3 className="text-yellow-600 font-semibold mt-2 uppercase tracking-wider text-sm">
              Amplify Your Brand
            </h3>
            <p className="text-gray-700 text-[15px] mt-2 leading-relaxed">
              1:1 custom package where you walk away with a brand + website that
              attracts your dream clients
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white uppercase text-sm tracking-widest px-6 py-3 shadow-md">
            › Work with me page
          </button>
        </div>
      </section>

      <section
        className="relative bg-white bg-cover bg-center py-20 px-6 md:px-12 text-center"
        style={{ backgroundImage: "url('/images/slider3.jpeg')" }}
      >
        <h2 className="font-handwriting text-4xl text-yellow-600 mb-8">
          Client Results
        </h2>

        {/* Keyed quote for proper animation */}
        <div
          key={testimonialIndex}
          className="transition-opacity duration-700 ease-in-out text-xl text-gray-800 max-w-3xl mx-auto min-h-[100px] opacity-100"
        >
          <p className="italic">“{testimonials[testimonialIndex].quote}”</p>
          <p className="mt-4 font-semibold italic">
            – {testimonials[testimonialIndex].author}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                testimonialIndex === i ? "bg-yellow-400" : "bg-yellow-100"
              } transition-all`}
            />
          ))}
        </div>
      </section>

      <section className="relative w-full h-[500px]">
        {/* Background Image */}
        <Image
          src="/images/slider2.jpeg"
          alt="Facebook Group Cover"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay CTA Button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button className="bg-white border border-yellow-500 text-yellow-700 uppercase tracking-wider px-6 py-3 text-sm shadow-md hover:bg-yellow-50 transition">
            Join the Facebook Group
          </button>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-12">
          Latest Blog Posts
        </h2>

        {/* Blog content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 transition-all duration-700">
          {/* Image */}
          <div className="w-full md:w-1/2 relative aspect-[4/3]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="uppercase text-xl font-semibold">{post.title}</h3>
            <p className="mt-4 text-gray-700 text-[16px] leading-relaxed">
              {post.excerpt}
            </p>
            <a
              href={post.link}
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white uppercase text-sm tracking-widest px-6 py-3 mt-6 shadow-md"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {blogPosts.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === blogIndex ? "bg-yellow-500" : "bg-gray-200"
              } transition-all`}
            />
          ))}
        </div>
      </section>

      <section className="relative bg-white text-center py-20 px-6">
        {/* Background splatter */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gold-splatter-bg.png"
            alt="Gold splatter background"
            fill
            className="object-cover object-center opacity-80"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif">
            <span className="font-handwriting text-yellow-600">My life on</span>{" "}
            <span className="ml-2">INSTAGRAM</span>
          </h2>

          <div className="mt-16">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white uppercase text-sm tracking-wider px-8 py-4 shadow-md">
              › Join the Build Your Brand Online FB Group
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-white h-[650px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/slider2.jpeg"
          alt="Desk and pen background"
          fill
          className="object-cover object-center"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-20 text-black h-full">
          {/* Left - Logo & Footer */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <p className="font-handwriting text-6xl text-gray-300 leading-none">
                Chanelle
              </p>
              <p className="font-serif text-2xl font-medium -mt-4">
                Segerius Bruce
              </p>
            </div>

            <p className="text-sm text-gray-800">
              © 2025 Segerius-Bruce Coaching
            </p>
            <p className="text-sm underline text-yellow-700">Privacy Policy</p>
            <p className="text-sm text-gray-700">
              Website by Segerius-Bruce Coaching
            </p>
          </div>

          {/* Right - Form */}
          <div className="w-full md:w-[450px] mt-12 md:mt-0 space-y-4">
            <h2 className="text-xl uppercase tracking-wider">
              Free{" "}
              <span className="font-handwriting text-3xl">Masterclass</span>
            </h2>
            <p className="text-sm text-gray-800">
              3 Insider secrets to adding mentoring, coaching or training as an
              extra arm to your business (instant access)
            </p>

            <input
              type="text"
              placeholder="First Name*"
              className="w-full border border-yellow-500 px-4 py-2 mt-2"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-yellow-500 px-4 py-2"
            />

            <label className="text-sm flex items-start gap-2 mt-2">
              <input type="checkbox" className="mt-1" />I agree to receiving
              occasional marketing emails from Segerius-Bruce Coaching and the{" "}
              <a href="#" className="text-yellow-700 underline">
                T&Cs & privacy policy
              </a>
              .
            </label>

            <button className="w-full bg-[#FFD700] hover:bg-yellow-700 text-white py-3 uppercase tracking-wider mt-4">
              Register Now!
            </button>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="relative z-10 text-center mt-10 space-y-4">
          {/* Icons */}
          <div className="flex justify-center space-x-6 text-xl mt-10">
            <i className="fab fa-instagram" />
            <i className="fab fa-facebook" />
            <i className="fab fa-pinterest" />
            <i className="fab fa-envelope" />
          </div>

          {/* Footer Nav */}
          <div className="mt-6 text-sm bg-red-500 text-black space-x-6">
            <a href="#" className="hover:text-yellow-600">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Client Results</a>
            <a href="#">Work With Me</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <p className="text-xs text-gray-500">Member Login</p>
        </div>
      </section>
    </>
  );
}
