import { Dialog } from "@mui/material";

import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

import "./LoginDialog.css";


const LoginDialog = () => {

  const { setAccount } = useContext(AccountContext)

  const dialogStyle = {
    height: "80%",
    width: "70%",
    maxWidth: "100%",
    overflow: 'hidden'
  };


  const loginSuccess = (res) => {
    const decode = jwt_decode(res.credential);
    setAccount(decode);
  }

  const loginFailed = (res) => {
    console.log('Login Failed', res);
  }

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <div className="login">
        <div className="login_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt=""
          />
          <div className="login_text">
            <h2>Sign in to WhatsApp</h2>
          </div>
          <GoogleLogin
            onSuccess={loginSuccess}
            onError={loginFailed}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default LoginDialog;
