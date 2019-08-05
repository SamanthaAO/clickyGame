import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import _ from "lodash";
import AnimationPage from "./components/Animation/mbd";





class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    count: 0,
    response: "Welcome please click on a different picture for each guess.",
    friends
    
  };

  shuffleBoJo = () => {
    friends.map(friend => friend.sortNum = Math.floor((Math.random() * 200) + 1));
    
    let sortedTiles = _.sortBy(friends, ['sortNum']);
    console.log(this);
    this.setState({ friends: sortedTiles})
    console.log(friends)
  }

  

updateClicked = id => {

  const that = this;
  console.log(that);
    friends.map(function(friend){
      
      if(friend.id === id && friend.clicked ===false){
        console.log(that);
          that.setState({ count: that.state.count +1});
          that.setState({ response: "Nice Guess"});

          return friend.clicked = true;
      }
      else if(friend.id === id && friend.clicked === true){
          that.setState({ count: 0});
          that.setState({ response: "You have chosen poorly. Game Over."});
          return friend.clicked = true;
      }
    })
      
  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <AnimationPage/>
        <Title>The Many Faces of BoJo {this.state.count} {this.state.response}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            updateClicked = {this.updateClicked}
            shuffleBoJo = {this.shuffleBoJo}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
