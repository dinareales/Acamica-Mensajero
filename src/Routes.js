import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import Box from "./boxForm";
import Home from "./Home";


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/boxLeft" component={Box} />
                    <Route exact path="/boxCenter" component={Box} />
                    <Route exact path="/boxRight" component={Box} />
                </Switch>
            </main>
        );
    }
}

export default Main;