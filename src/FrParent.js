import React, { Component } from 'react';
import FrInput from './FrInput';

class FrParent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        // this.inputRef.current.focus();
        alert(this.inputRef.current.value);

    }
    
    render() {
        return (
            <div>
                <FrInput ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default FrParent;