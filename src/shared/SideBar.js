// import React from "react";
// import {Grid, Text, Button} from "../elements";
// import { Link } from "react-router-dom";
// import SidebarItem from "../components/SidebarItem";
// import { history } from "../redux/configureStore";

// const SideBar = (props) => {

//     const menus = [
//         { name: "여행", path: "/" },
//         { name: "맛집", path: "/" },
//         { name: "독서", path: "/" }
//       ];

//     return (
//         // <React.Fragment>
//         //     <Grid padding="20px" >
//         //         <Text>
//         //             <Grid is_flex >
//         //                 <h2><b>카테고리</b></h2>
//         //                 {/* <Button _onClick={() => {history.replace('/change');}}>Edit</Button> */}
//         //             </Grid>
                    
//         //         </Text>
//         //         {menus.map((menu, index) => {
//         //         return (
//         //             <Link to={menu.path} key={index}>
//         //                 <SidebarItem menu={menu} />
//         //             </Link>
//         //             );
//         //         })}
        
//         //     </Grid>
//         // </React.Fragment>
//         <div>
//             <h2><b>카테고리</b></h2>
//             {menus.map((menu, index) => {
//                 return (
//                     <Link to={menu.path} key={index}>
//                         <SidebarItem menu={menu} />
//                     </Link>
//                     );
//                 })}
//         </div>
//     )
// }

// export default SideBar;


// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "../components/SidebarItem";

const SideBar = (props) => {

    // return (
    //     <ul>
    //         <li><a href="#home">Home</a></li>
    //         <li><a href="#news">News</a></li>
    //         <li><a href="#contact">Contact</a></li>
    //         <li><a href="#about">About</a></li>
    //     </ul>
    //     )

        const menus = [
        { name: "여행", path: "/" },
        { name: "맛집", path: "/" },
        { name: "독서", path: "/" }
      ];

    return (
        <div>
            <h2><b>카테고리</b></h2>
                {menus.map((menu, index) => {
                    return (
                        <li>
                            <Link to={menu.path} key={index}>
                                <SidebarItem menu={menu} />
                            </Link>
                        </li>
                    );
                })}
            
        </div>
    )

}


export default SideBar;