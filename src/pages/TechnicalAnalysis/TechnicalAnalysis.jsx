import React from "react";

const courses = [
  {
    title: "Basics of Technical analysis",
    desc: "Understand price charts, candlestick patterns, and trends.",
    image: "https://th.bing.com/th/id/OIP.zdjwpRhmXfVbjm0u6wbkAQHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Candlestick Charts & Patterns",
    desc: "Learn to read and use candlestick charts effectively.",
    image: "https://th.bing.com/th/id/OIP.MXLnj2mltMHkYB0CUn7xBgHaH_?r=0&pid=ImgDet&w=184&h=198&c=7&dpr=1.3&cb=idpwebp2&o=7&rm=3",
  },
  {
    title: "Chart Patterns",
    desc: "Identify breakouts, head & shoulders, double tops etc.",
    image: "https://static.vecteezy.com/system/resources/previews/000/535/002/original/vector-circle-chart-circle-arrows-infographic-or-cycle-diagram-templates.jpg",
  },
  {
    title: "Technical Indicators",
    desc: "Know the common indicators like RSI, MACD and more.",
    image: "https://th.bing.com/th/id/OIP.8ouZpeaNIlbzjEwAY0SEUAHaFS?w=275&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Magic of Moving Averages",
    desc: "Explore EMA, SMA and their role in trends.",
    image: "https://th.bing.com/th/id/OIP.oF5l51pa2y8sPl83913DYgHaHa?r=0&pid=ImgDet&w=474&h=474&rs=1&cb=idpwebp2&o=7&rm=3",
  },
  {
    title: "The world of Fibonacci",
    desc: "Explore Fibonacci levels and ratios in stock charts.",
    image: "https://th.bing.com/th/id/OIP.izvosNv2Oa-_FIgQR0coGwHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  },
  {
    title: "Basics of Elliott Wave",
    desc: "Learn different wave structures for better analysis.",
    image: "https://th.bing.com/th/id/OIP.ATO4zb7gygPwfQnZvb8b4wHaE1?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Point and Figure Charts",
    desc: "Learn to plot and read P&F charts for trades.",
    image: "https://dotnettutorials.net/wp-content/uploads/2020/01/Head-and-Shoulder-Pattern-in-Detail.png",
  },
  {
    title: "Swing Trading",
    desc: "Discover the power of short-term trading patterns.",
    image: "https://th.bing.com/th/id/OIP.qkCPWtonLBoSvZvhxwJXfAHaD2?w=333&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Intraday Trading",
    desc: "Explore key elements for daily traders.",
    image: "https://th.bing.com/th/id/OIP.3CcJ88G5CpkIDilOXMI28gHaG6?w=227&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Trading Psychology",
    desc: "Master mindset, emotion control & discipline.",
    image: "https://th.bing.com/th/id/OIP.rnjuT5gSmpXJoyGV5-bgwgHaDI?w=321&h=148&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    title: "Intermarket analysis",
    desc: "See how various asset classes interact.",
    image: "https://th.bing.com/th?q=Straight+Line+Clip+Art+On+Graph&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  },
  {
    title: "Algo Trading",
    desc: "Use technical tools to automate strategies.",
    image: "https://th.bing.com/th/id/OIP.YW2KG74yxbPCS2xY1X57GQHaGK?w=225&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

const TechnicalAnalysis = () => {
  return (
    <div className="p-4 md:p-10 bg-white min-h-screen">
      <h1 className="text-[91px] sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10 text-center sm:text-left mt-20">
        Technical Analysis
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              // className="w-[282px] h-[259px] sm:w-24  sm:h-24 object-contain mb-4"
            />
            <h2 className="font-semibold text-base sm:text-lg mb-2 text-center">{course.title}</h2>
            <p className="text-gray-600 text-[16px] sm:text-sm mb-4 text-center">{course.desc}</p>
            <div className="flex flex-col sm:flex-row gap-[20px] mt-auto ">
              <h1 className="text-sm hover:underline">
                👁️141300 views
              </h1>
              <h1 className=" text-[16px]  hover:underline text-blue-700">
                View Details
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalAnalysis;
