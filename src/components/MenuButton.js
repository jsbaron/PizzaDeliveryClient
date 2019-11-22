import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/headers.module.css'

export default class Menu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <div className={styles.menuButton} onClick={this.showMenu}>
          Explore
        </div>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <Link to='/locations'>
                    <button> Locations </button>
                </Link>
                <button> About Us </button>
                <button> Contact </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}