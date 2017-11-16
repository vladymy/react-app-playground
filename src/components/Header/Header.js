import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        let menuState = this.state.isToggleOn ? 'is-active' : '';
        return (
            <div className="header">
                <div className="navbar has-shadow">
                    <div className="container">
                        <div className="navbar-brand">
                            <a href="" className="navbar-item">My Company</a>
                            <span className={'navbar-burger burger ' + menuState} onClick={this.toggleNav}>
                                 <span></span><span></span><span></span>
                            </span>
                        </div>
                        <div className={'navbar-menu ' + menuState} id="top-nav-menu" >
                            <div className="navbar-end">
                                <Link to="/" className="navbar-item r-item">Home</Link>
                                <Link to="faq" className="navbar-item r-item">Features</Link>
                                <Link to="faq" className="navbar-item r-item">About</Link>
                                <Link to="faq" className="navbar-item r-item">Faq</Link>

                                <div className="navbar-item">
                                    <p className="control">
                                        <a href="" className="button is-primary is-outlined">
                                            <span className="icon"><i className="fa fa-download"></i></span>
                                            <span>Join Us</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
