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
    score: 0,
    topScore: 0,
    message: "Click any image to begin!",
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
correctChoice = () => {

  if (this.state.score + 1 > this.state.topScore) {
    this.setState({topScore: this.state.topScore + 1})
  } else {
    this.setState({score: this.state.score + 1, message: "You guessed correctly"})
  }

}  

wrongChoice = () => {

  this.setState({score: 0, message: "You guessed incorrectly!"})
  const updatedCharacters = this.state.characters.map(ch => ch.isClicked === true ? { ...ch, isClicked: false } : ch)
  return updatedCharacters

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
        <Score>Your Score:</Score>
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