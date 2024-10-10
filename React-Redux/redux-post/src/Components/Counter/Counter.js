import { Component } from "react";
import { store } from "../../Store/store";
import { decrement, increment } from "../../Store/action/CounterAction";
export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {counter: 0};
    }
    componentDidMount(){
           this.updateCounter();
           store.subscribe(this.updateCounter.bind(this));
            //console.log(state);

    }
    // Add and Less Method 
    onIncrement = () => {
        //debugger;
        store.dispatch(increment());
    }
    onDecrement = () => {
        store.dispatch(decrement());
    }
    // Update 
    updateCounter() {
        const state = store.getState();
        this.setState({
            counter: state.counter,
        });
    }
    render(){
        return(
            <div>
                <div>Counter Component</div>
                <div>{this.state.counter}</div>
                <div><button onClick={this.onIncrement}>Increment</button></div>
                <div><button onClick={this.onDecrement}>Decrement</button></div>
            </div>
        );

        
    }
}