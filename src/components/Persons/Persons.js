import React, {PureComponent} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends PureComponent{
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     if(nextProps.persons !== this.props.persons 
    //         || nextProps.changed !== this.props.changed 
    //         || nextProps.clicked !== this.props.clicked){
    //         return true;
    //     }

    //     return false;
    // }
    // use Snapshop to save some data before the update
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.group('[Persons.js] getSnapshotBeforeUpdate');
        return {message:"Snapshot!"};
    }

    // Usually use it 
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    // Use it to clean up Lifecycle hooks
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }

    render(){
        console.log("Persons.js rendering...");
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id} >
            <Person click = {() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed ={(event) => this.props.changed(event, person.id)}/>      
            </ErrorBoundary>
        });
    }
}

export default Persons;