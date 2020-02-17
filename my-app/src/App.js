import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import icon from "./icon.json";
import { render } from '@testing-library/react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import IconCard from "./components/IconCard";
import Score from "./components/Score";



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

for (let i = arr.length - 1; i > 0; i--) {
  newPos = Math.floor(Math.random() * (i + 1));
  temp = arr[i];
  arr[i] = arr[newPos];
  arr[newPos] = temp;
}
return arr;
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


clickIconImage = event => {

  const name = event.target.attributes.getNamedItem("name").value;
  this.shuffleCharacters()
  this.checkGuess(name, this.updateTopScore)
}

  render(){
  return (

    <Wrapper>
        <Title>Clicky Game</Title>
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
