import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FruitSelector extends Component {

    // Currying that returns a function
    addFruit = (fruitName) => (event) => {
        this.props.dispatch({ type: 'POST_FRUIT', payload: fruitName })
    }

    getFruit() {
        this.props.dispatch({ type: 'GET_FRUIT' })
    }

    // Displays the fruit selection buttons on the DOM
    render() {
        return (
            <div>
                <button onClick={this.addFruit('Apple')}>Add Apple</button>
                <button onClick={this.addFruit('Orange')}>Add Orange</button>
                <button onClick={this.addFruit('Watermelon')}>Add Watermellon</button>
                <button onClick={this.addFruit('Grapefruit')}>Add Grapefruit</button>
            </div>
        )
    }
}

export default connect()(FruitSelector);