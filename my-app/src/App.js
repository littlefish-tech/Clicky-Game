import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import icons from "./icons.json";
import { render } from '@testing-library/react';

import Wrapper from "./components/Wrapper";
import IconCard from "./components/IconCard";
// import Score from "./components/Score";
// import Alert from "./components/Alert";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    icons,
    topScore: 0,
    message: "",
    score: 0,
    iconArray: []
  };

arrayShuffle = (arr) =>{
  console.log("click")
let newPos,
temp;

for (let i = this.state.icons.length - 1; i > 0; i--) {
  newPos = Math.floor(Math.random() * (i + 1));
  temp = this.state.icons[i];
  this.state.icons[i] = this.state.icons[newPos];
  this.state.icons[newPos] = temp;
}
this.setState({icons: icons})

} 


// clickIconImage = () => {
// console.log("clicked")
// this.arrayShuffle();
// };

  render(){
  return (

    <Wrapper>
        <h1 className = "title">Clicky Game</h1>
      
        {/* <Score type="Score" score={this.state.clickedIcon.length} /> */}
        {this.state.icons.map(icon => (
          <IconCard
          arrayShuffle={this.arrayShuffle}
         
            id={icon.id}
            key={icon.image}
            image={icon.image}
          />
        ))}
      </Wrapper>
    
  );
}
}
export default App;
