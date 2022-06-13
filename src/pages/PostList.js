import React from "react"
import { Text, Input, Grid, Button } from "../elements";
import Upload from "../shared/Upload";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";
import { history } from "../redux/configureStore";

import Post from "../components/Post";
import SideBar from "../shared/SideBar";
import Table from "../shared/Table";
import List from "../shared/List";
import DataList from "./DataList";

const PostList = (pros) => {

    const [contents, setContents] = React.useState('');

    const dispatch = useDispatch();
    const changeContents = (e) => {
        setContents(e.target.value);
    }

    React.useEffect(() => {
        dispatch(postActions.getPostFB());

    }, []);

    return (
        <React.Fragment>
            <Grid padding="16px">
                {/* <Grid is_flex>
                    <SideBar/>
                    <Table/>
                    <DataList/>
                </Grid> */}
                <Grid is_flex >
                    <Grid >
                        <SideBar/>
                    </Grid>
                    <Grid center>
                        <Table/>
                        <DataList/>
                    </Grid>
                </Grid>
            </Grid>
            <Button is_float text="+" _onClick={() => {history.push('/write');}}></Button>
        </React.Fragment>
    )
}

export default PostList;


