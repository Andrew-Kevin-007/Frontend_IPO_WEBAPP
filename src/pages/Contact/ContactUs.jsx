import React from "react";

const ContactUS = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        marginTop: "8%",
        width: "95%",
        marginLeft: "2.5%",
      }}
    >
      <h2 style={{ fontSize: "48px", fontWeight: "600", marginBottom: "20px" }}>
        How Can We Help You ?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          // flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            width: "607px",
            height: "auto",
            // maxWidth: "300px",
            textAlign: "left",
          }}
        >
          <h3 className="text-[28px] font-normal pl-4 ">Email us</h3>
          <p className="text-[28px] font-normal text-[#667384]">One of our agents will respond at the earliest</p>
          <a
            href="mailto:hello@bluestock.in"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              color: "rgba(44, 82, 255, 1)",
              fontWeight: "500",
              marginTop: "10px",
              fontSize: "28px",
            }}
          >
            hello@bluestock.in <span>&#8594;</span>
          </a>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            width: "607px",
            height: "auto",
            // maxWidth: "300px",
            textAlign: "left",
          }}
        >
          <h3 className="text-[28px] font-normal pl-4 ">Chat us</h3>
          <p className="text-[28px] font-normal text-[#667384]">Available from 8:00AM to 5:00PM</p>
          <a
            href="#chat"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              color: "rgba(44, 82, 255, 1)",
              fontWeight: "500",
              marginTop: "10px",
              fontSize: "28px",
            }}
          >
            Open Chat <span>&#8594;</span>
          </a>
        </div>
      </div>

      <div
        style={{
          background: "rgba(68, 75, 229, 0.9)",
          // color: "rgba(255, 255, 255, 1)",
          padding: "40px",
          marginTop: "140px",
          borderRadius: "10px",

        }}
      >
        <h2 className="text-[64px] font-extrabold text-white">Interact With Us in Our Active Community</h2>
        <p className="text-white text-[30px] font-semibold text-center items-center">
          Ask questions or discuss anything related to investing or trading
          <br /> in the most active trading & investing community
        </p>
        <button
          style={{
            background: "black",
            color: "rgba(255, 255, 255, 1)",
            padding: "10px 20px",
            border: "none",
            borderRadius: "40px",
            marginTop: "20px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          JOIN NOW
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <div
          style={{
            background: "#f4f4f4",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "90%",
            maxWidth: "350px",
            alignItems:"start",
          }}
        >
          <h3 className="text-[28px] font-semibold ">Download Bluestock Mobile App</h3>

          <img
              src="https://th.bing.com/th/id/OIP.tTK48O-3dhK_KvsUNjW9qgHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="QR Code"
              style={{ width: "100%", maxWidth: "150px", margin: "10px 0" }}
            />
            <div>

          <div className="flex">
            
              <img
                src="https://th.bing.com/th/id/OIP.3wP9V692Y8Qu-AKxb_mNOQHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Google Play"
                style={{ width: "48px", height:"50px", maxWidth: "120px", margin: "5px" }}
              />
              <img
                src="data:image/webp;base64,UklGRsoDAABXRUJQVlA4IL4DAAAwJwCdASo/AeoAPp1OokylpKMiJTgIKLATiWlu4XBk/mNwp36Ajf3ZLKOh9MiD9RYmjyXfMI+3lbs2rjrNq46zauOs0i27BLm4Gb/uvtD7r7Q+e6DSEgIYqwDSmITT5W7Nq46gI2wgm1PDpgSh00+VuzarcN43/s6M1iYLSGbHUWxHn+PgBv+vUL6J46vvXAyRHuvn8rdm1W5UUyWQ52/kOednhPjJBz7Q+60oqWFrId1qga/HiVuzauBymoyGCgi66NsoCHdfaHPfTR9DuviJq2gIUfkO6+w0YJNn0Puvgn7C7vyr7Vx1mmtQ46lW7Nqs0BAwtFCafK1nUcteXKfDwUEXXRzeaC5KCPKCgX4NjrHWliWXmuM4u93qXB65QUEeT2hrRYwJIGL6363IS1sI3XBbtErsFBHlBQR5QUEeUD4AAP7+DIBYXoQ/yDJq0mpJp2JP6sq/gOjeAvqbwD0+kNuWJk2t0G3V6yrR9lKh+YoB6J3Y3NN8s2v/LEerGW0YBK2QX+mgDhSbpeB8t11V3zWlsTLmcwcKcGV5P0xjjb46XfDm4sSarW6rhmUK5UOqA7c+2Ex659uE025o9IzBBoZ3TKdAenSsCmJA1fsfnizqRmLz7+WfscIZdtRFuyiZELRG0XgA4z80CNxbubBMFENeYi0OUCBmbwwKlPIcelu4Tv6wP9wQTZp+K8X0sDhlZ9X4/NHBSbpZCnjfibZi/2q+HPDevQTONtgqgjIzlWIZjgnVVLf5VWT4P4SHRiSoCRh6vtWXXN2uk7G0Y1DW1BPDHn8EHBtTFE5COf6y+z62lYR5Jb6Ax0uReRnmg34JzbKecOobGNegOmvypxk4TmJiOTJVmnQqRgNpPmviieC/r7ESwRGn1FSIESZAkChAixTyFNFUz73DvMoNWZrL42ynyQ7rXLWVdsmlnAZGZRbSeWVCfzXkNnHJCUrXGN68MArOOoLE6jEGNwxNPcsPjXNDOptNiwwgRnHgJecA8VflvcROs1iTMjq2oK5XCzHGh4BtiKGHwgAdB61tnYEKr51I7iR3ZXqY+BV8d6xRnR4Ebr5l66i04dFi51AORGXgGNeSLh4gdwXPrK0MQBXwiBjzrVmgBVUHhr6nx1f1zA+WVptl+k3fytztQUH6RLU4Sv0pc7tuKQnT3UfGGLepTt0ectfLplVPlMbF8CTw36Uu0tXPwqIx2hpEp0bTWL/RNw1I/9AxoU7ty/Yv1TzuhAGZM6FDh+iRD4Mo0WDaQnnxIro27HjUaAE+oAAA"
                alt="App Store"
                style={{ width: "48px", height:"50px", maxWidth: "120px", margin: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
