import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { ageOptions, iAmOptions, locationOptions } from "../constants";
import { TextField, MenuItem } from "@mui/material";
import Password from "../password";

import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";

import "./styles.css";

function Mobile() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [label, setLabel] = useState("I am:");
  const [password, setPassword] = useState("");
  const [screen, setScreen] = useState({
    Iam: "I am:",
    myAge: "",
    location: "",
    email: "",
    password: "",
  });
  const [value, setValue] = useState({
    Iam: "a man looking for a woman",
    myAge: "20-30",
    location: "Yerevan",
  });

  const MyButton = styled("button")({
    textDecoration: "",
    background: "#F6A95F",
    border: "1px solid #F6A95F",
    borderRadius: "8px",
    color: `${!error ? "#3E352F" : " rgba(62, 53, 47, 0.3) "}`,
    maxWidth: "216px",
    width: "100%",
    height: "26px",
  });

  const handleIamNextClick = () => {
    setScreen({ ...screen, Iam: "", myAge: "My age:" });
    setLabel("My age:");
  };
  const handleMyAgeBackClick = () => {
    setScreen({ ...screen, Iam: "I am:", myAge: "" });
    setLabel("I am:");
  };
  const handleMyAgeNextClick = () => {
    setScreen({ ...screen, myAge: "", location: "My location:" });
    setLabel("My location:");
  };

  const handleLocationBackClick = () => {
    setScreen({ ...screen, myAge: "My age:", location: "" });
    setLabel("My age");
  };

  const handleLocationNextClick = () => {
    setScreen({ ...screen, location: "", email: "My email" });
    setLabel("My email");
  };
  const handleEmailBackClick = () => {
    setScreen({ ...screen, location: "My location:", email: "" });
    setLabel("My location");
  };
  const checkEmail = () => {
    if (
      email &&
      email !== "razd22" &&
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,4})+$/.test(
        email
      )
    ) {
      setError(
        "Oops! There may be a mistake in your email address. Please check. If you've already signed up at our site, please use the login form."
      );
      console.log(2);
    } else {
      setError("");
    }
  };
  useEffect(() => {
    checkEmail();
  }, [email]);

  const hadleEmailNextClick = () => {
    if (!error || email === "razd22") {
      setScreen({ ...screen, email: "", password: "My password: " });
      setLabel("My password");
    }
  };
  const handlePasswordBackClick = () => {
    setScreen({ ...screen, email: "My email:", password: "" });
    setLabel("My email");
  };
  const handleChangeIAm = (e) => {
    setValue({ ...value, Iam: e.target.value });
  };
  const handleChangeMyAge = (e) => {
    setValue({ ...value, myAge: e.target.value });
  };
  const handleChangeLocation = (e) => {
    setValue({ ...value, location: e.target.value });
  };
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

  return (
    <>
      <div className="label-mobile-wrapper">
        <p className="label-mobile">{label}</p>
      </div>
      {!!screen.Iam && (
        <TextField
          sx={{
            maxWidth: "216px",
            width: "100%",
            height: "40px",
            border: "none",
            borderRadius: "12px",
            "&:hover fieldset": {
              border: "none",
            },
            "&:focus-within fieldset, &:focus-visible fieldset": {
              border: "none",
            },
          }}
          value={value.Iam}
          onChange={handleChangeIAm}
          select
          className="m-item"
          inputProps={{
            sx: {
              padding: "11.5px 14px",
              maxWidth: "216px",
              width: "100%",
              height: "46px",
              border: "2px solid #F6A95F",
              borderRadius: "12px",
              fontSize: "10px",
              lineHeight: "14px",

              "&:hover fieldset": {
                border: "none",
              },
              "&:focus-within fieldset, &:focus-visible fieldset": {
                border: "none",
              },
            },
          }}
        >
          {iAmOptions.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
      {!!screen.myAge && (
        <TextField
          sx={{
            maxWidth: "216px",
            width: "100%",
            height: "40px",
            border: "none",
            borderRadius: "12px",
            "&:hover fieldset": {
              border: "none",
            },
            "&:focus-within fieldset, &:focus-visible fieldset": {
              border: "none",
            },
          }}
          value={value.myAge}
          onChange={handleChangeMyAge}
          select
          className="m-item"
          inputProps={{
            sx: {
              padding: "11.5px 14px",
              maxWidth: "216px",
              width: "100%",
              height: "46px",
              border: "2px solid #F6A95F",
              borderRadius: "12px",
              fontSize: "10px",
              lineHeight: "14px",

              "&:hover fieldset": {
                border: "none",
              },
              "&:focus-within fieldset, &:focus-visible fieldset": {
                border: "none",
              },
            },
          }}
        >
          {ageOptions.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}

      {!!screen.location && (
        <TextField
          sx={{
            maxWidth: "216px",
            width: "100%",
            height: "40px",
            border: "none",
            borderRadius: "12px",
            "&:hover fieldset": {
              border: "none",
            },
            "&:focus-within fieldset, &:focus-visible fieldset": {
              border: "none",
            },
          }}
          value={value.location}
          onChange={handleChangeLocation}
          select
          className="m-item"
          inputProps={{
            sx: {
              padding: "11.5px 14px",
              maxWidth: "216px",
              width: "100%",
              height: "46px",
              border: "2px solid #F6A95F",
              borderRadius: "12px",
              fontSize: "10px",
              lineHeight: "14px",

              "&:hover fieldset": {
                border: "none",
              },
              "&:focus-within fieldset, &:focus-visible fieldset": {
                border: "none",
              },
            },
          }}
        >
          {locationOptions.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
      {screen.email && (
        <>
          <TextField
            value={email}
            error={!!error}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              maxWidth: "216px",
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
                maxWidth: "216px",
                width: "100%",
                height: "46px",
                border: "2px solid #F6A95F",
                borderRadius: "12px",

                "&:hover fieldset": {
                  border: "none",
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "none",
                },
              },
            }}
          ></TextField>
          <p className="error-mobile">{error}</p>
        </>
      )}

      {!!screen.password && (
        <Password mobile={true} password={password} setPassword={setPassword} />
      )}
      {!!screen.Iam && (
        <MyButton onClick={handleIamNextClick}>
          NEXT &#160; &#160; &#62;
        </MyButton>
      )}
      {!!screen.myAge && (
        <div className="btn-container">
          <MyButton onClick={handleMyAgeBackClick}>
            &#60; &#160; &#160;BACK
          </MyButton>
          <MyButton onClick={handleMyAgeNextClick}>
            NEXT&#160; &#160; &#62;
          </MyButton>
        </div>
      )}

      {!!screen.location && (
        <div className="btn-container">
          <MyButton onClick={handleLocationBackClick}>
            &#60; &#160; &#160;BACK
          </MyButton>
          <MyButton onClick={handleLocationNextClick}>
            NEXT&#160; &#160; &#62;
          </MyButton>
        </div>
      )}

      {!!screen.email && (
        <div className="btn-container">
          <MyButton onClick={handleEmailBackClick}>
            &#60; &#160; &#160;BACK
          </MyButton>
          <MyButton onClick={hadleEmailNextClick}>
            NEXT&#160; &#160; &#62;
          </MyButton>
        </div>
      )}

      {!!screen.password && (
        <div className="btn-container">
          <MyButton onClick={handlePasswordBackClick}>
            &#60; &#160; &#160;BACK
          </MyButton>
          <MyButton onClick={handleStartClick}>
            START!&#160; &#160; &#62;
          </MyButton>
        </div>
      )}

      <div className="logo-wrapper-mobile">
        {!!screen.Iam && (
          <>
            <img src={logo1}  alt='logo1' /> <img src={logo2}  alt='logo2'/> <img src={logo2}  alt='logo2' />
            <img src={logo2}  alt='logo2'/>
            <img src={logo2}   alt='logo2'/>
          </>
        )}
        {!!screen.myAge && (
          <>
            <img src={logo1}  alt='logo1'/> <img src={logo1}  alt='logo1' /> <img src={logo2}  alt='logo2' />
            <img src={logo2}   alt='logo2'/>
            <img src={logo2}  alt='logo2' />
          </> 
        )}{" "}
        {!!screen.location && (
          <>
            <img src={logo1}  alt='logo1'/> <img src={logo1}  alt='logo1' /> <img src={logo1}  alt='logo1'/>
            <img src={logo2}  alt='logo2'/>
            <img src={logo2}  alt='logo2'/>
          </>
        )}{" "}
        {!!screen.email && (
          <>
            <img src={logo1} /> <img src={logo1} /> <img src={logo1} />
            <img src={logo1} />
            <img src={logo2}  alt='logo2' />
          </>
        )}{" "}
        {!!screen.password && (
          <>
            <img src={logo1}  alt='logo1'/> <img src={logo1}  alt='logo1'/> <img src={logo1}  alt='logo1' />
            <img src={logo1}  alt='logo1'/>
            <img src={logo1}  alt='logo1'/>
          </>
        )}
      </div>
    </>
  );
}
export default Mobile;
