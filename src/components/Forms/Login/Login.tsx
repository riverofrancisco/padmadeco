/* import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import Swal from "sweetalert2";
import { signIn, signUp, singInWithGoogle } from "../../../middlewares/auth/auth";

interface Props {
  setIsAuthenticated: any;
}

const LoginForm = ({ setIsAuthenticated }: Props) => {
  const dispatch = useAppDispatch();

  const handleGoogle = async () =>{
    await singInWithGoogle()
    setIsAuthenticated(true);
  }

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement && activeElement.name === "Login") {
      try {
        signIn(loginData.email, loginData.password).then(() => {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              setIsAuthenticated(true);

              Swal.fire({
                icon: "success",
                title: "Successfully logged in!",
                showConfirmButton: false,
                timer: 1500,
              });
            },
          });
          setLoginData({
            email: "",
            password: "",
          });
        });
      } catch (error) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
        console.log({ Error: error });
      }
    } else if (activeElement && activeElement.name === "Register") {
      try {
        signUp(loginData.email, loginData.password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully registered and logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoginData({
              email: "",
              password: "",
            });
          },
        });
      } catch (error) {
        console.log({ Error: error });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

      <input
        style={{ marginTop: "12px", marginLeft: "12px" }}
        type="submit"
        value="Login"
        name="Login"
      />
      <input
        style={{ marginTop: "12px", marginLeft: "12px" }}
        type="submit"
        value="Register"
        name="Register"
      />
      <button onClick={handleGoogle}>Sing In With Google</button>
    </form>
  );
};

export default LoginForm; */
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import Swal from "sweetalert2";

import {
  signIn,
  signUp,
  singInWithGoogle,
} from "../../../middlewares/auth/auth";
import { useNavigate } from "react-router-dom";

interface Props {
  setIsAuthenticated: any;
}

export default function LoginForm({ setIsAuthenticated }: Props) {
  const dispatch = useAppDispatch();

  const handleGoogle = async () => {
    await singInWithGoogle();
    setIsAuthenticated(true);
  };

  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement && activeElement.name === "Login") {
      try {

        signIn(loginData.email, loginData.password).then(() => {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              setIsAuthenticated(true);

              Swal.fire({
                icon: "success",
                title: "Successfully logged in!",
                showConfirmButton: false,
                timer: 1500,
              });
            },
          });
          setLoginData({
            email: "",
            password: "",
          });
        });
      } catch (error) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
        console.log({ Error: error });
      }
    } else if (activeElement && activeElement.name === "Register") {
      try {
        signUp(loginData.email, loginData.password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully registered and logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoginData({
              email: "",
              password: "",
            });
          },
        });
      } catch (error) {
        console.log({ Error: error });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            value="Login"
            name="Login"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            value="Register"
            name="Register"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleGoogle}
          >
            Sign In With Google
          </Button>
          <Grid container>
            {/*               <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
