import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes:{},
    order:{}
  };

  addFish = (fish) => {
     //1. Take a copy of exsisting state
      const fishes = {...this.state.fishes};
      //2. Add our new fish to that fishes variable
      fishes[`fish${Date.now()}`] = fish;

      //3. Set the new fishes object to state

      this.setState({
          fishes: fishes //overwrite states(pleaseUpdateThesePiecesOfStatePlease)
      })
      // this.state.fishes.push(fish);
  }
    render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
        </div>
        <Order />
        <Inventory  addFish ={this.addFish}/>
      </div>
    );
  }
}

export default App;
