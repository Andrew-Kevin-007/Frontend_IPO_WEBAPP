import React from "react";
const investors = [
  {
    name: "Rakesh Jhunjhunwala",
    image: "https://th.bing.com/th/id/OIP.BeMmo4ioXnakYipQhtQXyQHaE8?w=299&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // Replace with actual image path
    description: "He started investing in the 90s",
  },
  {
    name: "Anil Goel",
    image: "https://th.bing.com/th/id/OIP.t6smiRqgcKaS0YRFNGWvywHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 80s",
  },
  {
    name: "Ashish Dhawan",
    image: "https://th.bing.com/th/id/OIP.zaWUDVyKnuOGKKq9TuYBfwHaE8?w=246&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 90s",
  },
  {
    name: "Ashish Kacholia",
    image: "https://th.bing.com/th/id/OIP.PxFISZExSv7FNnlMwd7iDwHaFi?w=232&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 90s",
  },
  {
    name: "Dolly Rajeev Khanna",
    image: "https://th.bing.com/th/id/OIP.3fax5UEUFyQZlJSRw-p6iwAAAA?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 90s",
  },
  {
    name: "Hemendra Kothari",
    image: "https://th.bing.com/th/id/OIP.ROFz5-v7IPyBbIBB-Q0aPQHaE8?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 80s",
  },
  {
    name: "Nemish Shah",
    image: "https://th.bing.com/th/id/OIP.H4dWQRozvh2QbtL_1Z3REgAAAA?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 90s",
  },
  {
    name: "Porinju Veliyath",
    image: "https://starsunfolded.com/wp-content/uploads/2023/07/Porinju-Veliyath.jpg",
    description: "He started investing in the 90s",
  },
  {
    name: "Radhakishan Damani",
    image: "https://th.bing.com/th/id/OIP.VhMRVlere0yyx_bxsPjFSwHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 90s",
  },
  {
    name: "Sunil Singhania",
    image: "https://th.bing.com/th/id/OIP.J1jVEI2QN2sTTQwDtQMkkgHaEK?w=245&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 90s",
  },
  {
    name: "Vijay Kedia",
    image: "https://th.bing.com/th/id/OIP.BpuFlcCy4pKJXP6T7XtycwHaE8?w=249&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He started investing in the 90s",
  },

  {
    name: "Anil Goel",
    image: "https://th.bing.com/th/id/OIP.t6smiRqgcKaS0YRFNGWvywHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "He starting inversment in the 90’s ",
  },
];

const Shark = () => {
  return (
    <div style={styles.container}>
      <h1 className="heading1" style={styles.heading} >Shark Investors</h1>
      <p style={styles.subheading}>
        Look into the portfolio of these Super Investors to find out their favourite stocks.
      </p>
      <input type="text" placeholder="Search by Name" style={styles.searchBox} />
      <div style={styles.grid}>
        {investors.map((investor, index) => (
          <div key={index} style={styles.card}>
            <img src={investor.image} alt={investor.name} style={styles.image} />
            <h3 style={styles.name}>{investor.name}</h3>
            <p style={styles.description}>{investor.description}</p>
            <button style={styles.button}>View Holdings</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {

   
  container: {
    paddingTop:"50px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f6f7ff",
    width:"1550px",
    height:"1800px",
    marginTop:"8%",
    marginLeft:"2.5%",
    paddingLeft:"50px",
    paddingRight:"20px"
  },
  heading: {
    fontSize: "37px",
    fontWeight: "bold",
    textAlign: "start",
    paddingLeft:"15px",
  },
  subheading: {
    fontSize: "17px",
    color: "rgba(0, 0, 0, 1)",
    marginBottom: "20px",
    textAlign: "start",
  },
  searchBox: {
    padding: "10px",
    color:"rgba(154, 154, 154, 1)",
    width: "250px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "90px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "308px",
    height: "180px",
    // borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
    alignItems: 'center',
  },
  name: {
    fontSize: "25px",
    fontWeight: "bold",
    color:"rgba(0, 0, 0, 1)",
  },
  description: {
    fontSize: "18px",
    color: "rgba(0, 0, 0, 1)",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "rgba(63, 82, 255, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "20px",
  },

  


};

styles["@media (max-width: 600px)"] = {
    container: {
      width: "100%",
      margin: "0 auto",
      padding: "0 10px",
    },
    grid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    },
    card: {
      padding: "10px",
    },
    image: {
      width: "70px",
      height: "70px",
    },
    name: {
      fontSize: "14px",
    },
    description: {
      fontSize: "10px",
    },
    button: {
      fontSize: "10px",
      padding: "6px 10px",
    },
  };

export default Shark;
