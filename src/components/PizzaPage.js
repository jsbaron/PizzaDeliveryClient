import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PizzaPage extends Component {
    render() {
        return(
            <ul>
                <li>Price: {this.props.location.state.pizza.price}</li>
                <p>Ingredients</p>
                <ul>
                    {this.props.location.state.pizza.ingredients.map(
                        function(ingredient) {
                            return(
                                <li key={ingredient.id}>
                                    <Link to={{pathname: '/ingredients/' + ingredient.id,
                                    state: {ingredient: ingredient}}}>
                                        {ingredient.name}
                                    </Link>
                                </li>
                            );
                        }
                    )}
                </ul>
            </ul>
        );
    }
}