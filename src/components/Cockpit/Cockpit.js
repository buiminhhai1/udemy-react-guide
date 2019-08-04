import React, { useEffect, useRef } from 'react';
import './Cockpit.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
      
    // passing second argument is [] === componentDidMount() 
    useEffect(()=>{
      console.log("[Cockpit.js] useEffect");
      // setTimeout(()=>{
      //   alert("get data from cloud");
      // }, 1000);
      toggleBtnRef.current.click();
      return () => { 
        console.log("[Cockit.js] cleanup work in useEffect");
      }
    }, []);

    useEffect(()=>{
      console.log("[Cockpit.js] 2nd useEffect");
      return () => { 
        console.log("[Cockit.js] 2nd cleanup work in useEffect");
      }
    })

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit', 
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    if(props.showPerson){
        style.backgroundColor= 'red';
    }

    const classes = [];
    if(props.personsLength <= 2){
      classes.push('red');
    }
    if(props.personsLength <= 1){
      classes.push('bold');
    }

    return (
    <div>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')} >This is really working!</p>
        <button
        style={style}
        onClick={props.toggle}
        ref={toggleBtnRef}
        >Toggle Persons</button>
        <AuthContext.Consumer>
          {context => <button onClick={context.login}>Log in</button>}
        </AuthContext.Consumer>
        
    </div>  
      );
      
};

export default React.memo(Cockpit);