import { Grid } from "@mui/material";

import Pic3 from '../../images/for.jpg'
const Contact = () => {
  return (
    <Grid container sx={{ height:'90vh', width:'100%', marginLeft:'20px',  }}>
    <Grid item lg={7} sm={4} sx={{
        backgroundImage: `url(${Pic3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'pink'
    }}>
<p>You don't need to contact, I am always with you and will be !!!

</p>

    </Grid>

    
    
  </Grid>
   
    
  )
}

export default Contact