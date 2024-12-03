import React from "react";
import Header from "@/components/client/common/Header";
import Footer from "@/components/client/common/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header token={undefined} />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="flex flex-col bg-goldlight text-white py-24">
          <div className="max-w-7xl mx-auto px-6 gap-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="px-5 lg:w-1/2">
                <p className="text-yellow-400 text-lg font-semibold mb-2">
                  ABOUT US
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  We’re on a mission to empower students worldwide
                </h1>
              </div>
              <div className="px-5 lg:w-1/2">
                <p className="text-lg mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  odit delectus laboriosam quasi veritatis nesciunt.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center lg:justify-end mt-[-80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 max-w-7xl mx-auto">
            <img
              src="/coursesimage/course14.png"
              alt="Collaboration"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <img
              src="/coursesimage/course14.png"
              alt="Teamwork"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <img
              src="/coursesimage/course14.png"
              alt="Discussion"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        {/* section2 */}
        <section className="py-16 bg-white">
          <div className="text-center mb-16 px-4">
            <blockquote className="text-3xl font-semibold text-gray-800 italic mb-6 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quasi tenetur repudiandae ipsa explicabo. Non perferendis dicta
              asperiores nisi harum necessitatibus illo, obcaecati sed eaque.
            </blockquote>
            <cite className="text-gray-500 text-lg">
              - Master Bazar, The Light in the Heart
            </cite>
          </div>

          {/* Vision, and Mission */}
          <div className="bg-gray-50 py-12 px-8">
            <div className="max-w-7xl mx-auto px-6 space-y-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <h3 className="lg:w-2/5 text-xl font-bold text-center lg:text-left">
                  Our Founding Story
                </h3>
                <p className="lg:w-3/5 text-gray-600 leading-relaxed text-center lg:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, ut consectetur? Saepe magni quidem quasi sed corrupti
                  eligendi consequatur iste adipisci fugiat unde suscipit
                  dignissimos, nisi animi temporibus voluptatum ipsam? Unde
                  officiis tempora perspiciatis quod qui ratione? Cupiditate,
                  incidunt itaque! Nisi distinctio aliquid ad libero et sequi
                  accusamus inventore praesentium veritatis.
                </p>
              </div>

              {/* Vision and Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="lg:w-4/5 space-y-4">
                  <h3 className=" text-xl font-bold text-center md:text-left">
                    Our Vision
                  </h3>
                  <p className=" text-gray-600 leading-relaxed text-center md:text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate, numquam expedita? Officia et voluptas voluptatem
                    mollitia vel unde eius impedit!
                  </p>
                </div>
                <div className=" space-y-4">
                  <h3 className="text-xl font-bold text-center md:text-left">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center md:text-left">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit rerum nam eos exercitationem neque assumenda
                    laboriosam repellendus. Adipisci, sed magnam?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-green-800">7K+</h3>
                <p className="text-gray-600 mt-2">Active Students</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800">30+</h3>
                <p className="text-gray-600 mt-2">Mentors</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800">1000+</h3>
                <p className="text-gray-600 mt-2">Total Courses</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800">50+</h3>
                <p className="text-gray-600 mt-2">Awards</p>
              </div>
            </div>
          </div>
        </section>

        {/* section3 */}

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className=" flex gap-8">
              <div className="lg:col-span-2 mb-10 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  World-Class Learning for Anyone, Anywhere
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit omnis assumenda consequatur sint. Eveniet sunt dolores
                  suscipit voluptas error saepe.
                </p>
              </div>

              {/* Card 1 */}
              <div className=" p-6 bg-gray-100 shadow">
                <h3 className="text-lg font-bold mb-4">
                  Curriculum Based on Industry Needs
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit omnis assumenda consequatur sint.
                </p>
              </div>

              {/* Card 2 */}
              <div className=" p-6 bg-green-900 text-white  shadow">
                <h3 className="text-lg font-bold mb-4">
                  Blended-Learning Method
                </h3>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit omnis assumenda consequatur sint.
                </p>
              </div>
            </div>

            {/* scond row */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-end gap-8 mt-10">
              {/* Card 3 */}
              <div className="p-6 bg-gray-100  shadow">
                <h3 className="text-lg font-bold mb-4">Certification</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit omnis assumenda consequatur sint.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-green-900 text-white  shadow">
                <h3 className="text-lg font-bold mb-4">
                  Rating "Auto-grading"
                </h3>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit omnis assumenda consequatur sint.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-6 bg-gray-100  shadow">
                <h3 className="text-lg font-bold mb-4">Ready to Work</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit omnis assumenda consequatur sint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* section5 */}

        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className=" flex flex-col pl-5">
              <p className="text-green-700 text-lg font-semibold  mb-2">
                THE TEACHERS
              </p>
              <h2 className="text-3xl font-bold  mb-3">
                Meet our professional and
              </h2>
              <h2 className="text-3xl font-bold  mb-10">
                experienced teachers in here.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {/*  1 */}
              <div className=" text-black p-4 ">
                <img
                  src="/coursesimage/course14.png"
                  alt="Willy Kedz"
                  className=" w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Willy Kedz</h3>
                <p className="text-sm">CEO & Founder</p>
              </div>

              {/*  2 */}
              <div className="text-black p-4">
                <img
                  src="/coursesimage/course14.png"
                  alt="Sophie Moor"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Sophie Moor</h3>
                <p className="text-sm">Chief Product Officer</p>
              </div>

              {/*  3 */}
              <div className="text-black p-4">
                <img
                  src="/coursesimage/course14.png"
                  alt="Natael Mors"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Natael Mors</h3>
                <p className="text-sm">Design Manager</p>
              </div>

              {/*  4 */}
              <div className="text-black p-4">
                <img
                  src="/coursesimage/course14.png"
                  alt="Aishy Kaspol"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Aishy Kaspol</h3>
                <p className="text-sm">Marketing Specialist</p>
              </div>

              {/*  5 */}
              <div className="text-black p-4">
                <img
                  src="/coursesimage/course14.png"
                  alt="Yolanda Tamara"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Yolanda Tamara</h3>
                <p className="text-sm">Senior Android Developer</p>
              </div>

              {/*  6 */}
              <div className="text-black p-4">
                <img
                  src="/coursesimage/course14.png"
                  alt="Vincent Rompes"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Vincent Rompes</h3>
                <p className="text-sm">Head of Engineering</p>
              </div>

              {/*  7 */}
              <div className="text-black p-4">
                <img
                  src="/coursesimage/course14.png"
                  alt="Aurielie Viez"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Aurielie Viez</h3>
                <p className="text-sm">Senior Product Designer</p>
              </div>

              {/*  8 */}
              <div className="text-black p-4">
                <img
                  src="/coursesimage/course14.png"
                  alt="Ritchie Vertma"
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Ritchie Vertma</h3>
                <p className="text-sm">VP Product Strategy</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
