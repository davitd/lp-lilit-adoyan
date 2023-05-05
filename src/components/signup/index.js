import MuiTextField from "../mui-text-field";
import {
  Typography,
  TextField,
} from "@mui/material";

import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import navBar from "../../images/navigation-bar.png";
import pic from "../../images/pic.png";

import { iAmOptions, ageOptions, locationOptions } from "../constants";
import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoMobile1 from '../../images/mobile/logo-mobile1.png'
import logoMobile2 from '../../images/mobile/logo-mobile2.png'
import couple from '../../images/mobile/couple-mobile.png'

import useMediaQuery from "@mui/material/useMediaQuery";
import Mobile from "../mobile";
import Password from "../password";

function SignUp() {
  const matches = useMediaQuery("(min-width:901px)");

  const theme = createTheme({
    typography: {
      h1: matches
        ? {
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "30px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#3E352F",
            letterSpacing: "normal",
            lineHeight: "41px",
          }
        : {
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "14px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#3E352F",
            letterSpacing: "normal",
            lineHeight: "19px",
          },
      p: {
        fontFamily: "Manrope",
        fontStyle: "normal",
      },
      div: {
        fontFamily: "Manrope",
        fontStyle: "normal",
      },
      a: {
        fontFamily: "Manrope",
        fontStyle: "normal",
      },
    },
  });

  const [value, setValue] = useState({
    Iam: "a man looking for a woman",
    myAge: "",
    location: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState('');
  const [error, setError] = useState("");

  const MyButton = styled("button")(
 
      {
          textDecoration: "",
          width: "115px",
          height: "42px",
          background: `${!!!error ? "#F6A95F" : "#CBC8C5"}`,
          border: `${!error ? "1px solid #F6A95F" : "#CBC8C5"}`,
          borderRadius: "12px",
          color: `${!error ? "#3E352F" : " rgba(62, 53, 47, 0.3) "}`,
        }
  );
  const handleStartClick = () => {
    fetch("https://iconnect247.net/api/v2/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
        site_key: "no01",
      }),
    })
      .then((res) => {
        console.log(res, "hi");
        return res.json();
      })
      .then((result) => {
        console.log(result, "bye");
      })
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  };

  const checkEmail = () => {
    if (
     email&&email!=='razd22'&& !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,4})+$/.test(
        email
      )
    ) {
      setError(
        "Oops! There may be a mistake in your email address. Please check. If you've already signed up at our site, please use the login form."
      );
    } else {
      setError("");
    }
  };
  useEffect(()=>{checkEmail()},[email])
  const handleChangeIam = (event) =>
    setValue({ ...value, Iam: event.target.value });
  const handleChangeMyAge = (event) =>
    setValue({ ...value, myAge: event.target.value });
  const handleChangeLocation = (event) =>
    setValue({ ...value, location: event.target.value });
  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <div className="wid">
          {!matches && (
            <div>
              <img src={navBar} className="hamburger-mobile" alt='hamburger mobile'/>
            </div>
          )}{" "}
          <div className="start-wrapper">
            <div className="wr-wrapper">
              <div className="inner-wrapper">
                <ThemeProvider theme={theme}>
                  <Typography variant="h1">
                    GET LOVELY CUTIES IN YOUR AREA!{" "}
                  </Typography>
                </ThemeProvider>
                {matches ? (
                  <>
                    <MuiTextField
                      text="I am: "
                      value={value.Iam}
                      handleChange={handleChangeIam}
                      options={iAmOptions}
                    />
                    <MuiTextField
                      text="My age: "
                      value={value.myAge}
                      handleChange={handleChangeMyAge}
                      options={ageOptions}
                    />
                    <MuiTextField
                      text="My location: "
                      value={value.myAge}
                      handleChange={handleChangeLocation}
                      options={locationOptions}
                    />
                    <div className="location-name-instruction">
                      <p>E.g. New Roads or 70760</p>
                      <p>
                        We don’t use postal addresses to contact members
                        directly!
                      </p>
                    </div>
                    <div className="field-wrapper">
                      <span>My email:</span>
                      <TextField
                        error={!!error}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                        sx={{
                          maxWidth: "380px",
                          width: "100%",
                          height: "46px",
                          border: "none",
                          borderRadius: "12px",
                          "&:hover fieldset": {
                            border: "none",
                          },
                          "&:focus-within fieldset, &:focus-visible fieldset": {
                            border: "none",
                          },
                        }}
                        InputProps={{
                          sx: {
                            maxWidth: "380px",
                            width: "100%",
                            height: "46px",
                            border: "2px solid #F6A95F",
                            borderRadius: "12px",

                            "&:hover fieldset": {
                              border: "none",
                            },
                            "&:focus-within fieldset, &:focus-visible fieldset":
                              {
                                border: "none",
                              },
                          },
                        }}
                      >
                        My email:{" "}
                      </TextField>
                    </div>
                    <p className="error">{error&&error}</p>
                    <Password mobile={false} password={password} setPassword={setPassword}/>
                    <div className="btn-wrapper">
                      <MyButton onClick={handleStartClick}>Start!</MyButton>
                    </div>
                  </>
                ) : (
                  <Mobile />
                )}

                <div className="login">
                  <p>Already signed up?</p>
                  <a>Log in</a>
                </div>
              </div>
            </div>
            <div className={`${matches?'nav-wrapper':'nav-wrapper-mobile'}`}>
              {!matches&&(<>
                <img src={logoMobile1} alt='Logo mobile-1' className="logo-mobile1"/>
                <img src={logoMobile2} alt='Logo mobile-2' className="logo-mobile2"/>

              <img src={couple} alt='Couple mobile' className="couple-mobile"/>
              </>)}
              {matches && (



                <nav>
                  <ul>
                    <li>
                      <Link to="https://www.figma.com/exit?url=https%3A%2F%2Fwww.nett-treff.com%2Fc3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20%3D">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.nett-treff.com/c3RhdGljUGFnZS90ZXJtc25ldHQtdHJlZmYuY29t">
                        Terms of Use
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.nett-treff.com/staticPage/terms?html=safedating">
                        Safe Dating
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.nett-treff.com/support/contactUs">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
              <div className="copyright">
                &#169; Copyright {new Date().getFullYear()} Kaleton Web s.r.o.
              </div>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              className="navbar"
              width={188}
              height={80}
              src={navBar}
              alt="nav-humburger"
            ></img>
            <img className="pic" alt='picture of a couple and logos'width={539} height={799} src={pic} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default SignUp;
