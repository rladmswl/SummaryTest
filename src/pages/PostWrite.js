import React from "react";
import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from "../shared/Upload";

import {useSelector, useDispatch} from "react-redux";
import Table from "../shared/Table";

const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const {history} = props;
  const [url, setUrl] = React.useState(""); //useState를 사용해서 텍스트 내용 저장하기

  const changeContents = (e) => {
    setUrl(e.target.value);
}

const summit = () => {
    
  if(url === ""){
    window.alert("링크를 첨부해 주세요!");
    return;
  }

  window.alert("저장 성공!");
  console.log(url);
};

  if(!is_login){
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">
          로그인 후에만 글을 쓸 수 있어요!
        </Text>
        <Button is_center
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }

    return (
      <React.Fragment>
        <Grid margin="20px" padding="16px" center>
          <Text margin="10px" size="36px" bold>
            자료 추가하기
          </Text>
          <Upload/>
        </Grid>

        <Grid margin="20px" >
          <Grid padding="16px" center>
            <Input _onChange={changeContents}
              label="링크 첨부" placeholder="url을 첨부해 주세요"/>
          </Grid>

          <Grid padding="16px" center>
              <Button is_center text="업로드 하기"
              _onClick={() => {
                console.log("업로드 했어!");
                history.replace("/");
                summit();
              }}
            ></Button>
          </Grid>
        </Grid>
        
      </React.Fragment>
    );
}

export default PostWrite;







