import React, { Component } from "react";
import BoJoCard from "./components/BoJoCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import bojos from "./bojos.json";
import _ from "lodash";
import AnimationPage from "./components/Animation/mbd";
import JumbotronPage from "./components/Jumbotron";
import { MDBView,  MDBContainer, MDBRow,} from "mdbreact";





class App extends Component {
  // Setting this.state.bojos to the bojos json array
  state = {
    count: 0,
    highScore: 0,
    gameOver: false,
    shake: 0,
    response: "Click an Image to begin!",
    bojos

  };

  shuffleBoJo = () => {
    bojos.map(bojo => bojo.sortNum = Math.floor((Math.random() * 200) + 1));

    let sortedTiles = _.sortBy(bojos, ['sortNum']);
    console.log(this);
    this.setState({ bojos: sortedTiles })
    console.log(bojos)
  }



  updateClicked = id => {

    const that = this;
    console.log(that);
    bojos.map(function (bojo) {

      if (bojo.id === id && bojo.clicked === false) {
        console.log(that);
        that.setState({ count: that.state.count + 1 });
        that.setState({ response: "Nice Guess" });

        return bojo.clicked = true;
      }
      else if (bojo.id === id && bojo.clicked === true) {
        if(that.state.count > that.state.highScore){
          that.setState({ highScore: that.state.count });
        }
        that.setState({ count: 0 });
        that.setState({shake: 1});
        // const reset = that.state.bojos.map(bojo => {return bojo.clicked = false});
        // that.setState({bojos: reset});
        // console.log(bojos);
        that.setState({ response: "You have chosen poorly. Game Over." });
        
        return bojo.clicked = true;
      }
    })

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
        <JumbotronPage/>
        <MDBContainer >
        <MDBRow className="justify-content-center">
          {this.state.bojos.map(bojo => (
             <AnimationPage shake={this.state.shake}>
             <MDBView hover zoom>
              <BoJoCard
                updateClicked={this.updateClicked}
                shuffleBoJo={this.shuffleBoJo}
                id={bojo.id}
                key={bojo.id}
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
