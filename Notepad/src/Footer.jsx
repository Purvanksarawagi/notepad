import React from 'react';
import './index.css'



const Footer = () => {

    const  year = new Date().getFullYear();
  return (
    <>
      <footer className='Footer'>
        <p>Made by Purvank Sarawagi @ {year}</p>

      </footer>
    </>
  )
}
export default Footer;
