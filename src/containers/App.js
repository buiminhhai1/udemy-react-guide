import React, {Component} from 'react'; 
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 28},
      {id: "vasdf1", name: "Manu", age: 29},
      {id: 'asdf11', name: "Stepanie", age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => { 
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler  = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    let persons = null;
    if(this.state.showPersons) {
      persons = (
       <div>{
        <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.namechangeHandler}/>
          }
       </div> 
      );
    }

    return(
      <div className="App">
        <Cockpit 
          toggle={this.togglePersonHandler} 
          showPerson={this.state.showPersons} 
          persons={this.state.persons}/>
        {persons}
      </div> 
    );
  }
}
export default App;
