import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import _ from "lodash";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  shuffleBoJo = () => {
    friends.map(friend => friend.sortNum = Math.floor((Math.random() * 200) + 1));
    this.setState({ friends });
    let sortedTiles = _.sortBy(friends, ['sortNum']);
    this.setState({ friends: sortedTiles})

    console.log(friends)
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
        <Title>The Many Faces of BoJo</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            shuffleBoJo = {this.shuffleBoJo}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
