import React from 'react';
import './App.css';
import Snippet from './Snippet'

// CONSTRUCTOR gets executed as the very first thing in the class initialization
// RENDER will occurr at every state/props change
// COMPONENTDIDMOUNT gets executed just once for every mounting, perfect place for AJAX
// COMPONENTWILLUNMOUNT gets executed an instant before the component is going to be removed
// COMPONENTDIDUPDATE

class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   console.log('1 - MAIN COMPONENT CONSTRUCTOR')
  //   // bindings
  //   // this.changeState = this.changeState.bind(this)
  // }

  state = {
    test: '',
    show: true
  }

  componentDidMount = async () => {
    console.log("COMPONENTDIDMOUNT METHOD")
    // PERFECT FOR ASYNC CALLS
    // let response = await
  }


  buttonClick = () => {
    this.setState({
      test: 'something',
      show: !this.state.show
    })
  }

  componentDidUpdate = () => {
    console.log('COMPONENTDIDUPDATE TRIGGERED')
    if (this.state.test !== 'something else') {
      console.log('COMPONENTDIDUPDATE WILL SET THE STATE')
      this.setState({
        test: this.state.test + ' else'
      })
    }
  }

  render() {
    console.log("RENDER METHOD")
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.buttonClick}>PRESS ME</button>
          {this.state.show && <Snippet title='HELLO' />}
        </header>
      </div>
    );
  }
}

export default App;
