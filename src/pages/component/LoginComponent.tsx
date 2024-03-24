import {
    Container,
    TextField,
    Box,
    Avatar,
    Typography,
    CssBaseline,
    FormControlLabel,
    Checkbox,
    Button,
    Snackbar,
    IconButton
} from '@mui/material';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginUser } from "../../service/auth/authservice.ts";
import { ValidateLoginDetails } from "../../validations/ValidateLoginDetails.tsx";
import { ILoginUser, defaultsLoginUser } from "../../model/auth/ILoginUser.ts"
import { useNavigate, NavigateFunction } from "react-router-dom";
import { setuserDetail } from "../../service/localstorage/Userservice.ts"
import {useState, useEffect} from 'react'
import { isTokenExist } from '../../service/localstorage/TokenService.ts';
import { LoadingButton } from '../../customControl/Button/LoadingButton.tsx';

export default function LoginComponent() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [tosterText, setTosterText] = useState("This is a success Alert inside a Snackbar!")
    const [isBusy, setisBusy] = useState(false);
    useEffect(()=>{
        LoginCheckpoint(navigate);
    },[navigate])

    const ShowToster = (text : string) => {
        setTosterText(text);
        setOpen(true);
      };
    
    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);};

    const handleNewSubmit = () => {
        try{
            setisBusy(true);
            setTimeout(() => {
                
            }, 4000);
        }
        catch
        {

        }
        finally
        {
            setisBusy(true);
        }
        
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try
        {
            setisBusy(true);
            const data = new FormData(event.currentTarget);
            const dataobj: ILoginUser = convertFormdatatoObj(data);
            const isvalid = ValidateLoginDetails(dataobj);
            if (isvalid) {
                const result = await LoginUser(data,ShowToster);
                if (!result?.hasErrors && !result?.isSystemError) {
                    setuserDetail(result!.data!)
                    setTimeout(() => {
                        navigate("/Dashboard");
                    }, 2000);
                }
                else {
                    console.log(result.message)
                }
            }
            else {
                //popup
                console.log("username or password will never be empty")
            }
        }
        catch
        {

        }
        finally
        {
            setisBusy(false);
        }
    }

    function convertFormdatatoObj(data: FormData) {
        const dataobj: ILoginUser =
        {
            ...defaultsLoginUser,
            UserName: data.get("email") as string,
            Password: data.get("password") as string,
        }
        return dataobj;
    };

    function LoginCheckpoint(navigate: NavigateFunction) {
        if(isTokenExist())
          navigate("/Dashboard");
    };

    return (
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
                        autoComplete="email"
                        autoFocus />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password" />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me" />

                    <LoadingButton
                        //type="submit"
                        text="Login"
                        onClick={handleNewSubmit}
                        isBuzy={isBusy}/>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
                </Box>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}>
                    {tosterText}
                    </Alert>
            </Snackbar>
        </Container>

    );
}

