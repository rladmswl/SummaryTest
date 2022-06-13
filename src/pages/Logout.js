import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Logout = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const Logout = () => {
    
    
  };


  return (
    <React.Fragment>
      <Grid padding="16px" center>
        <Text size="32px" bold >
          로그아웃
        </Text>

        <Button is_center text="로그아웃 하기"
          _onClick={() => {
            console.log("로그아웃 했어!");
            Logout();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Logout;