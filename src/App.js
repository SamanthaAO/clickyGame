import React, { Component } from "react";
import BoJoCard from "./components/BoJoCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import bojos from "./bojos.json";
import _ from "lodash";
import AnimationPage from "./components/Animation/mbd";
import JumbotronPage from "./components/Jumbotron";
import { MDBView, MDBContainer, MDBRow, } from "mdbreact";
import FooterPage from "./components/Footer";





class App extends Component {
  // Setting this.state.bojos to the bojos json array
  state = {
    count: 0,
    highScore: 0,
    shake: 0,
    response: "Click an Image to begin!",
    bojos

  };

  componentDidMount() {
    this.setState({ bojos: this.shuffleBoJo(bojos) });
  }

  shuffleBoJo = (arr) => {
    arr.map(bojo => bojo.sortNum = Math.floor((Math.random() * 200) + 1));

    const sortedTiles = _.sortBy(arr, ['sortNum']);

    return sortedTiles;
  }

  handleGuess = (isCorrect, bojoArray) => {
    if (!isCorrect) {
      this.setState({
        count: 0,
        shake: 1,
        response: "You have chosen poorly. Game Over.",
        bojos: this.resetBoJo(bojoArray)
      })
    }
    else {
      const newScore = this.state.count + 1;
      const highScore = (newScore > this.state.highScore) ? newScore : this.state.highScore;
      this.setState({
        count: newScore,
        highScore: highScore,
        shake: 0,
        response: (newScore % 12 === 0) ? "WOW, you guessed them all, but can you do it again?" : "Nice Guess",
        bojos: (newScore % 12 === 0) ? this.resetBoJo(bojoArray) : this.shuffleBoJo(bojoArray)
      })


    }
  }


  resetBoJo = bojoArray => {

    const newBojo = bojoArray.map(bojo => {
      bojo.clicked = false;
      return bojo;
    });

    return this.shuffleBoJo(newBojo);
  }

  updateClicked = id => {

    let isCorrect = false;

    const updatedBojos = bojos.map(function (bojo) {
      console.log(`expectedID: ${id} \n currentID: ${bojo.id} \n isCorrect:${bojo.clicked}`)

      if (bojo.id === id && bojo.clicked === false) {
        bojo.clicked = true;
        isCorrect = true;
      }

      return bojo;

    })

    console.log(updatedBojos);
    this.handleGuess(isCorrect, updatedBojos)

  }


  // Map over this.state.bojos and render a bojoCard component for each bojo object
  render() {
    return (



      <Wrapper>
        <Nav
          count={this.state.count}
          highScore={this.state.highScore}
          response={this.state.response}
        />
        <JumbotronPage />
        <MDBContainer >
          <MDBRow className="justify-content-center">
            {this.state.bojos.map(bojo => (
              <AnimationPage key={bojo.id} shake={this.state.shake}>
                <MDBView hover zoom>
                  <BoJoCard
                    updateClicked={this.updateClicked}
                    shuffleBoJo={this.shuffleBoJo}
                    id={bojo.id}
                    image={bojo.image}
                  />
                </MDBView>
              </AnimationPage>
            ))}
          </MDBRow>
        </MDBContainer>
        <FooterPage />
      </Wrapper>
    );
  }
}

export default App;
