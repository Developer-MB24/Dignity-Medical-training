import Footer from '@/components/client/common/Footer';
import Header from '@/components/client/common/Header';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <>
      <Header token={undefined} />
      <div className="bg-gray-50 min-h-screen">
        
        <header className="text-center py-10 bg-white shadow-sm">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-2">
            437 inspirational designs, illustrations, and graphic elements from the world’s best designers.
          </p>
          
        </header>

        {/* Gallery Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12 max-w-7xl mx-auto">
          <Card
            imageUrl="/coursesimage/course1.png"
            profileImage="/coursesimage/course1.png"
            title="ABOUT CAST"
            likes={357}
            views="59k"
          />
          <Card
            imageUrl="/coursesimage/new.jpg"
            profileImage="/coursesimage/new.jpg"
            title="OUR VISION"
            likes={147}
            views="25.4k"
          />
          <Card
            imageUrl="/coursesimage/course1.png"
            profileImage="/coursesimage/course1.png"
            title="Meet Our Team"
            likes={628}
            views="325k"
          />
          <Card
            imageUrl="/coursesimage/course1.png"
            profileImage="/coursesimage/course1.png"
            title="OUR TEAMWORK"
            likes={628}
            views="320k"
          />
          <Card
            imageUrl="/coursesimage/course1.png"
            profileImage="/coursesimage/course1.png"
            title="INSPIRATION"
            likes={547}
            views="150k"
          />
          <Card
            imageUrl="/coursesimage/course1.png"
            profileImage="/coursesimage/course1.png"
            title="INSPIRATION"
            likes={547}
            views="150k"
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

// Card Component
interface CardProps {
  imageUrl: string;
  profileImage: string;
  title: string;
  likes: number;
  views: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, profileImage, title, likes, views }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="flex items-center justify-between px-4 py-4">
        {/*  Profile Image and Title */}
        <div className="flex items-center">
          <img
            src={profileImage}
            alt={title}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
          />
          <h2 className="text-lg font-semibold text-gray-800 ml-3">{title}</h2>
        </div>

        {/*  Likes and Views */}
        <div className="flex items-center text-gray-500 text-sm space-x-4">
          <span>❤️ {likes}</span>
          <span>👁️ {views}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
