import { Redirect } from "react-router-dom";
import React, { Component } from "react";

class Persons extends Component {
  state = {
    redirectToAddPerson: false,
    redirectToDetails: false,
  };

  render() {
    if (this.state.redirectToAddPerson) {
      return <Redirect to="/AddPerson" />;
    }

    if (this.state.redirectToDetails) {
      return <Redirect to="/Details" />;
    }

    const personElements = this.props.persons.map((person, index) => (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>
          <button
            onClick={() => {
              this.props.setCurrentPerson(
                person.name,
                person.age,
                person.biography
              );
              this.setState({ redirectToDetails: true });
            }}
          >
            Details
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h2>Persons Page</h2>
        <button onClick={() => this.setState({ redirectToAddPerson: true })}>
          Add Person
        </button>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
            {personElements}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Persons;
