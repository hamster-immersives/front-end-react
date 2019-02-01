import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    message: ''
  }

  handleCLick = () => {
    axios.get('http://localhost:3001/users')
      .then(result => {
        //console.log(result)
        this.setState({
          message: result.data
        })
      })
      .catch(error => {
        console.log(error)
        // this.setState({
        //   message: error
        // })
      })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleCLick}>Click me</button>
        {this.state.message}
      </div>
    );
  }
}

export default App;
