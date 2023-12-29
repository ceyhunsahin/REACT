import React, { Component } from 'react'


export default class ClassComponents extends Component {
    /* constructor (props) {
        super(props)
        this.state = {count : 0}
    } */
  state = {count : 0}

  increment = () => {
    this.setState({count : this.state.count + 1})
  }

  decrement = () => {
    this.setState({count : this.state.count - 1})
  }

  nameWrite = () => {
    this.setState({name : "Ceyhun"})
  }

/*   componentDidMount = () => {
    console.log("ClassComponents componentDidMount  mounted")
    this.increment()

  } */
  componentDidUpdate = (prevProps, prevState) => { 
    console.log("ClassComponents componentDidUpdate  mounted")
    console.log("prevState", prevState)

   }
   getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("ClassComponents getSnapshotBeforeUpdate  mounted")
    console.log("prevState", prevState)
    return prevState
   }

   componentWillUnmount = () => {   
        console.log("ClassComponents componentWillUnmount  mounted")
   }

  //once Render then componenDidMount Works

  render() {
    console.log("ClassComponents componentDidUpdate rendered")

    return (
      <div>

            <h2>Class Components</h2>
            <h3>Count : {this.state.count}</h3>
            <h3>Name : {this.state.name}</h3>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.nameWrite}>Name</button>
        
      </div>
    )
  }
}
