import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            cnt : 0
        }
    }
    componentDidMount() {
        console.log("start");
    }
    componentDidUpdate() {
        console.log("component is updated")
    } 

    Increment() {
        this.setState({cnt: this.state.cnt + 1})
    }

    Decrement() {
        this.setState({cnt: this.state.cnt - 1})
    }

    componentWillUnmount () {
        console.log("component is unmounted")
    }
    
    render() {
        return (
            <>
                <h1>Counter App</h1>
                <h2>Count :- {this.state.cnt}</h2>
                <button onClick={() => this.Increment()}>+</button>
                <button onClick={() => this.Decrement()}>-</button>
            </>
        )
    }
}

export default Counter