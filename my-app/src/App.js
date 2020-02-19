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


checkGuess = (name, cb) => {
  const newState = { ...this.state };
  if (newState.clickedIcon.includes(name)) {
    newState.message = `YOU ALREADY PICKED "${name.toUpperCase()}"!`
    newState.clickedIcon = []
    this.setState(this.state = newState)
  } else {
    newState.clickedIcon.push(name)
    newState.message = `GOOD CHOICE!`
    this.setState(this.state = newState)
  }
  cb(newState, this.alertWinner)
}




clickIconImage = () => {

  this.correctChoice()
  this.arrayShuffle()
  // this.checkGuess()
  // this.checkGuess(name, this.updateTopScore)
};

  render(){
  return (

    <Wrapper>
        <Title>Clicky Game</Title>
        <Alert></Alert>
        <Score type="Score" score={this.state.pickedChars.length} />
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
