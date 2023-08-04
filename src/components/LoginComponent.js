import React, { useState } from "react";
import { loginApi } from "../api/AuthApi";
import {
  Button,
  TextField,
  Grid,
  Box,
  SvgIcon,
  Typography,
  Divider,
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            placeItems: "center",
            marginLeft: "5%",
            margin: "0 5%",
            padding: "2% 0 10%",
          }}
        >
          <SvgIcon
            component={Logo}
            viewBox="0 0 84 21"
            sx={{
              width: "84px",
              height: "21px",
              color: theme.palette.primary.main,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              alignContent: "start",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                alignContent: "start",
                gap: "15px",
              }}
            ></Box>
            <Button
              onClick={login}
              variant="outlined"
              sx={{ borderRadius: "50px" }}
            >
              Присоединиться
            </Button>
            <Button
              onClick={login}
              variant="contained"
              sx={{ borderRadius: "50px" }}
            >
              Войти
            </Button>
          </Box>
        </Box>

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
                sx={{ borderRadius: "50px", padding: "8px 0" }}
              >
                Войти
              </Button>
              <Divider
              style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.main.main }}
              >Или</Divider>
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
