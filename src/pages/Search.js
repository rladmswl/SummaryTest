import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Search = (props) => {
  const dispatch = useDispatch();

  const [search, setsearch] = React.useState("");

  const login = () => {
    
    
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          검색창
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="검색"
            placeholder="검색해주세요."
            _onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </Grid>


        <Button
          text="검색하기"
          _onClick={() => {
            console.log("검색 했어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Search;