import "./App.css";
import Home from "./screens/Home";
import Persons from "./screens/Persons";
import AddPerson from "./screens/AddPerson";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Details from "./screens/Details";

function App() {
  const persons = [
    { name: "Avi", age: 83, biography: "i am living in LA" },
    { name: "Yossi", age: 44, biography: "i am living in TA" },
  ];

  const currentPerson = { name: "", age: 0, biography: "" };

  const setCurrentPerson = (name, age, biography) => {
    currentPerson.name = name;
    currentPerson.age = age;
    currentPerson.biography = biography;
  };

  const addPerson = (name, age, biography) => {
    persons.push({ name, age, biography });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link> <Link to="/Persons">Persons</Link>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Persons"
            render={() => (
              <Persons
                setCurrentPerson={setCurrentPerson}
                persons={persons}
              />
            )}
          />
          <Route
            exact
            path="/AddPerson"
            render={() => <AddPerson addPerson={addPerson} />}
          />

          <Route
            exact
            path="/Details"
            render={() => (
              <Details
                name={currentPerson.name}
                age={currentPerson.age}
                biography={currentPerson.biography}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
