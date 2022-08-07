import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import {history} from "../redux/configureStore";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    
    if(id === "" || pwd === ""){
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if(!emailCheck(id)){
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    window.alert("로그인 성공!");
    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px" center>
        <Text size="32px" bold>
          로그인
        </Text>

        <Input
            // label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        {/* <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid> */}

        <Grid padding="16px 0px">
          <Input
            // label="패스워드"
            placeholder="패스워드 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px" center>
          <Button is_center text="로그인하기"
            _onClick={() => {
              console.log("로그인 했어!");
              login();
            }}
          ></Button>
        </Grid>
        
        <Grid padding="16px" center>
          {/* <Button is_center text="회원가입 하러가기"
            _onClick={() => {history.push("/signup");}}
          ></Button> */}
          <a href="/signup">회원 가입 하러 가실래요?</a>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

export default Login;