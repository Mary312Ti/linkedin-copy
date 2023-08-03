import React, { useState } from "react";
import { loginApi } from "../api/AuthApi";
import {
  Button,
  TextField,
  Grid,
  Box,
  SvgIcon,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import { ReactComponent as Logo } from "../assets/logo.svg";
import backgroundIllustration from "../assets/background-auth.svg";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let responce = await loginApi(credentials.email, credentials.password);
      console.log(responce);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SvgIcon
          component={Logo}
          viewBox="0 0 100 100"
          sx={{ height: 100, width: 100 }}
        />
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              gap: "55px",
              marginLeft: "5%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "500px",
              }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: "36px", color: theme.palette.secondary.main }}
                style={{ fontFamily: theme.typography.fontFamily }}
              >
                Добро пожаловать в сообщество специалистов
              </Typography>
              <TextField
                className="email-input"
                placeholder="Enter your email"
                label="Email"
                type="email"
                onChange={(event) =>
                  setCredentials({ ...credentials, email: event.target.value })
                }
                required
              />
              <TextField
                className="password-input"
                placeholder="Enter your password"
                label="Password"
                type="password"
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    password: event.target.value,
                  })
                }
                required
              />
              <Button
                onClick={login}
                variant="contained"
                sx={{ borderRadius: "50px" }}
              >
                Войти
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                height: "70vh",
              }}
            >
              <img src={backgroundIllustration} alt="Background Illustration" />
            </Box>
          </Box>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
