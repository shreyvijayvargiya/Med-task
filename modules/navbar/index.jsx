import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, Box } from '@material-ui/core';
import { Menu, Close } from "@material-ui/icons";
import Dropdown from './Dropdown';

const Navbar = () => {

    const matches = useMediaQuery("(max-width:800px)");
    const [showDropdown, setShowDropdown] = useState(false);
    
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar className="flex justify-between items-center">
            <Typography variant="h6">Logo</Typography>
            <div>
              {matches ? (
                <>
                  <IconButton onClick={() => setShowDropdown(!showDropdown)}>
                    <Menu />
                  </IconButton>
                  {showDropdown && (
                    <Dropdown setShowDropdown={setShowDropdown} />
                  )}
                </>
              ) : (
                <div className="flex justify-between items-center">
                  <Box m={2}>
                    <Typography>Home</Typography>
                  </Box>
                  <Box m={2}>
                    <Typography>Explore medical bills</Typography>
                  </Box>
                  <Box m={2}>
                    <Typography>My Account</Typography>
                  </Box>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
};
export default Navbar;
