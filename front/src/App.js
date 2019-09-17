import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.getNames = this.getNames.bind(this);
    this.printNames = this.printNames.bind(this);
    this.insertName = this.insertName.bind(this);

    this.state = {
      name: ""
    }
  }

  render(){
    return (
      <>
      <div> Hola todos, como van !</div>
      <div>Chao</div>
      </>
    );
  }

  componentDidMount(){
    this.getNames();
  }

  printNames(){
      return (<p> {this.state.name} </p>);
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
        console.log("ok")
      })

  }

  getNames(){ 
    fetch("/names")
    .then(res => res.json())
      .then(_names => {
        console.log(_names);
        this.setState({names: _names.value});
      })
  }
}

export default App;
