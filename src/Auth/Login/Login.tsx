import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string
  ) => {
    e.preventDefault();
    switch (value) {
      case "userName":
        setUsername(e.target.value);
        break;
      case "password":
        setPassWord(e.target.value);

        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    const reqObj = {
      login_id: username,
      password: password,
    };
    const config = {
      headers: {
        api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
      },
    };
    const url = "https://react-tasks-nodejs-api.herokuapp.com/user/login";
    await axios.post(url, reqObj, config).then((res: any) => {
      if (res.status == true) {
        localStorage.setItem("resObj", JSON.stringify(res.data.message));
        navigate("/home");
      } else if (!res.status == false) {
        alert(res.data.message.alert_message);
      }
    });
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
          <div className=" font-bold text-white flex flex-col justify-center">
            <h2 className="px-8 mx-auto">Login</h2>
            <span className="px-8 mx-auto my-3">
              Enter Your Account Login Details
            </span>
            <form className="bg-blue-900 mx-auto  max-w-[300px] w-full p-8 px-8 rounded-lg">
              <Input
                value={username}
                onChange={(e) => {
                  handleChange(e, "userName");
                }}
                placeholder="Username"
                className="my-5 ,mx--5"
                id="input-with-icon-adornment"
                style={{ border: "none", backgroundColor: "blue" }}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonTwoToneIcon />
                  </InputAdornment>
                }
              />
              <Input
                value={password}
                onChange={(e) => {
                  handleChange(e, "password");
                }}
                placeholder="Password"
                className="my-5,mx--5"
                type="password"
                id="outlined-password-input"
                style={{ border: "none", backgroundColor: "blue" }}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
              <br />
              <Button
                onClick={handleSubmit}
                className="  w-full  mx--5 max-w-[225px]"
                style={{ marginTop: 10, backgroundColor: "yellow" }}
              >
                Sign In
              </Button>
             <Link to="/Register">Register</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
