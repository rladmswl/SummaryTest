import React from "react";
import {Grid, Text, Button} from "../elements";
import { Link } from "react-router-dom";
import SidebarItem from "../components/SidebarItem";
import { history } from "../redux/configureStore";

const SideBar = (props) => {

    const menus = [
        { name: "여행", path: "/" },
        { name: "맛집", path: "/" },
        { name: "독서", path: "/" }
      ];

    return (
        // <React.Fragment>
        //     <Grid padding="20px" >
        //         <Text>
        //             <Grid is_flex >
        //                 <h2><b>카테고리</b></h2>
        //                 {/* <Button _onClick={() => {history.replace('/change');}}>Edit</Button> */}
        //             </Grid>
                    
        //         </Text>
        //         {menus.map((menu, index) => {
        //         return (
        //             <Link to={menu.path} key={index}>
        //                 <SidebarItem menu={menu} />
        //             </Link>
        //             );
        //         })}
        
        //     </Grid>
        // </React.Fragment>
        <div>
            <h2><b>카테고리</b></h2>
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem menu={menu} />
                    </Link>
                    );
                })}
        </div>
    )
}

export default SideBar;