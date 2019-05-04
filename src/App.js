import React, { Component } from 'react';
import './App.css';

import Header from './components/header'
import Wrapper from './components/wrapper'
import Pictures from './components/pictures'
import pics from "./pics.json";

class App extends Component {
  state = {
    pics,
    score: 0,
    highScore: localStorage.getItem("highScore"),
    round: 1,
    clickedIds: [],
    roundScore: 0
  }

  gameOver = () => {
    this.setState({
      score: 0,
      roundScore: 0,
      clickedIds: [],
      round: 1

    })
    alert("Game over!");
  };


  won = () => {
    this.setState({
      round: this.state.round + 1,
      clickedIds: [],
      roundScore: 0

    })
    alert("You win!!");
  }
  
  addScore = (id) => {
    this.setState({
      score: this.state.score + 1,
      roundScore: this.state.roundScore + 1,
    }, () => {
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score
        })
      }
      localStorage.setItem('highScore', this.state.score);
      if (this.state.roundScore === 12) {
        this.won();
      }
      this.state.clickedIds.push(id)

    });
  }


  onPickClicked = (id) => {

    if (this.state.clickedIds.includes(id)) {
      this.gameOver();
    } else {
      this.addScore(id);
    }

  };

  render() {
      return (
        <Wrapper>
          <Header score={this.state.score}
          round={this.state.round}
          highScore={this.state.highScore}/>
          <div className="container"> {/* randomizes pics before map */}
            {this.state.pics.sort((a, b) => {
                return 0.5 - Math.random();
              })
              // displays all pics
              .map((pic, index) =>
                  <Pictures key={index}
                  picClicked={this.onPickClicked}
                  src={pic.image}
                  alt={pic.name}
                  id={pic.id}/>
                )
              }

          </div>
        </Wrapper>
      );
  }
}

export default App;