import { Grid } from "@mui/material";
import { borderRadius, color } from "@mui/system";

import Pic6 from '../../images/me.jpg'

const Home = () => {
  return (
    
  
    <Grid container sx={{ height:'84vh', width:'100%' }}>
    <Grid item lg={1} sm={3} sx={{
        backgroundImage: `url(${Pic6})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontWeight:'bold',
        marginTop: '20px',
        borderRadius: '20px',
        marginLeft:'15px',
        color:'#F8FFDB'
       
    }}>

    </Grid>
<p sx={{color:'#F8FFDB'}}>HEY BEAUTIFUL GIRL!!!

    </p>



  </Grid>
    
    
  )
}

export default Home
