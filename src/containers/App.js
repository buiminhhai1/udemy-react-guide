import React, {Component} from 'react'; 
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/auxiliary/auxiliary';
import AuthContext from '../context/auth-context'
class App extends Component {
  constructor(props){
    super(props);
    console.log("App.js constructor");
    this.state = {
      persons: [
        {id: 'asfa1', name: 'Max', age: 28},
        {id: "vasdf1", name: "Manu", age: 29},
        {id: 'asdf11', name: "Stepanie", age: 26}
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    };
  }
  
  static getDerivedStateFromProps(props,state){
    console.log('App.js getDerivedStateFromProps ', props);
    return state;
  }

  componentDidMount(){
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState,props)=>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1}
      });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }
  render(){
    console.log('App.js render');

    let persons = null;
    if(this.state.showPersons) {
      persons = (
       <div>{
        <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.namechangeHandler}
            isAuthenticated={this.state.authenticated}
            />
          }
       </div> 
      );
    }

    return(
      <Aux>
        <button onClick={() => {
          this.setState({showCockpit: !this.state.showCockpit});}}>
            Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{authenticated: this.state.authenticated,
          login: this.loginHandler}}>

          {this.state.showCockpit ? 
          <Cockpit 
            title={this.props.appTitle}
            toggle={this.togglePersonHandler} 
            showPerson={this.state.showPersons} 
            personsLength={this.state.persons.length}
            /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux> 
    );
  }
  }
export default WithClass(App, "App");
