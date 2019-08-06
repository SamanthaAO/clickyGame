import React, { Component } from "react";
import BoJoCard from "./components/BoJoCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import bojos from "./bojos.json";
import _ from "lodash";
import AnimationPage from "./components/Animation/mbd";
import JumbotronPage from "./components/Jumbotron";
import { MDBView, MDBContainer, MDBRow, } from "mdbreact";





class App extends Component {
  // Setting this.state.bojos to the bojos json array
  state = {
    count: 0,
    highScore: 0,
    gameOver: false,
    shake: 2,
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
    //console.log(this);
    //this.setState({ bojos: sortedTiles })
    //console.log(bojos)
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
        response: "Nice Guess",
        bojos: this.shuffleBoJo(bojoArray)
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

    //onst that = this;
    //console.log(that);
    let isCorrect = false;

    const updatedBojos = bojos.map(function (bojo) {
      console.log(`expectedID: ${id} \n currentID: ${bojo.id} \n isCorrect:${bojo.clicked}`)

      if (bojo.id === id && bojo.clicked === false) {
        //console.log(that);
        // that.setState({ count: that.state.count + 1 });
        // that.setState({ response: "Nice Guess" });

        bojo.clicked = true;
        isCorrect = true;
      }

      return bojo;

      // else if (bojo.id === id && bojo.clicked === true) {
      //   if(that.state.count > that.state.highScore){
      //     // that.setState({ highScore: that.state.count });
      //   }
      //   // that.setState({ count: 0 });
      //   // that.setState({shake: 1});
      //   // const reset = that.state.bojos.map(bojo => {return bojo.clicked = false});
      //   // that.setState({bojos: reset});
      //   // console.log(bojos);
      //   // that.setState({ response: "You have chosen poorly. Game Over." });

      //   return bojo.clicked = true;
      //}
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
                    name={bojo.name}
                    image={bojo.image}
                  />
                </MDBView>
              </AnimationPage>
            ))}
          </MDBRow>
        </MDBContainer>

      </Wrapper>
    );
  }
}

export default App;
