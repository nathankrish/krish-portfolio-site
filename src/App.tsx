import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Grid, Paper, Typography, Stack, Link, IconButton, Card, CardContent} from '@mui/material';
import { Instagram, LinkedIn, Email, GitHub, FileDownload, Description} from '@mui/icons-material';
import { maxWidth } from '@mui/system';

function App() {
  return (
    <React.Fragment>
      {/* <ButtonAppBar/> */}
      <MainContent/> 
    </React.Fragment>
  );
}
const appTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
  },
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#023E8A" //button text white instead of black,
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#023E8A"
    },
    background: {
      default: "#000000"
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  }});

  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = 'resume-krish-nathan.pdf';
    link.href = "./resume-krish-nathan.pdf";
    link.click();
  };

function ButtonAppBar() {
  return (
  <ThemeProvider theme = {appTheme}>
    {/* Navigation Buttons */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} color="secondary">
        <Toolbar sx = {{justifyContent: "flex-end", marginRight: "25px"}}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Experiences</Button>
          <Button color="inherit">Personal</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </ThemeProvider>
  );
}

function MainContent() {
  return (
    <ThemeProvider theme = {appTheme}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs = {10} sm = {8}>
          <IntroPar></IntroPar>
        </Grid>
        <Box width="100%"/>

        <Grid item xs = {10} sm = {4}>
          <ImageCard></ImageCard>
        </Grid>
        <Grid item xs = {10} sm = {4}>
          <BasicCard></BasicCard>
        </Grid>
        <Box width="100%"/>

        <Typography sx = {{marginY: 5}} variant = "h4" color = "primary.contrastText">Notable Projects</Typography>
        <Box width="100%"/>

        <Grid item xs = {10} sm = {4} marginY={2}>
          <DigiPathCard></DigiPathCard>
        </Grid>
        <Grid item xs = {10} sm = {4} marginY={2}>
          <ThyroidCard></ThyroidCard>
        </Grid>


      </Grid>
    </ThemeProvider>
  );
    
}

function IntroPar() {
  return(
  <Paper elevation={0} sx = {{padding: 5}} >
  <Typography variant = "h3" color = "primary.contrastText" sx={{marginBottom: 1}}><strong>Krish Nathan</strong></Typography>
  <Typography variant = "body1" fontSize={"20px"}>I'm a fourth-year computer science student at Georgia Tech.</Typography>
  <Typography variant = "body1" fontSize={"20px"}>I'm open to full-time software engineering roles or pursuing a masters degree.</Typography>
  
    <Stack spacing={3} sx = {{marginTop: 2, marginBottom: 2}} direction = {"row"}>
      <IconButton className='icon' href="https://www.linkedin.com/in/krish-nathan-96657a186/"><LinkedIn /></IconButton>
      <IconButton className='icon' href="https://www.instagram.com/nathan.krish/"><Instagram /></IconButton>
      <IconButton className='icon' href="mailto:knathan.recruiting@gmail.com"><Email /></IconButton>
      <IconButton className='icon' href="https://github.com/nathankrish"><GitHub /></IconButton>
    </Stack>
    <Button onClick = {downloadResume} variant = 'outlined'><FileDownload/><Typography sx ={{marginLeft: 1}}>Download Resume</Typography></Button>          
  </Paper>
  );
}

function BasicCard() {
  return (
    <Card elevation = {0}>
      <CardContent>
              <Stack direction = "column">
                  <Typography variant = "h5" gutterBottom>
                    Hi there,
                  </Typography>
                  <Typography variant = "h3" color = "primary.contrastText" gutterBottom>
                    I'm Krish
                  </Typography>
                  <Typography variant = "body1" gutterBottom>
                    I’m interested in backend engineering, systems, and machine learning.
                  </Typography>
                  <Typography variant = "body1" gutterBottom>
                    I enjoy working on projects that impact others’ lives, especially in the healthcare space. I’m always learning about new topics in computer science and I love teaching these concepts to others.
                  </Typography>
              </Stack>
      </CardContent>
    </Card>
  );
}

function ImageCard() {
  return (
    <Card elevation = {0}>
      <CardContent>
          <Paper elevation={0} >
             <img className = "rounded" width = "100%" src = "/imgs/headshot-nobg.png"></img>
            </Paper>
      </CardContent>
    </Card>
  );
}

function DigiPathCard() {
  return (
    <Card elevation = {0}>
      <CardContent>
              <Stack direction = "column">
                 <img className = "rounded" width = "100%" src = "/imgs/histology-slide.jpeg"></img>
                  <Typography variant = "h5" color="primary.contrastText" marginTop = {2}>
                    Digital Pathology
                  </Typography>
                  <Typography variant = "body1" gutterBottom marginTop = {1}>
                    I helped develop an app which cancer clinics use to send images of cancer samples to pathologists for diagnosis. This reduces the time to treat patients and prevents complications
                  </Typography>
              </Stack>
      <Button sx={{marginTop: 2}} variant="outlined" href="https://bit.ly/3WIa80T"><Description sx={{marginRight: 1}}/>Report</Button>
      </CardContent>
    </Card>
  );
}

function ThyroidCard() {
  return (
    <Card elevation = {0}>
      <CardContent>
              <Stack direction = "column">
                 <img className = "rounded" width = "100%" src = "/imgs/thyroid-hormone.webp"></img>
                  <Typography variant = "h5" color="primary.contrastText" marginTop = {2}>
                    Thyroid Hormone Detection
                  </Typography>
                  <Typography variant = "body1" gutterBottom marginTop = {1}>
                  I co-invented a device which measures thyroid hormone concentration in a blood sample. Our invention was granted a utility patent in November 2022
                  </Typography>
              </Stack>
            <Button sx={{marginTop: 2}} variant="outlined" href="https://bit.ly/3XFX90Z"><Description sx={{marginRight: 1}}/>Patent</Button>
      </CardContent>
    </Card>
  );
}

export default App;
