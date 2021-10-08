import React from 'react';
import styled from 'styled-components'
import {Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";

const Routes = () => {
    return(
        <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/search/photos/:query'} component={Search}/>
        </Switch>
    )
};

const Container = styled.div`

`;

export default Routes;