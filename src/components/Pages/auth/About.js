import { Grid } from "@mui/material";

import Pic5 from '../../../images/pic4.png'

const About = () => {
  return (

    <Grid container sx={{ height:'84vh', width:'140%', marginLeft:'70px' }}>
    <Grid item lg={1} sm={3} sx={{
        backgroundImage: `url(${Pic5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
       
    }}>
         <p>“I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.” ---<h1 sx={{
        color:'green'
    }}>I Love You</h1>
</p>
    </Grid>

{/*     
    <p>“I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.” ---<h1 sx={{
        color:'green'
    }}>I Love You</h1>  */}


  </Grid>

  )
}

export default About