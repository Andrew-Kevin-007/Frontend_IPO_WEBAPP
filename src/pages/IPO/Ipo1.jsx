import React, { useRef } from "react";
import "./ipo1.css";


const IPO1 = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="ipo-container">
      <h2>IPO</h2>
      <p className="text-2xl">Following is the list of companies for IPO as of today.</p>

      <div className="ipo-header">
        <h3>Upcoming</h3>
        <button className="view-all-btn">View All</button>
      </div>
      <p className="ipo-info">
        Companies that have filed for an IPO with SEBI. Few details might be
        disclosed by the companies later on.
      </p>

      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>&#9665;</button>
        <div className="ipo-list" ref={scrollRef}>
          {[
            {
              img: "https://th.bing.com/th/id/OIP.tmbUXBC-9H0kXaanSLlqsQHaDH?w=341&h=147&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
              name: "Nova Agritech Ltd.",
              priceBand: "Rs 39 - 41",
              open: "2024-01-22",
              close: "2024-01-24",
              issueSize: "143.81 Cr.",
              issueType: "Book Built",
              listingDate: "2024-01-30",
            },
            {
              img: "https://th.bing.com/th/id/OIP.AKAm2A1FvCb5-lTThmWNywAAAA?w=154&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
              name: "EPACK Durable Ltd.",
              priceBand: "Rs 218 - 230",
              open: "2024-01-19",
              close: "2024-01-23",
              issueSize: "640.05 Cr.",
              issueType: "Book Built",
              listingDate: "2024-01-29",
            },
            {
              img: "https://th.bing.com/th/id/OIP.gn9nPTh9oV2VDX2EYIIvxgAAAA?w=285&h=73&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
              name: "RK Swamy Ltd.",
              priceBand: "Not Issued",
              open: "Not Issued",
              close: "Not Issued",
              issueSize: "Not Issued",
              issueType: "Book Built",
              listingDate: "Not Issued",
            },
            {
                img: "https://th.bing.com/th/id/OIP.7g2GkrV5ay0XcUXQ67jAjQHaE8?w=258&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                name: "Oravel Stays Ltd.",
                priceBand: "Not Issued",
                open: "Not Issued",
                close: "Not Issued",
                issueSize: "Not Issued",
                issueType: "Book Built",
                listingDate: "Not Issued",
              },
              {
                img: "https://th.bing.com/th/id/OIP.EorjdxanEn102xdxEiTpdAAAAA?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                name: "Imagine marketing Ltd.",
                priceBand: "Not Issued",
                open: "Not Issued",
                close: "Not Issued",
                issueSize: "Not Issued",
                issueType: "Book Built",
                listingDate: "Not Issued",
              },
          ].map((ipo, index) => (
            <div className="ipo-card" key={index}>
              <img src={ipo.img} alt={ipo.name} />
              <h3 className="ipo-name">{ipo.name}</h3>
              <p><strong>Price Band:</strong> {ipo.priceBand}</p>
              <p><strong>Open:</strong> {ipo.open}</p>
              <p><strong>Close:</strong> {ipo.close}</p>
              <p><strong>Issue Size:</strong> {ipo.issueSize}</p>
              <p><strong>Issue Type:</strong> <span className="highlight">{ipo.issueType}</span></p>
              <p><strong>Listing Date:</strong> {ipo.listingDate}</p>
              <div className="ipo-buttons">
                <button className="rhp-btn">RHP</button>
                <button className="drhp-btn">DRHP</button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>&#9655;</button>
      </div>
    </div>
  );
};

export default IPO1;
