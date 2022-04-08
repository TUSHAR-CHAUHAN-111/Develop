import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
  },
  root: {
    '& .MuiTextField-root': {
      margin: 10,
    },
  },
  avatar: {
    margin: "8px",
    backgroundColor: "blueviolet",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "20px",
  },
  submit: {
    margin: "20px 0px 20px",
  },
  googleButton: {
    marginBottom: 5,
  },
}));