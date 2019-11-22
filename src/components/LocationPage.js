import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LocationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stores: []
        };
    }

    componentDidMount() {
        fetch('https://dijkstras.herokuapp.com/stores/',
        {
            method: 'GET',
            headers: new Headers({
                "Access-Control-Allow-Origin": '*'
            })
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({stores: data})
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <h2>Dijkstra's Pizza Store Locations</h2>
                <ul>
                    {this.state.stores.map(
                        function (store) {
                            return <li key={store.id}>
                                    <Link to={{
                                        pathname: '/menus/' + store.id,
                                        state: { store: store} }}>
                                        {store.address.streetAddr}
                                    </Link>
                                </li>
                        }
                    )}
                </ul>
            </div>
        );
    }
}