import React from 'react';
import './Footer.css'

const Footer = () => {
        return (
            <footer className="is-primary footer">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p>And this right here is  a spiffy footer, where you can put stuff.</p>
                        </div>
                        <div className="column has-text-right">
                            <a href="#" className="icon"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="icon"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
};

export default Footer;
