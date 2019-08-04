import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import Aux from '../../../hoc/auxiliary/auxiliary';
import './Person.css';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    // Now this allows React to automatically connect this component here

    componentDidMount(){
        //this.inputElement.focus();
        
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('Person.js rendering...');
        return (
            <Aux>
                {this.context.authenticated ? 
                    <p>Authenticated!</p> : 
                    <p>Please log in</p>
                }
                
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default WithClass(Person,"Person");