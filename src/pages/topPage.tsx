import React, {FC} from 'react';
import TopHeader from '../components/topPage/topHeader';
import TopMain from '../components/topPage/topMain';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ResultPage from "./resultPage";
import DownloadPage from "./downloadPage";

const TopPage: FC = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <TopHeader />
                    <TopMain />
                </Route>
                <Route path="/search/:keyword" exact>
                    <ResultPage />
                </Route>
                <Route path="/download/:keyword" exact>
                    <DownloadPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default TopPage;