import React from "react";
import {Text, Grid, Button} from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import {history} from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import Permit from "../shared/Permit";
import Logout from "../pages/Logout";
// import {Permit} from "../shared/Permit";

const Header = (props) => {
    
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);   

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

    const is_session = sessionStorage.getItem(_session_key)? true : false;
    
    console.log(sessionStorage.getItem(_session_key));
    console.log(is_session);

    // function HomeIcon(props) {
    //     return (
    //       <SvgIcon {...props}>
    //         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    //       </SvgIcon>
    //     );
    //   }


    if(is_login){  // 로그인 되어 있으면 header를 로그아웃으로 변경
        return (
            <Grid is_flex padding="16px" center>
                {/* <HomeIcon /> */}
                <Button text="home" _onClick={() => {history.push("/");}}></Button>
                <Text margin='0px' size='50px' bold>SHORT</Text>
                <Button text="로그아웃" _onClick={() => {dispatch(userActions.logOut({}));}}></Button>
            </Grid>
          );
    }
    
    return (
        <React.Fragment>
            <Grid is_flex padding="16px" center>
                <Button text="home" _onClick={() => {history.push("/");}}></Button>
                <Text margin='0px' size='50px' bold>SHORT</Text>
                <Button text="로그인" _onClick={() => {history.push("/login");}}></Button>
            </Grid>
            {/* <Grid is_flex padding="16px">
                <Grid >
                    <Button text="home" _onClick={() => {history.push("/");}}></Button>
                </Grid>
                <Grid center >
                    <Text margin='0px' size='50px' bold>SHORT</Text>
                </Grid>
                <Grid bg="#EFF6FF">
                    <Button text="로그인" _onClick={() => {history.push("/login");}}></Button>
                    <Button text="회원가입" _onClick={() => {history.push("/signup");}}></Button>
                </Grid>
            </Grid> */}
        </React.Fragment>
    )
}

Header.defaultProps = {
    
}

export default Header;