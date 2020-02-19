import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import icon from "./icon.json";
import { render } from '@testing-library/react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import IconCard from "./components/IconCard";
import Score from "./components/Score";
import Alert from "./components/Alert";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    icon: icon,
    topScore: 0,
    message: "",
    clickedIcon: []
  };

arrayShuffle = (arr) =>{
let newPos,
temp;

for (let i = icon.length - 1; i > 0; i--) {
  newPos = Math.floor(Math.random() * (i + 1));
  temp = icon[i];
  icon[i] = icon[newPos];
  icon[newPos] = temp;
}
return arr;
} 

winnerAlertHandler = (newState) => {
  if (newState.clickedIcon.length === 12) {
    newState.message = "You Win!";
    newState.clickedIcon = [];
    this.setState(this.state = newState)
  }
}

checkGuessHandler = (name) => {
  const newState = { ...this.state };
  if (newState.clickedIcon.includes(name)) {
    newState.message = `YOU ALREADY PICKED "${name}"!`
    newState.clickedIcon = []
    this.setState(this.state = newState)
  } else {
    newState.clickedIcon.push(name)
    newState.message = `GOOD CHOICE!`
    this.setState(this.state = newState)
  }
  return (newState, this.winnerAlertHandler)
}


updateTopScoreHandler = (newState) => {
  if (newState.clickedIcon.length > newState.topScore) {
    newState.topScore++
    this.setState(this.state = newState)
  }
  return(newState)
}

clickIconImage = () => {
  const name = attributes.getNamedItem("name").value;
  // this.correctChoice()
  this.arrayShuffle()
  this.checkGuessHandler()
  this.checkGuessHandler(name, this.updateTopScoreHandler)
  // this.checkGuess()
  // this.checkGuess(name, this.updateTopScore)
};

  render(){
  return (

    <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.message === "GOOD CHOICE!" ? (
                <Alert message={this.state.message} />
              ) : (
                  <Alert message={this.state.message} />
                )}
        <Score type="Score" score={this.state.clickedIcon.length} />
        {this.state.icon.map(iconImage => (
          <IconCard
          clickIconImage={this.clickIconImage}
            id={iconImage.id}
            key={iconImage.id}
            image={iconImage.image}
          />
        ))}
      </Wrapper>
    
  );
}
}
export default App;
