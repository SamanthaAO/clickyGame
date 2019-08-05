import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import _ from "lodash";
import AnimationPage from "./components/Animation/mbd";
import { MDBView,  MDBContainer, MDBRow,} from "mdbreact";





class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    count: 0,
    gameOver: false,
    shake: 0,
    response: "Welcome please click on a different picture for each guess.",
    friends

  };

  shuffleBoJo = () => {
    friends.map(friend => friend.sortNum = Math.floor((Math.random() * 200) + 1));

    let sortedTiles = _.sortBy(friends, ['sortNum']);
    console.log(this);
    this.setState({ friends: sortedTiles })
    console.log(friends)
  }



  updateClicked = id => {

    const that = this;
    console.log(that);
    friends.map(function (friend) {

      if (friend.id === id && friend.clicked === false) {
        console.log(that);
        that.setState({ count: that.state.count + 1 });
        that.setState({ response: "Nice Guess" });

        return friend.clicked = true;
      }
      else if (friend.id === id && friend.clicked === true) {
        that.setState({ count: 0 });
        that.setState({shake: 1});
        console.log(that);
        that.setState({ response: "You have chosen poorly. Game Over." });
        return friend.clicked = true;
      }
    })

  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        
        <Title>The Many Faces of BoJo {this.state.count} {this.state.response}</Title>
        <MDBContainer>
        <MDBRow className="masonry">
          {this.state.friends.map(friend => (
             <AnimationPage shake={this.state.shake}>
             <MDBView hover zoom>
              <FriendCard
                updateClicked={this.updateClicked}
                shuffleBoJo={this.shuffleBoJo}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}

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
