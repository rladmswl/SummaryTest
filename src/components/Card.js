import React from "react";
import {Grid, Text, Image} from "../elements";

const Card = (props) => {

    const {url, user_name, post_id} = props;

    return (
      <Grid padding="16px" is_flex bg="#ffffff" margin="8px 0px">
        {/* <Grid width="auto" margin="0px 8px 0px 0px">
          <Image src={url} size={85} shape="square" />
        </Grid> */}
        <Grid>
          <Text>
          <a href="/summary">"{user_name}" 링크 입니다{" "}</a>
          </Text>
        </Grid>
        <Grid>
          <Text>
            빈출 단어{" "}
          </Text>
        </Grid>
      </Grid>
    );
}

Card.defaultProps = {
  url: "http://via.placeholder.com/400x300",
  user_name : "https://blog.naver.com/resumake/222603947125",

};

export default Card;