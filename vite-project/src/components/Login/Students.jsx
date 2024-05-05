import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAll, putOne } from '../../API/Reguests';
import Swal from 'sweetalert2';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function StudentsSignIn() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                e.preventDefault()
                getAll("students").then((res) => {

                    const localUsers = res.data || [];
                    const check = localUsers.find(
                        (x) => x.email == email && x.password == password
                    );
                    console.log(check);
                    if (check) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Signed In successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            check.isLogged = true;
                            putOne("students", check.id, check)
                        }).then(() => {
                            console.log(getAll("students"));
                        });
                        setEmail("")
                        setPassword("")
                    }
                    else{
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "User Signed In Not successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        })
                    }
                })
            }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}