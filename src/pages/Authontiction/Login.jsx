import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token and user info in localStorage
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div style={{
      alignItems:"center",
      paddingLeft: "700px",
      // width:"400px",
      // height :"550px",
      // left:"300px",
      //  border: "2px solid gray",
    }}>
    <Container>
      
      
      <Form onSubmit={handleLogin}>
        <Logo src="data:image/webp;base64,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" alt="Bluestock Logo" />
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Label>Email Address</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@gmail.com" required />

        <Label>
          Password <ForgotPassword href="/forgot">Forgot Password?</ForgotPassword>
        </Label>
        <PasswordWrapper>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <EyeIcon>👁</EyeIcon>
        </PasswordWrapper>

        <CheckboxWrapper>
          <Checkbox type="checkbox" checked={keepSignedIn} onChange={() => setKeepSignedIn(!keepSignedIn)} />
          Keep me signed in
        </CheckboxWrapper>

        <LoginButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </LoginButton>

        <Divider>or sign in with</Divider>

        <GoogleButton>
          <GoogleIcon><img src="https://th.bing.com/th/id/OIP.TqeyCH3WdV8fYko0lRlw4AHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Google" className="google" style={{
            width: "24px",
            height:"24px",
          }} /></GoogleIcon> Continue with Google
        </GoogleButton>

        <CreateAccount href="/signup">Create an account</CreateAccount>
      </Form>
    </Container>
    </div>
  );
};

export default Login;

// Styled Components



const Container = styled.div`
  width: 350px;
  height : 400px;
  max-width: 400px;
  
  
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
  item-align: center ;
`;

const Logo = styled.img`
  width: 310px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background:  ;
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
  color : rgba(25, 29, 35, 1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
  color: black;
`;

const PasswordWrapper = styled.div`
  position: relative;
  color:rgba(153, 157, 163, 1);
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 12px;
  cursor: pointer;
`;

const ForgotPassword = styled.a`
  float: right;
  font-size: 12px;
  color: rgba(99, 133, 255, 1);
  text-decoration: none;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color:rgba(25, 29, 35, 1);
  font-size:16px;
  font-weight: 300;
`;

const Checkbox = styled.input`
  margin-right: 5px;
  color:blue;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background: rgba(104, 92, 255, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    background: #5a4abf;
  }
`;

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

const CreateAccount = styled.a`
  display: block;
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
  color: rgba(63, 82, 255, 1);
  text-decoration: none;
  font-weight : 600;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;