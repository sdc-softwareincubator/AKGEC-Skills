import React from 'react';

interface NewsItem {
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
}

interface EventItem {
  title: string;
  date: string;
}

const NewsAndEvents: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: "Participation at DEFEXPO-2020",
      date: "April 24, 2020",
      category: "News",
      description: "DefExpo – 2020, an event of the Ministry of Defence, Government of...",
      image: "/defexo-361x220xc.jpg"
    },
    {
      title: "Training for IRIMEE Jamalpur, Bihar",
      date: "April 24, 2020",
      category: "News",
      description: "AKGEC in its endeavour to promote skilling of industry professionals using its...",
      image: "/irimee-361x220xc.jpg"
    }
  ];

  const events: EventItem[] = [
    {
      title: "Robot Operation & Application",
      date: "April 25, 2020"
    },
    {
      title: "Participation in International Welding Congress and Weld India 2020 at Mumbai",
      date: "February 6, 2020"
    },
    {
      title: "Indian Railways: IRIMEE, Jamalpur Bihar",
      date: "February 14, 2020"
    },
    {
      title: "IIW- National Skill Competition for Best Welder Northern Region (6th-7th Nov'19)",
      date: "November 6, 2019"
    },
    {
      title: "Memorandum of Understanding with BOSCH Ltd (14th Nov'19)",
      date: "November 14, 2019"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto ">
      <div className="w-full md:w-2/3 px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-blue-950 text-3xl font-bold">Latest News</h2>
          <a href="/news" className="text-[#9fdaec] hover:underline">All News</a>
        </div>
        <div className="h-1 w-12 bg-amber-400"></div>
        
        <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={news.image} alt={news.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl text-blue-950 font-bold mb-3 hover:text-[#9fdaec] cursor-pointer transition-colors">
                  {news.title}
                </h3>
                <div className="flex gap-4 text-base font-medium text-[#9fdaec] mb-4">
                  <span>{news.date}</span>
                  <span className="text-[#9fdaec]">{news.category}</span>
                </div>
                <p className="text-gray-600 mb-6 font-medium text-base leading-relaxed">
                  {news.description}
                </p>
                <button className="inline-flex items-center text-blue-950 hover:text-[#057dff] font-medium border border-blue-950 rounded-md px-6 py-2.5 transition-colors duration-300 hover:border-[#057dff]">
                  Read more ›
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-[#19396c] text-white p-8 font-sans h-fit">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recent Events</h2>
          <a href="/events" className="text-white hover:underline font-medium">All Events</a>
        </div>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="border-b border-opacity-20 last:border-0 pb-5 font-medium last:pb-0">
              <h3 className="text-lg font-semibold mb-3 cursor-pointer text-[#9fdaec] transition-colors">
                {event.title}
              </h3>
              <div className="flex items-center text-sm text-white">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents; 