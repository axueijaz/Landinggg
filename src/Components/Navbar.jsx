import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";  
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import WorkIcon from '@mui/icons-material/Work';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About", icon: <InfoIcon />, path: "/about" },
    { text: "Work", icon: <WorkIcon />, path: "/work" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, path: "/testimonial" },
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, path: "/item" },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
          <Link key={index} to={item.path}>{item.text}</Link>
        ))}
        <Link to='/item'>
          <BsCart2 className='navbar-cart-icon' />
        </Link>
        <Link to='/item'>
        <button className='primary-button'>Bookings now</button>
        </Link>
      </div>
      <div className='navbar-menu-container'>
        <HiMenu onClick={() => setOpenMenu(true)} /> 
      </div>
      <Drawer anchor='right' open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {menuOptions.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={() => setOpenMenu(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
