import React from "react";
import {Grid, Text} from "../elements";
import Card from "../components/Card";

const Summary = (props) => {

    return (
      <React.Fragment>
        <Grid center>
            <Grid padding="16px" bg="#FFF6FF">
                #빈출 단어
            </Grid>
            <Grid  padding="100px" bg="#EFF6FF">
                <a href="https://blog.naver.com/resumake/222603947125">면접 질문 링크</a>
            </Grid>
            <Grid padding="150px" bg="#FFF6FF">
                3줄 요약
            </Grid>
        </Grid>
      </React.Fragment>
    );
}

export default Summary;