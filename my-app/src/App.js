import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import icons from "./icons.json";
import { render } from '@testing-library/react';

import Wrapper from "./components/Wrapper";
import IconCard from "./components/IconCard";
import TopScore from "./components/TopScore";
import Title from './components/Title';
import Score from "./components/Score";
// import Alert from "./components/Alert";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    icons,
    topScore: 0,
    message: "",
    score: 0,
    iconArray: [],
    historyArray: [],
    isGameOver: false
  };

  

arrayShuffle = () =>{
  // console.log(this)
let newPos,
temp
;

for (let i = this.state.icons.length - 1; i > 0; i--) {
  newPos = Math.floor(Math.random() * (i + 1));
  temp = this.state.icons[i];
  this.state.icons[i] = this.state.icons[newPos];
  this.state.icons[newPos] = temp;
}
this.setState({icons: icons})
} 

handleClick = id =>{

  if (this.state.historyArray.includes(id)){
    this.setState({isGameOver: true})
    
  } else {
    this.setState({historyArray: [...this.state.historyArray, id]})
    this.arrayShuffle()
    // console.log(this.state.historyArray)
    this.setState({score: this.state.score+1})
    console.log(this.state.score)
  }  
  }



  render(){

if(this.state.isGameOver){
  return(
    <h1>You lost!!</h1>
  )} else {
    return (

        <Wrapper>
            <Title>Clicky Name</Title>
          
            <Score>Score: {this.state.score}</Score>
            {this.state.icons.map(icon => (
              <IconCard
              handleClick={this.handleClick}
                id={icon.id}
                key={icon.image}
                image={icon.image}
              />
            ))}
          </Wrapper>
        
      );
  }
  
    // return (

    //   <Wrapper>
    //       <h1 className = "title">Clicky Game</h1>
        
          
    //       {this.state.icons.map(icon => (
    //         <IconCard
    //         handleClick={this.handleClick}
    //           id={icon.id}
    //           key={icon.image}
    //           image={icon.image}
    //         />
    //       ))}
    //     </Wrapper>
      
    // );
    // )
}
}
export default App;
