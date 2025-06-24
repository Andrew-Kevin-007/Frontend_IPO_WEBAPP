// BrokerFullComparison.jsx

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./BrokerCompare.css";

const data = [
  { year: "2016-17", angel: 2, zerodha: 2 },
  { year: "2017-18", angel: 3, zerodha: 3 },
  { year: "2018-19", angel: 4, zerodha: 4 },
  { year: "2019-20", angel: 7, zerodha: 8 },
  { year: "2020-21", angel: 18, zerodha: 20 },
  { year: "2021-22", angel: 38, zerodha: 60 },
  { year: "2022-23", angel: 45, zerodha: 72 },
  { year: "2023-24", angel: 49, zerodha: 75 },
];

const BrokerFullComparison = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <ul>
          <li>📊 Active Clients</li>
          <li>📅 Charges</li>
          <li>🧾 Complaints</li>
          <li>💰 Share Holding</li>
          <li>📈 Pros & Cons</li>
          <li>📉 Ratings</li>
          <li>📂 Financials</li>
        </ul>
      </div>

      <div className="content">
        <div className="comparison">
          <div className="broker-card">
            <img src="https://th.bing.com/th/id/OIP.dFk-omU-lyzOGZ2z4Me6QAHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Angel One" />
            <h3>Angel One</h3>
            <div className="stars">⭐️⭐️⭐️⭐️☆</div>
            <h2>4.7</h2>
            <button>Open Demat Account</button>
          </div>

          <div className="vs">vs</div>

          <div className="broker-card">
            <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha" />
            <h3>Zerodha</h3>
            <div className="stars">⭐️⭐️⭐️⭐️☆</div>
            <h2>4.6</h2>
            <button>Open Demat Account</button>
          </div>
        </div>

        <h3>Active Clients</h3>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="angel" stroke="#007bff" name="Angel One" />
          <Line type="monotone" dataKey="zerodha" stroke="#ff7300" name="Zerodha" />
        </LineChart>

        <h3>Account Opening and Maintenance Charges</h3>
        <table>
          <thead>
            <tr>
              <th>Charges</th>
              <th>Angel One</th>
              <th>Zerodha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Opening Charges</td>
              <td>0</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Account Maintenance Charges</td>
              <td>₹0 (1st year), ₹20/month</td>
              <td>₹300/year</td>
            </tr>
          </tbody>
        </table>

        <h3>Brokerage Charges</h3>
        <table>
          <thead>
            <tr>
              <th>Brokerage Charges</th>
              <th>Angel One</th>
              <th>Zerodha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intraday</td>
              <td>₹20 or 0.25%</td>
              <td>₹20 or 0.03%</td>
            </tr>
            <tr>
              <td>Futures</td>
              <td>₹20 or 0.25%</td>
              <td>₹20 or 0.03%</td>
            </tr>
            <tr>
              <td>Options</td>
              <td>₹20 or 0.25%</td>
              <td>₹20 per order</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>Zero</td>
              <td>Zero</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrokerFullComparison;
