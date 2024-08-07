// 'use client'
// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import SettingsIcon from '@mui/icons-material/Settings';
// import { IconButton } from '@mui/material';

// export default function BasicMenu() {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <Toolbar>
//             <div>
//                 <IconButton
//                     id="basic-button"
//                     aria-controls={open ? 'basic-menu' : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? 'true' : undefined}
//                     onClick={handleClick}
//                 >
//                     {/* <IconButton> */}
//                     <SettingsIcon color="secondary" />
//                 </IconButton>
//                 <Menu
//                     id="basic-menu"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     MenuListProps={{
//                         'aria-labelledby': 'basic-button',
//                     }}
//                 >
//                     <MenuItem onClick={handleClose}>Create</MenuItem>
//                     <MenuItem onClick={handleClose}>Update</MenuItem>
//                     <MenuItem onClick={handleClose}>Delete</MenuItem>
//                 </Menu>
//             </div>
//         </Toolbar>
//     );
// }
