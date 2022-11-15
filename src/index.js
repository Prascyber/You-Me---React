import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// <Box sx={{ flexGrow: 1 }}>
// <AppBar position="static" color="secondary">
//   <Toolbar>
//     <Typography variant="h5" component="div" sx={{ flexgrow: 1 }}>
//       Geek-Shop
//     </Typography>
//     <Button component={NavLink} to='/' style={({ isActive }) =>
//      { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white' }}>Home</Button>


//     <Button component={NavLink} to='/contact' style={({ isActive }) => 
//     { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white' }}>Contact</Button>
//   </Toolbar>

// </AppBar>
// </Box>