import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StoreImages from '../assets/images/stores/StoreImages'
import TopNav from './TopNav';

export default class MainPage extends Component {

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
                <h2>The fastest path to your door.</h2>
                <TopNav stores={this.state.stores}/>
                <ul>
                    {this.state.stores.map(
                        function (store) {
                            return <li key={store.id}>
                                    <Link to={{
                                        pathname: '/menus/' + store.id,
                                        state: {store: store} }}>
                                        <p>{store.address.streetAddr}</p>
                                        <img src={StoreImages[store.id]} alt={store.id} style={{height: "200px", width: "300px"}}/>
                                    </Link>
                                </li>
                        }
                    )}
                </ul>
            </div>
        );
    }
}