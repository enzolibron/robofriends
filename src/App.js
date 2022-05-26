import React, { Fragment, Component } from "react";
import CardList from './CardList';
import { list } from './robotlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: list
        }
        this.robots = [];
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(json => {
                for (const iterator of json) {
                    iterator.src = "https://robohash.org/" + iterator.id;
                }
                this.robots = json;
                this.setState({
                    robots: json
                })
            })
    }

    filterList = (value) => {
        return this.robots.filter(robo => {
            console.log(robo.name, value);
            return robo.name.toLowerCase().includes(value.toLowerCase());
        })
    }

    searchChange = (event) => {
        let filteredList = this.filterList(event.target.value);
        if (event.target.value === "") {
            this.setState({
                robots: this.robots
            })
        } else {
            this.setState({
                robots: filteredList
            })
        }
    }

    render() {
        return (
            <Fragment >
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.searchChange} />
                    <Scroll>
                        <CardList list={this.state.robots} />
                    </Scroll>
                </div>
            </Fragment>
        );
    }

}

export default App;