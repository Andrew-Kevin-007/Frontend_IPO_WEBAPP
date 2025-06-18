import React, { useState, useEffect } from "react";
const Job = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>

      <p style={styles.breadcrumb}>
        <span style={styles.link}>Home</span> &gt; Careers
      </p>

      <div style={styles.headingSection}>
        <h1 style={styles.heading}>Together, Let’s Build The Future Of Fintech!</h1>
        <p style={styles.description}>
          Join Bluestock Fintech to create disruptive fin-tech products, while working from anywhere!
        </p>
        <button style={styles.jobButton}>See Job Openings</button>
      </div>

      {/* <img src="https://th.bing.com/th/id/OIP.Lan2nvI1wNGSFZORnuk-mwAAAA?w=100&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Job Banner" style={styles.bannerImage} /> */}

      <div style={isMobile ? styles.downloadSectionMobile : styles.downloadSection}>
        <img
          src="https://th.bing.com/th/id/OIP.mupbVkxdlgPQ_N_cTzjmAgHaOf?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Bluestock App"
          style={isMobile ? styles.appImageMobile : styles.appImage}
        />

        <div>
          <p style={styles.downloadText}>
            4.4 K+ <br/> DOWNLOADS
          </p>
        </div>

        <div style={styles.downloadContent}>

          <h2 style={styles.subHeading}>Enjoy Free Learning, Analytics Club</h2>
          <p style={styles.smallText}>Get the link to download the App</p>
          <div style={styles.inputContainer}>
            <input type="text" placeholder="Enter your phone number" style={styles.input} />
            <button style={styles.sendButton}>Send App Link</button>
          </div>
          <div style={styles.storeIcons}>
            <img src="https://th.bing.com/th/id/OIP.tTK48O-3dhK_KvsUNjW9qgHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="QR Code" style={styles.qrCode} />
            <img src="https://th.bing.com/th/id/OIP.j2Btsq8I7-r4u4OQFH404AHaEy?w=279&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Google Play" style={styles.storeIcon} />
            
          </div>
        </div>
      </div>

      <p style={styles.footer}>
        All official communication with the HR team at Bluestock Fintech will be through{" "}
        <span style={styles.email}>hr@bluestock.in</span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
    width: "95%",
    marginTop: "10%",
    textAlign: "center",
    marginLeft: "10%",
    // paddingRight:"10%",
  },
  breadcrumb: {
    fontSize: "16px",
    color: "#666",
    fontWeight: "500",
    textAlign: "left",
  },
  link: {
    color: "#4f46e5",
    cursor: "pointer",
    fontWeight: "bold",
  },
  headingSection: {
    marginTop: "20px",
    textAlign: "start",
    width: "900px",
  },
  heading: {
    fontSize: "62px",
    fontWeight: "600",
    color: "rgba(61, 60, 60, 1)",
    paddingLeft: "19px",
  },
  description: {
    fontSize: "30px",
    color: "rgba(42, 57, 78, 0.9)",
    marginBottom: "40px",
  },
  jobButton: {
    backgroundColor: "rgba(63, 91, 217, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: "12px 69px",
    border: "none",
    borderRadius: "5px",
    fontSize: "24px",
    cursor: "pointer",
    margin: "10px",
  },
  bannerImage: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "20px",
  },
  downloadSection: {
    backgroundColor: "rgba(63, 91, 217, 1)",
    color: "white",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    padding: "20px",
    width:"1590px",
    height:"496px",
  },
  downloadSectionMobile: {
    // backgroundColor: "rgba(63, 91, 217, 1)",
    // color: "white",
    // borderRadius: "22px",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // marginTop: "100px",
    // padding: "15px",

  },
  appImage: {
    width: "403px",
    height: "482px",
    marginRight: "20px",
    marginTop:"13px",
  },
  appImageMobile: {
    // width: "403px",
    // height: "auto",
    // marginBottom: "10px",
  },
  downloadContent: {
    textAlign: "left",
    maxWidth: "800px",
    paddingLeft:"50px"
  },
  downloadText: {
    fontSize: "42px",
    fontWeight: "600",
    marginBottom: "250px",
    color:"rgba(255, 201, 2, 1)",
    letterSpacing:"11%",
  },
  highlight: {
    color: "yellow",
  },
  subHeading: {
    color:"rgba(255, 255, 255, 1)",
    fontSize: "48px",
    fontWeight: "400",
    paddingBottom:"0px",
  },
  smallText: {
    fontSize: "24px",
    fontWeight:"400",
    marginBottom: "15px",
    color:"rgba(255, 255, 255, 1)",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    flexWrap: "wrap",
    color:"rgba(255, 255, 255, 1)",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minWidth: "180px",
    color:"rgba(255, 255, 255, 1)",
    background:"rgba(255, 255, 255, 1)",
  },
  sendButton: {
    backgroundColor: "rgba(46, 81, 255, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  storeIcons: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
  },
  qrCode: {
    width: "147px",
    height: "142px",
    paddingBottom:"9px",
  },
  storeIcon: {
    width: "182px",
    height: "130px",
    paddingBottom:"5px",
  },
  footer: {
    fontSize: "31px",
    color: "rgba(0, 0, 0, 1)",
    marginTop: "40px",
    fontWeight:"400",
  },
  email: {
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "600",
  },
};

export default Job;
