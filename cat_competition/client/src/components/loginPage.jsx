import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useLoginMutation } from "../../slices/api";
import { useRegisterMutation } from "../../slices/api";
import { useEffect } from "react";

function LoginPage() {
  const [form, setForm] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    const submitMethod = form ? register : login;
    e.preventDefault();
    try {
      const credentials = form
        ? {
            subscriber_email: email,
            subscriber_name: firstName,
            subscriber_LastName: lastName,
            subscriber_PhoneNumber: phoneNumber,
          }
        : { subscriber_email: email };
      console.log("Submitting credentials:", credentials);

      const result = await submitMethod(credentials).unwrap();
      console.log(result);
      localStorage.setItem("authToken", result.token);
      dispatch({ type: "auth/loginSuccess", payload: result });

      if (submitMethod === "login") {
        alert("Successfully Logged in!");
      } else {
        alert("Successfully subscribed. Login to vote!");
      }

      navigate("/");
    } catch (err) {
      console.log("Login failed", err);
      alert("Login Failed. Please try again.");
      throw err;
    }
  };

  useEffect(() => {
    {
      form ? navigate("/auth/register") : navigate("/auth/login");
    }
  }, [form]);

  return (
    <>
      <p onClick={() => setForm(!form)}>Register</p>
      {!form ? (
        <>
          <div id="email_login_div">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email address"
              required
            />
          </div>
          <div id="submit_btn_div">
            <button onClick={handleSubmit}>submit</button>
          </div>
        </>
      ) : (
        <div id={"register_form"}>
          <p>First Name</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
          <p>Last Name</p>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
          <p>Mobile Number</p>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            required
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
      )}
    </>
  );
}

export default LoginPage;
