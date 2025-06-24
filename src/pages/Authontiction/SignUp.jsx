import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const generateUsername = (name) => {
    return name.toLowerCase().replace(/\s+/g, "") + Math.floor(Math.random() * 1000);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!isRobotChecked) {
      setError("Please verify that you are not a robot.");
      return;
    }

    const username = generateUsername(name);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, username }), // ✅ Include username
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed.");
      }

      setSuccess("Signup successful! Please log in.");
      setName("");
      setEmail("");
      setPassword("");
      setIsRobotChecked(false);
    } catch (error) {
      console.error("Signup Error:", error);
      setError(error.message);
    }
  };

  return (
  <div style={{
      width: "100%",
      height: "100%",
      paddingLeft: "650px",
      gap: "36px",
    }}>
      <Container>


        <Form onSubmit={handleSignUp}>
          <Logo src="https://bluestock.in/static/assets/logo/logo.jpg" alt="Bluestock Logo" style={{
            width: "290px",
            height: "36px",
          }} />
          <Title>Create an account</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <Label>Name</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />

          <Label>Email Address</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@bluestock.in" />

          <Label>Password</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••••••••" />

          <p style={{
            fontSize: "14px",
            fontWeight: "300",
            lineHeight: "20px",
            color: "rgba(25, 29, 35, 1)",
            textAlign: "start",
          }}>By continuing, you agree to our terms of service.</p>

          <ReCAPTCHA>
            <Checkbox type="checkbox" checked={isRobotChecked} onChange={() => setIsRobotChecked(!isRobotChecked)} />
            I'm not a robot
          </ReCAPTCHA>

          <SignUpButton type="submit">Sign up</SignUpButton>
          <Divider>or sign in with</Divider>

          {/* <p style={{
          color:"gray",
          padding:"8px",
          gap:"8px",
          fontSize:"20px",
        }}>Continue with Google</p> */}
          <GoogleButton>
            <GoogleIcon><img src="https://th.bing.com/th/id/OIP.TqeyCH3WdV8fYko0lRlw4AHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Google" className="google" style={{
              width: "24px",
              height: "24px",
            }} /></GoogleIcon> Continue with Google
          </GoogleButton>

        </Form>

      </Container>
    </div>


  );
};

export default SignUp;

// Styled Components
const Container = styled.div`
  // max-width: 400px;
  // margin: auto;
  text-align: center;
  padding: 100px 20px;
  width: 100%
`;

const Logo = styled.img`
  width: 140px;
  margin-bottom: 0px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: rgba(25, 29, 35, 1);
  padding-left: 40px;
  line-height: 28px;
`;

const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  color: rgba(25, 29, 35, 1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid rgba(75, 87, 104, 1);
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color:rgba(153, 157, 163, 1);
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ReCAPTCHA = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  color:black;
  font-size:16px;
  font-weight:300px;
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #6a5acd;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    background: #5a4abf;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 10px;
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #f1f1f1;
  color: rgba(75, 87, 104, 1);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

const GoogleIcon = styled.span`
  margin-right: 8px;
//   width:10px;
//   height:10px;
// `;


const Divider = styled.div`
  margin: 15px 0;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  line-height: 0.1em;
  width: 100%;
  position: relative;

  &:before {
    content: " ";
    display: block;
  }
`;