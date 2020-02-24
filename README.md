# Clicky-Game

![clicky game gif](my-app/1.gif)

### This is my very first React app, Clicky Game, a user can start the game by click any image and the image will be shuffled when each time the player click the image. The score will go back to 0 when click a image twice, and it will record the highest score.

### There are some very challenging parts for me when I was working on this app.
- shuffle cards
#### I used array for this function, and I will call this function each time when the user click an image.
``` javascript
arrayShuffle = () => {
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
```
- Get used to React component
#### At the beginning, it is very hard for me to get used to create components for each component I want to display in the page, but later when I get used to the component, I start to feel it is very convenient especially when I want to change any style, and I can just go to that component and make de change. Files looks more clean and get less chance the mess the code.

#### components I have:
- Alert: let user know how to play the game
- IconCard: manage all images display on the page
- Score: record the score
- TopScore: record the top score
- Title: manage the title of the game
- Wrapper

### Technologies I have been used in this app
- HTML
- CSS
- React.js
- JavaScript
