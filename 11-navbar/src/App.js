import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Login />
      <Register />
      <footer className='footer'>Made with ❤️ by  <a className='link' href="https://divyansh-rastogi.netlify.app/"> Divyansh Rastogi </a> <span> Inspired from John Smilga </span></footer>
    </>
  );
}

export default App;
