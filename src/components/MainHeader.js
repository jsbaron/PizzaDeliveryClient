import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/headers.module.css'
import Menu from './MenuButton'

class MainHeader extends Component {
    render() {
        return (
            <div className={styles.main}>
                <h1 className={styles.innerMain}>
                    <Link to='/' style={{color: "white"}}>
                        Dijkstra's Pizza
                    </Link>
                </h1>
                <Menu className={styles.menu}/>
            </div>
        );
    }
}

export default MainHeader;