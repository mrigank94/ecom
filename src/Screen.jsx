import React, { Component } from 'react';
import { connect } from 'react-redux';

function Screen(props) {

    console.log(props);
        return (
            <div className='screen'>{props.expression}</div>
        )
    
}

function mapStateToProps(store) {
    //store.expression is now available as props.expression in Screen component
    return {
        expression: store.expression
    }
}
export default connect(mapStateToProps)(Screen)
