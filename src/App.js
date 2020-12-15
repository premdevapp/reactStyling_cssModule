import React, { Component } from "react";
import Person from "./Person/Person";
import Classes from "./App.module.scss";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";

class App extends Component {
  state = {
    persons: [
      { id: "asf111", name: "Premnath", age: 29 },
      { id: "asf222", name: "Priyadharsini", age: 27 },
      { id: "asf333", name: "Pichaimuthu", age: 57 },
      { id: "asf444", name: "Padmavathy", age: 42 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personInx = this.state.persons.findIndex((prsn) => {
      return prsn.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personInx]);
    const person = { ...this.state.persons[personInx] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personInx] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    //mutation
    //const persons = this.state.persons;
    //non mutation
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let Persons = null;
    let btnClass = [Classes.button];

    if (this.state.showPersons) {
      Persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundry key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  name={person.name}
                  age={person.age}
                />
              </ErrorBoundry>
            );
          })}
        </div>
      );
      btnClass.push(Classes.Red);
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) assignedClasses.push(Classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(Classes.bold);

    return (
      <div className={Classes.Main}>
        <header className={Classes.Appheader}>
          <p>Hi i am REACT app</p>
          <p className={assignedClasses.join(" ")}>This is really working</p>
          {Persons}
          <button
            className={btnClass.join(" ")}
            onClick={this.togglePersonsHandler}
          >
            Toggle Show
          </button>
        </header>
      </div>
    );
  }
}

export default App;
