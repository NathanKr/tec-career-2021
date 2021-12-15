import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { id: 1, first: "avi", last: "cohen" },
      { id: 2, first: "mickey", last: "berkovich" },
      { id: 3, first: "jim", last: "ber" },
    ],
    personToEdit: { first: "", last: "" },
    inputFirst: "",
    inputLast: "",
  };
  render() {
    const { persons, personToEdit, inputFirst, inputLast } = this.state;
    const personsElement = persons.map((person) => (
      <div key={person.id}>
        <p>
          first : {person.first} ,last : {person.last}
        </p>
        <button
          onClick={() => {
            const newPersons = persons.filter((item) => item.id !== person.id);
            this.setState({ persons: newPersons });
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            this.setState({
              personToEdit: person,
              inputFirst: person.first,
              inputLast: person.last,
            });
          }}
        >
          Edit
        </button>
      </div>
    ));

    const editElement = (
      <div>
        first name
        <input
          onChange={(evt) => {
            this.setState({ inputFirst: evt.target.value });
          }}
          value={inputFirst}
        />
        <br />
        last name
        <input
          onChange={(evt) => {
            this.setState({ inputLast: evt.target.value });
          }}
          value={inputLast}
        />
        <br />
        <button
          onClick={() => {
            // let newPersons = [...persons];
            let person = persons.find((it) => it.id === personToEdit.id);
            person.last = inputLast;
            person.first = inputFirst;
            this.setState({ persons, inputFirst: "", inputLast: "" });
          }}
        >
          Update
        </button>
      </div>
    );

    return (
      <div className="App">
        {editElement}
        {personsElement}
      </div>
    );
  }
}

export default App;
