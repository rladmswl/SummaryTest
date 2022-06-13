import React from "react";
import {Grid, Text} from "../elements";
import Card from "../components/Card";

const DataList = (props) => {
    let noti = [
      { user_name: "면접 질문", post_id: "post1" },
      { user_name: "하루 1% 15분 꾸준함의 힘", post_id: "post2" },
      { user_name: "배드민턴 장비", post_id: "post3" },
      { user_name: "강릉 맛집", post_id: "post4" },
    ];

    return (
      <React.Fragment>
        <Grid padding="16px" bg="#EFF6FF">
          {noti.map((n) => {
            return <Card {...n} key={n.post_id} />;
          })}
        </Grid>
      </React.Fragment>
    );
}

export default DataList;