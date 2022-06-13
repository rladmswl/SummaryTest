import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import Upload from "../shared/Upload";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import {useSelector, useDispatch} from "react-redux";

const PostDetail = (props) => {

    const is_login = useSelector((state) => state.user.is_login);
    const {history} = props;
    const [contents, setContents] = React.useState('');

    const changeContents = (e) => {
        setContents(e.target.value);
    }

    if(!is_login){
        return (
          <Grid margin="100px 0px" padding="16px" center>
            <Text size="32px" bold>
              앗! 잠깐!
            </Text>
            <Text size="16px">
              로그인 후에만 글을 쓸 수 있어요!
            </Text>
            <Button
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

            <Grid padding="16px">
                <Upload/>
            </Grid>

            <Grid padding="16px">
                <Input _onChange={changeContents} label="링크 업로드" placeholder="url을 첨부하세요"/>
            </Grid>

            <Grid padding="16px">
                <Button is_center text="자료 저장"></Button>
            </Grid>
        </React.Fragment>
    )
}

export default PostDetail;