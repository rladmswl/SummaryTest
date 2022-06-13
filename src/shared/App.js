import './App.css';
import React from "react";

import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Search from "../pages/Search";
import PostWrite from '../pages/PostWrite';
import Summary from '../pages/Summary';

import Header from "../components/Header";
import SideBar from '../shared/SideBar';

import {Grid, Button} from "../elements";
import Permit from "./Permit";

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"

import {apiKey} from "./firebase";
import SidebarChange from '../pages/SidebarChange';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(() => {
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <Header/>
        {/* <SideBar/> */}
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
        <Route path="/write" exact component={PostWrite} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/summary" exact component={Summary}/>
          <Route path="/change" exact component={SidebarChange}/>
        </ConnectedRouter>
      </Grid>
      <Permit>

    {/* +버튼을 누르면 write 페이지로 이동 */}
    <Button is_float text="+" _onClick={() => {history.push('/write');}}></Button>
  </Permit>
    </React.Fragment>
  );
}

export default App;

