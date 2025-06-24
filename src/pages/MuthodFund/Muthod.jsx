import React from "react";

const fundCategories = ["Equity", "Debt", "Hybrid", "Commodity", "Other"];

const MutualFundCard = ({ logo, name, aum, expense, cagr, performance, risk, deviation, categoryAvg, allocation, privateBank }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 w-[1200px]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <img src={logo} alt={name} className="w-12 h-12 mr-4" />
          <div className="flex gap-5">
            <h2 className="text-[20px] font-semibold">{name}</h2>
            <p className="text-[20px] text-gray-600">AUM ₹ {aum} Cr.</p>
            <p className="text-[20px] text-gray-600">Expense Ratio {expense}%</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[20px] text-gray-500">5Y CAGR</p>
          <p className="text-green-600 font-semibold">{cagr}% ▲</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2 text-sm">
        <div>
          <h3 className="font-bold text-gray-700 text-[20px]">📈 Performance</h3>
          <p>The fund’s annualised performance has been <strong>{performance}%</strong> since inception.</p>
        </div>

        <div>
          <h3 className="font-bold text-[20px] text-gray-700">🚨 Risk</h3>
          <p>The fund has been categorised as <strong>Very High</strong> by SEBI and has a standard deviation of <strong>{deviation}%</strong> vs its category average of {categoryAvg}%.</p>
        </div>

        <div>
          <h3 className="font-bold text-[20px] text-gray-700">🎯 Composition</h3>
          <p>Large Cap makes up <strong>{allocation}%</strong> of the fund with the largest allocation towards Private Banks at <strong>{privateBank}%</strong>.</p>
        </div>
      </div>
    </div>
  );
};

const MutualFund = () => {
  return (
    <div className="container">
      <div className="header">
        <div>
          <h1 className="title">Large Cap Mutual Funds</h1>
          <p className="description">
            Large Cap funds invest in stocks of the top 100 companies in terms of full market capitalization.
            They invest at least 80% of their assets in large cap companies. These funds are relatively less
            risky than other market cap funds.
          </p>
        </div>
      </div>

      <h2 className="sectionTitle">Overview of Large Cap Mutual Funds</h2>

      <div className="content">
        <div className="sidebar">
          <h3>Fund categories</h3>
          {fundCategories.map((category, index) => (
            <div key={index} className="category">
              {category} <span>▼</span>
            </div>
          ))}
        </div>

        <div className="p-6 max-w-2xl mx-auto">
          <MutualFundCard
            logo="https://img.smartspends.com/static/images/amc_logo/canara-robeco.png"
            name="Canara Rob Bluechip Equity Fund"
            aum="10,816.61"
            expense="0.5"
            cagr="18.48"
            performance="15.3"
            risk="Very High"
            deviation="9.09"
            categoryAvg="9.61"
            allocation="89.57"
            privateBank="22.27"
          />
          <MutualFundCard
            logo="https://th.bing.com/th/id/OIP.8CcrblzmysqZ7unseMSk3wAAAA?w=142&h=150&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            name="Baroda BNP Paribas Large Cap Fund"
            aum="1,693.42"
            expense="0.92"
            cagr="18.19"
            performance="15.3"
            risk="Very High"
            deviation="9.05"
            categoryAvg="9.61"
            allocation="78.74"
            privateBank="18.98"
          />
          <MutualFundCard
            logo="https://assets.upstox.com/content/assets/images/fundhouse/0C00001QYY.png"
            name="Nippon India Large Cap Fund"
            aum="18,071.87"
            expense="0.82"
            cagr="18.33"
            performance="16.79"
            risk="Very High"
            deviation="9.67"
            categoryAvg="9.62"
            allocation="79.82"
            privateBank="21.48"
          />
        </div>
      </div>

      <style>{`
        .container {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin-top: 6%;
          padding-top: 90px;
          width : 100;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
          flex-wrap: wrap;
          width : 1500px;
          height: 422px;
        }
        .title {
          width : 875px;
          font-size: 71px;
          font-weight: bold;
          color : rgba(0, 0, 0, 1);
        }
        .description {
          font-size: 21px;
          color: rgba(0, 0, 0, 1);
          max-width: 760px;
        }
        .sectionTitle {
          font-size: 41px;
          font-weight: bold;
          margin-top: 30px;
          text-align: center;
          padding-left : 450px;
        }
        .content {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .sidebar {
          background: #eaeaea;
          padding: 15px;
          border-radius: 10px;
          width: 100%;
          
          max-width: 300px;
          
        }
        .category {
          font-size: 20px;
          padding: 10px;
          border-bottom: 1px solid #ccc;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
        }
        .fundsContainer {
          flex: 1;
          display: grid;
          gap: 15px;
          width: 100%;
        }
        .fundCard {
          background: white;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .fundHeader {
          display: flex;
          align-items: center;
        }
        .logo {
          width: 50px;
          height: 50px;
          margin-right: 15px;
        }
        .fundName {
          font-size: 18px;
          font-weight: bold;
        }
        .cagr {
          font-size: 14px;
          margin-top: 5px;
        }
        .greenText {
          color: green;
          font-weight: bold;
        }
        .risk {
          color: red;
        }
        .divider {
          margin: 10px 0;
          border: 0.5px solid #ddd;
        }
        @media (max-width: 768px) {
          .header {
          width :90%;
          margin-top:100px;
            
          }
          .content {
            width:100%;
          }
          .sidebar {
            width: 100%;
          }
          .fundHeader {
            
          }
          .logo {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default MutualFund;
