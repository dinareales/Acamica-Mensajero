import React, {Component} from 'react';
import Header from "./Header";
import List from "./list";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <List/>
            </div>
        );
    }
}

export default Home;