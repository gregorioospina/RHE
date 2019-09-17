import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.getNames = this.getNames.bind(this);
    this.printNames = this.printNames.bind(this);
    this.insertName = this.insertName.bind(this);

    this.state = {
      names: ""
    }
  }

  render(){
    return (
      <>
      <div> Hola todos, como van !</div>
      <div>{this.printNames()}</div>
      </>
    );
  }

  componentDidMount(){
    this.insertName();
    this.getNames();
  }

  printNames(){
      return (<p> {this.state.names} </p>);
  }

  insertName(newnm){

    let nm = {
      name: newnm
    };
    fetch("/newname", {
      method: 'post',
      headers: {"Content-Type":"application/json"},
      body: nm })
      .then(res =>{
        console.log(res);
        console.log("hoooola")
      })
      .then(final =>{
        console.log(final);
      })
  }

  getNames(){
    fetch("/names")
    .then(res =>{
      console.log(res);
      return res.json()})
      .then(_names => {
        this.setState({names: _names.value});
      })
  }
}

export default App;
