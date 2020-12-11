import React, { Component } from "react";
import Item from "./Item";
import NewItemForm from './NewItemForm';

// const App = () => (
//   <div className="App">
//     <Item title="Moo" description="I'm a cow"/>
//   </div>
// );

class App extends Component {
  state = {
    items: [
      {
        title: "Baa",
        description: "I'm a sheep.",
      },
    ],
  };

  addNewItem = ({title, description}) => {
    const newItem = {
      title,
      description
    }

    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  render() {
    return (
      <div className="App">
        <NewItemForm onSubmit={this.addNewItem} />
        <ul>
          {this.state.items.map(({ title, description }) => (
            <Item title={title} description={description} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
