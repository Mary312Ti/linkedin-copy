import React from "react";
import { loginApi } from "../api/AuthApi";
import Button from '@mui/material/Button';

export default function LoginComponent() {
    const login = () => {
        loginApi();
    }
  return (
    <div>
      <Button onClick={login} variant="contained" sx={{ borderRadius: '50px' }}>Войти</Button>
    </div>
  );
}
