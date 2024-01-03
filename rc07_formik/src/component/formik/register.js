// Render Prop


import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

import { Box,TextField,Typography, Container, Avatar,Button,Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; 
import Paper from '@mui/material/Paper';
import { pink } from '@mui/material/colors';

import { useFormik } from 'formik';
import {Formik} from 'formik';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SignupForm = () => {

  const initialValues = {
    username: 'Ceyhun',
    email: '',
    password: '',
    passAgain: '',
  }


  return(
  <Container sx = {{
    marginTop :"3rem",
    height : "calc( 100vh - 3rem)",
    textAlign : "center",
    bgcolor : pink[100],

  }} maxWidth="sm">
    <Box sx ={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <Avatar 
        sx={{ m: "1rem", bgcolor: 'secondary.main' }}   >
        <LockPersonOutlinedIcon />
      </Avatar>
    </Box>
    <Typography component="h1" variant="h5">
      SignUp
    </Typography>
    <Formik 
           initialValues={initialValues}>
    {(values) => {
      <Box  component="form" sx= {{m:3}} >
        <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12} >
              <TextField id="username" label="User Name"
                        value = {values.username} variant="outlined" />
            </Grid>
            <Grid xs={12} >
              <TextField id="email" label="Email" value = {values.email}variant="outlined" />
            </Grid>
            <Grid xs={12} >
              <TextField id="password" label="Password" value = {values.password} variant="outlined" />
            </Grid>
            <Grid xs={12} >
              <TextField id="passAgain" label="Password Again" value = {values.passAgain} variant="outlined" />
            </Grid>
        </Grid>
        <Button type="submit"  variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
        </Button>
        <Typography sx={{ mt: 3, mb: 2 }} color="text.secondary">
        Already have an account? <Link to="/login">Login</Link>
        </Typography>

      </Box>
    }
    }
    </Formik>

  </Container>
  )
}



export default SignupForm;