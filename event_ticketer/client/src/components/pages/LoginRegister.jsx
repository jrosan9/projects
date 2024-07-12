import { useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../../slices/api";
import { Link, useNavigate } from "react-router-dom";

function LoginRegister() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [form, setForm] = useState(false);
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const result = await login(credentials).unwrap();
      // Dispatch login action with user and token
      dispatch(login(result));
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };
  const handleRegister = async (credentials) => {
    try {
      const result = await register(credentials).unwrap();
      // Dispatch register action with user and token
      dispatch(login(result));
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  const submit = async () => {
    if (form) {
      handleRegister();
    } else {
      handleLogin;
    }
    navigate("/");
  };
  return (
    <>
      <div id="form">
        <div className={"questionDiv"}>
          {form ? (
            <p>Already have an account?</p>
          ) : (
            <p>
              <br />
              Don't have an account?
            </p>
          )}
          <Link onClick={() => setForm(!form)}>
            {!form ? "Register" : "Login"}
          </Link>
        </div>
        <div className={"email_password_inputs"}>
          {!form ? (
            <p className={"inputName"}>Email or Username</p>
          ) : (
            <p>Email</p>
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            value={email}
          ></input>
          <p className={"inputName"}>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            value={password}
          ></input>
        </div>

        {form && (
          <>
            <input
              className={"form_input"}
              onChange={(e) => setFirstName(e.target.value)}
              type={"text"}
              value={firstname}
              placeholder={"first name..."}
            />
            {/* <p className={"inputName"}>Last Name</p> */}
            <input
              className={"form_input"}
              onChange={(e) => setLastName(e.target.value)}
              type={"text"}
              value={lastname}
              placeholder={"last name..."}
            />
            {/* <p className={"inputName"}>Username</p> */}
            <input
              className={"form_input"}
              onChange={(e) => SetUserName(e.target.value)}
              type={"text"}
              value={username}
              placeholder={"username..."}
            />
            {/* <p className={"inputName"}>Phone Number</p> */}
            <input
              className={"form_input"}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type={"tel"}
              value={phone_number}
              placeholder={"phone number..."}
            />
          </>
        )}
        <button onClick={submit} className={"form-button"}>
          Submit
        </button>
      </div>
    </>
  );
}
export default LoginRegister;
