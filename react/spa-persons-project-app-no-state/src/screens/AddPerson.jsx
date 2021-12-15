import { Component } from "react";
import { Redirect } from "react-router-dom";

class AddPerson extends Component {
  state = { name: "", age: 0, biography: "", redirect: false };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/Persons" />;
    }

    return (
      <div>
        Add Person page
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            this.props.addPerson(
              this.state.name,
              this.state.age,
              this.state.biography
            );
            this.setState({ redirect: true });
          }}
        >
          Name :{" "}
          <input
            type="text"
            onChange={(evt) => this.setState({ name: evt.target.value })}
          />
          <br />
          Age :{" "}
          <input
            type="number"
            onChange={(evt) => this.setState({ age: evt.target.value })}
          />
          <br />
          Biography :
          <textarea
            rows={5}
            onChange={(evt) => this.setState({ biography: evt.target.value })}
          />
          <br />
          <input type="submit" value="AddPerson" />
        </form>
      </div>
    );
  }
}

export default AddPerson;
