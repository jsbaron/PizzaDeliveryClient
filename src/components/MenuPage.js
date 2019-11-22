import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.location.state.store.menu.pizzas.map(function(pizza) {
                        return(<li key={pizza.id}>
                            <Link to={{
                                pathname: '/pizzas/' + pizza.id,
                                state: {
                                    pizza: pizza
                                }
                            }}>
                                {pizza.name}
                            </Link>
                        </li>);
                    })}
                </ul>
            </div>
        );
    }
}