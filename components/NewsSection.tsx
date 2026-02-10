
import React from 'react';

const NewsSection: React.FC = () => {
  const stories = [
    {
      type: 'IMPACT',
      title: 'How CHROTA is improving water access in rural communities',
      date: 'December 2, 2025',
      image: 'https://picsum.photos/seed/water/400/500'
    },
    {
      type: 'HEALTH',
      title: 'New maternal health initiative launched in collaboration with local clinics',
      date: 'November 15, 2025',
      image: 'https://picsum.photos/seed/maternal/400/500'
    }
  ];

  return (
    <section className="bg-[#C5A07D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-4xl font-black mb-6">Latest from CHROTA</h2>
            <p className="text-lg mb-8 opacity-90">
              Discover the real-world impact of our development projects and health initiatives across Ethiopia.
            </p>
            <button className="self-start px-8 py-3 bg-white text-[#C5A07D] font-bold rounded-full hover:bg-gray-100 transition-colors">
              Read our stories ❯
            </button>
          </div>

          {stories.map((story, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col group cursor-pointer">
              <div className="h-64 w-full overflow-hidden">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                   <span className="text-[#C5A07D] font-black text-xs tracking-widest uppercase">{story.type}</span>
                   <h3 className="text-xl font-bold text-[#1B3B5F] mt-2 leading-tight group-hover:text-[#C5A07D]">
                     {story.title}
                   </h3>
                </div>
                <p className="text-gray-500 text-sm mt-6">{story.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
