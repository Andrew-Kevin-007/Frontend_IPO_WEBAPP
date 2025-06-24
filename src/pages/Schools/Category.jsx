import React from "react";

const categories = [
  {
    title: "Basic Finance",
    desc: "Learn to manage money, choose investments wisely, and achieve financial goals.",
    modules: 4,
    views: "504653",
    icon: "https://th.bing.com/th/id/OIP.g970wWc4BN2WvVjo26fXKAHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&cb=idpwebp2&o=7&rm=3",
  },
  {
    title: "Beginners Stock Markets",
    desc: "Learn stock market terminologies, macroeconomic indicators, IPOs and charts.",
    modules: 6,
    views: "392296",
    icon: "https://th.bing.com/th/id/OIP._UDbIG1J4iunR7t4uukfzgHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Stock Investing",
    desc: "Explore stock investment basics, analysis, modelling and strategies.",
    modules: 10,
    views: "300086",
    icon: "https://www.creativefabrica.com/wp-content/uploads/2021/09/10/Cryptocurrency-Amp-Coin-Candles-Concept-Graphics-17098980-1.jpg",
  },
  {
    title: "Technical Analysis",
    desc: "Explore basic to advanced topics for effective trading.",
    modules: 13,
    views: "111382",
    icon: "https://th.bing.com/th/id/OIP.D6uIXvxxtz3J3bFLDEGSggAAAA?w=157&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Derivatives",
    desc: "Become familiar with the principles and strategies of derivatives trading.",
    modules: 4,
    views: "325175",
    icon: "https://th.bing.com/th/id/OIP.QEeR6FMHq9wxEmtTFC07NgHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&cb=idpwebp2&o=7&rm=3",
  },
  {
    title: "Mutual Funds",
    desc: "Learn important mutual fund concepts for effective financial planning.",
    modules: 2,
    views: "71591",
    icon: "data:image/webp;base64,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",
  },
  {
    title: "Banking & Insurance",
    desc: "Learn the basics of banking and insurance for sound financial management.",
    modules: 8,
    views: "207262",
    icon: "https://th.bing.com/th/id/OIP.fcdtm_TsVbNe8cWBLP-m9QHaHa?w=219&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Financial Planning",
    desc: "Learn about thorough financial planning strategies and services.",
    modules: 8,
    views: "135885",
    icon: "https://th.bing.com/th/id/OIP.Ca5EBBm9EC8LD2KPoXwXAwHaHC?w=171&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Cryptocurrency",
    desc: "Gain insights into the world of cryptocurrencies and blockchain.",
    modules: 2,
    views: "21728",
    icon: "https://th.bing.com/th/id/OIP.c3IUhOIxa_YxhEkoXzgg1AHaHa?w=193&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Alternative Investments",
    desc: "Explore various alternative investments like debt, commodity, gold, currency, etc.",
    modules: 6,
    views: "71183",
    icon: "https://th.bing.com/th/id/OIP.trvFgvToPsEESalVMMWXWwHaEK?r=0&pid=ImgDet&w=184&h=103&c=7&dpr=1.3&cb=idpwebp2&o=7&rm=3",
  },
  {
    title: "Book Summary",
    desc: "Get summaries of popular finance books.",
    modules: 37,
    views: "740586",
    icon: "https://th.bing.com/th/id/OIP.ett6vhmTu72F_vm_KCEdHAHaHa?w=217&h=217&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

const CategoryCard = ({ title, desc, modules, views, icon }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition pt-7 ">
      <img src={icon} alt={title} className="w-[110px] h-[110px] mb-3" />
      <h3 className="font-semibold text-[23px]">{title}</h3>
      <p className="text-[23px] text-gray-600 mt-1 line-clamp-2">{desc}</p>
      <div className="flex items-center justify-between text-sm mt-3 text-gray-700">
        <span>📙 {modules} Modules</span>
        <span>👁️ {views} views</span>
      </div>
      <div className="text-blue-600 mt-2 font-medium text-sm"><a href="/TechnicalAnalysis">View Details &gt;&gt;</a></div>
    </div>
  );
};

const CategoriesGrid = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto pt-32 ">
      <div className="text-[16px] text-gray-600 mb-2 font-medium ">
        Home &gt; <span className="text-blue-700">Stock School</span>
      </div>
      <h1 className="text-5xl font-bold mb-1">Categories</h1>
      <p className="text-gray-600 mb-6">Begin your financial market education by exploring a variety of categories.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {categories.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
