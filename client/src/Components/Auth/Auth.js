import React, { useState } from "react";
import {
  Avatar,
  Button,
  Typography,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import useStyle from "./styles";
import LockOutlined from "@mui/icons-material/LockOutlined";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import Icon from "./Icon";
import {useDispatch,connect} from "react-redux";
import {useNavigate,useLocation} from "react-router-dom";
import {signIn,signUp} from "../../redux/actions/auth";

const initialState = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:"",
};


const Auth = (props) => {
  const [formData,setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const classes = useStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

  const handleShowPassword = () =>
    setShowPassword((preShowPass) => !preShowPass);

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup){
      props.signUp(formData);
      navigate("/");
    }else{
      props.signIn(formData);
      navigate("/");
    }
  };
  const switchMode = () => {
    setIsSignup((preIsSignup) => !preIsSignup);
    setShowPassword(false);
  };
  const googleSuccess=async(res)=>{
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({type:"AUTH",data:{result,token}});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure=(error)=>{
    console.log(error);
    console.log("Google Sign In was Unsuccessful.Try Again Later");
  };
  return (
    <Container component={"main"} maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="939074183699-eafn3rpgb19ek2so0i9vkfr1lq22jl30.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                color="primary"
                fullWidth
                className={classes.googleButton}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account ? Sign In"
                  : "Don't have an account"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

// export default Auth;
const mapStateToProps = (state) => {
  return {
    posts: state.data.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn:(data)=>dispatch(signIn(data)),
    signUp:(data)=>dispatch(signUp(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

