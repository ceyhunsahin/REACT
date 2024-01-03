// Render Prop


import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

import { Box,TextField,Typography, Container, Avatar,Button,Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; 
import Paper from '@mui/material/Paper';
import { pink, grey } from '@mui/material/colors';

import { useFormik } from 'formik';
import * as Yup from 'yup';


const sifre = "!?.@#$%^&*()-+_"


const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
                  username: '',
                  email: '',
                  password: '',
                  passAgain: ''},
    onSubmit: (values, actions) => {
     // alert(JSON.stringify(values, null, 2));
      console.log(values)
      actions.resetForm();
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(2, 'Must be 15 characters or less')
        .required('Display Name is Required'),
      password: Yup.string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .matches(/[a-z]/, 'Şifre en az bir küçük harf içermelidir')
      .matches(/[A-Z]/, 'Şifre en az bir büyük harf içermelidir')
      .matches(/[0-9]/, 'Şifre en az bir rakam içermelidir')
      .matches(/[!?.@#$%^&*()-+_]+/, `Şifre en az bir ozel karakter içermelidir ${sifre}`)
      .required('Şifre gereklidir'),
      passAgain: Yup.string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .matches(/[a-z]/, 'Şifre en az bir küçük harf içermelidir')
      .matches(/[A-Z]/, 'Şifre en az bir büyük harf içermelidir')
      .matches(/[0-9]/, 'Şifre en az bir rakam içermelidir')
      .matches(/[!?.@#$%^&*()-+_]+/, 'Şifre en az bir ozel karakter içermelidir')
      .oneOf([Yup.ref("password"), null], 'passwordler ayni olmalidır')
      .required('Şifre gereklidir'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });


  return(
  <Container sx = {{
    marginTop :"3rem",
    height : "calc( 100vh - 3rem)",
    textAlign : "center",
    bgcolor : grey[100],

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
      <Box  component="form" sx= {{m:3}} onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12} >
              <TextField id="username" label="User Name"
                        value = {formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant="outlined"
                        error = {formik.touched.username && Boolean(formik.errors.username)}
                        helperText = {formik.touched.username && formik.errors.username} />
            </Grid>
            <Grid xs={12} >
              <TextField id="email" label="Email" 
              value = {formik.values.email} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              variant="outlined" />
              {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}

            </Grid>
            <Grid xs={12} >
              <TextField id="password" label="Password" 
              value = {formik.values.password} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined" 
              type = "password"
              />
          {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
            </Grid>
            <Grid xs={12} >
              <TextField id="passAgain" label="Password Again"
              value = {formik.values.passAgain}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined" type = "password"/>
            {formik.touched.passAgain && formik.errors.passAgain ? (
         <div>{formik.errors.passAgain}</div>
       ) : null}

            </Grid>
        </Grid>
        <Button type="submit"  variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
        </Button>
        <Typography sx={{ mt: 3, mb: 2 }} color="text.secondary">
        Already have an account? <Link to="/login">Login</Link>
        </Typography>

      </Box>
  </Container>
  )
}



export default SignupForm;