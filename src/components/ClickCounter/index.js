// Write your code here
import {Component} from "react"
import './index.css'

class ClickCounter extends Component{
    state={count:0}
    onIncrement=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }

    render(){
        // const {count}=this.state
        return(
            <div className="bg-Container">
                <h1 className="main_heading">The Button has been clicked{this.state.count}times</h1>
                <p>Click the button to increase the count</p>
                <button className="buttonElement " OnClick={this.onIncrement}>Click Me</button>
            </div>
        )
    }   
}

export default ClickCounter
