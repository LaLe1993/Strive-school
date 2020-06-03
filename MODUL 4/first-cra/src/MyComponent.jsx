import React from 'react'

class MyComponent extends React.Component {

    // NOW I CAN USE THE STATE
    state = {
        counter: 0
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        return <div style={{border: '2px solid white;', padding: '1rem'}}>
        <button onClick={this.increase}>Increase</button>
        <p>MY COUNTER FORM STATE IS {this.state.counter}</p>
        <h1 className="title">{this.props.text || "No title provided!"}</h1>
        <h2>Something</h2>
    </div>
    }
}

// const MyComponent = (props) => { //FUNCTIONAL COMPONENT
//     console.log(props)
// return <div style={{border: '1px solid white;', padding: '1rem'}}>
//         <h1 className="title">{props.text || "No title provided!"}</h1>
//         <h2>Something</h2>
//     </div>
// }

export default MyComponent

//PROPS
//STATE

//CLASS BASED COMPONENT