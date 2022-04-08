import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "5px",
    },
  },
  paper: {
    padding: "13px",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    // gap:5,
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 15,
  },
}));