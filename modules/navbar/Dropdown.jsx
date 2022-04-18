import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { Close } from "@material-ui/icons";


const Dropdown = ({ setShowDropdown  }) => {
  return (
    <div className="w-screen h-screen z-10 absolute top-0 left-0 bottom-0 right-0 bg-white">
      <div
        className="flex justify-between items-center px-4 py-2"
        style={{ backgroundColor: "#f5f5f5", boxShadow: "2px 2px 2px #202020" }}
      >
        <Typography variant="h6">Logo</Typography>
        <IconButton onClick={() => setShowDropdown(false)}>
          <Close />
        </IconButton>
      </div>
      <hr />
      <div className="p-8">
        <Typography variant="h6">Home</Typography>
        <br />
        <Typography variant="h6">Explore medical bills</Typography>
        <br />
        <Typography variant="h6">My Account</Typography>
        <br />
      </div>
    </div>
  );
};
export default Dropdown;

