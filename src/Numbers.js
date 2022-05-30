import React, { Component } from "react";

class Numbers extends Component {
    constructor() {
        super();
        this.state = {
            trivia: ''
        }
    }

    componentDidMount() {
        this.getTrivia();
    }

    render() {
        return (
            <div className="flex justify-center flex-column items-center vh-100">
                <h1 className="outline w-25 pa3 mr2 tc">Today's data trivia:</h1>
                <h1 className="outline w-25 pa3 mr2 tc">{this.state.trivia}</h1>
                <button onClick={this.getTrivia}>click here for more trivia</button>
            </div>
        );
    }

    getTrivia = async () => {
        console.log('hello');
        let today = new Date();
        console.log('hello');
        let response = await fetch('http://numbersapi.com/' + (today.getMonth()+1) + '/' + (today.getDate()) + '/date');
        console.log('hello');
        let data = await response.text();
        console.log('hello');
        this.setState({
            trivia: data
        })
        
    }
}

export default Numbers;