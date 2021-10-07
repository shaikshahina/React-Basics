import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// for proptypes we use
// const propTypes = {
//     name: PropTypes.string.isRequired,
//     onClocked: PropTypes.func,
//     title: PropTypes.string.isRequired,
// }

// const defaultProps = {
//     name: "default name when it is not passed from props"
// }

class MyComponent extends Component {


    render() {
        const {title,name,onClick} = this.props;
        return (
            <div className = "MyComponent">
                <h1>Title:{title}</h1>
                <h2>Name:{name}</h2>
                <div onClick = {onClick}>Click Here</div>
                
            </div>
        );
    }
}

// MyComponent.propTypes = propTypes;
// MyComponent.defaultProps = defaultProps;

export default MyComponent;