import { Button, Input, InputAdornment, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { countryData } from "../../Helpers/Data";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [referalId, setReferallId] = useState("");
  const navigate=useNavigate()
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string
  ) => {
    e.preventDefault();
    switch (value) {
      case "fullName":
        setFullName(e.target.value);

        break;
      case "userName":
        setUsername(e.target.value);
        break;
      case "mobile":
        setMobileno(e.target.value);

        break;
      case "email":
        setEmail(e.target.value);

        break;
      case "password":
        setPassWord(e.target.value);

        break;
      case "referallId":
        setReferallId(e.target.value);

        break;
      default:
        break;
    }
  };
  const handleSelect=(e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; })=>{
    e.preventDefault()
    setCountryCode(e.target.value)
  }

  const handleSubmit=async()=>{
    const reqObj={
      "full_name":fullname,
      "username":username,
      "referral_id" :referalId,
      "email_id":email,
      "country_row_id":countryCode,
      "mobile_number":mobileno,
      "password":password
      }
      const config = {
        headers:{
          api_key : "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
        }
      };
      const url = "https://react-tasks-nodejs-api.herokuapp.com/user/register"
      
      await axios.post(url,reqObj,config).then((res:any)=>{
        if(res.data.status==true)
        {
    localStorage.setItem("resObj",JSON.stringify(res.data.message))      
    navigate("/home")
      }
    else if (!res.status ==false){
      alert(res.data.message[Object.keys(res.data.message)[0]])
    }})
        
   
  }
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
          <div className=" font-bold text-white flex flex-col justify-center">
            <h2 className="px-8 mx-auto">Register</h2>
            <span className="px-8 mx-auto my-3">
              Create Your Company Account
            </span>
            <form className="bg-blue-900 mx-auto  max-w-[300px] w-full p-8 px-8 rounded-lg">
              <Input
                value={fullname}
                onChange={(e) => {
                  handleChange(e, "fullName");
                }}
                required={true}
                placeholder="Full Name *"
                className="mx--5 my-2 w-56"
                id="input-with-icon-adornment"
                style={{ border: "none", backgroundColor: "blue" }}
              ></Input>
              <Input
                value={username}
                onChange={(e) => {
                  handleChange(e, "userName");
                }}
                required={true}
                placeholder="Username *"
                className="my-2 w-56 mx--5"
                id="input-with-icon-adornment"
                style={{ border: "none", backgroundColor: "blue" }}
              ></Input>

              <Select
                className="my-2 mx--5 w-56 h-8"
                label="Select Country *"
                id="demo-simple-select"
                style={{ border: "none", backgroundColor: "blue" }}
                onChange={handleSelect}
              >
                {countryData.map((code:any,index:any)=>(<MenuItem key={index} value={code}>{code}</MenuItem>))}
              </Select>
              <Input
                value={mobileno}
                onChange={(e) => {
                  handleChange(e, "mobile");
                }}
                type="number"
                required={true}
                placeholder="Mobile Number *"
                className="my-2 w-56 mx--5"
                id="input-with-icon-adornment"
                style={{ border: "none", backgroundColor: "blue" }}
              ></Input>
              <Input
                value={email}
                onChange={(e) => {
                  handleChange(e, "email");
                }}
                type="email"
                required={true}
                placeholder="email  *"
                className="my-2 w-56 mx--5"
                id="input-with-icon-adornment"
                style={{ border: "none", backgroundColor: "blue" }}
              ></Input>

              <Input
                value={password}
                onChange={(e) => {
                  handleChange(e, "password");
                }}
                placeholder="Password"
                className="my-2 w-56 mx--5"
                type="password"
                id="outlined-password-input"
                style={{ border: "none", backgroundColor: "blue" }}
              />
              <Input
                value={referalId}
                onChange={(e) => {
                  handleChange(e, "referalId");
                }}
                placeholder="Referral Id"
                className="my-2 w-56 mx--5"
                id="input-with-icon-adornment"
                style={{ border: "none", backgroundColor: "blue" }}
              ></Input>

              <Button
              onClick={handleSubmit}
                className="  w-full  mx--5 max-w-[225px]"
                style={{ marginTop: 10, backgroundColor: "yellow" }}
              >
                Register
              </Button>
              <Link to="/">Login</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
