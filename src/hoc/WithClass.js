import React from 'react';
import '../containers/App.css';
const withClass = (WrappedComponent, className) =>{
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};
export default withClass;