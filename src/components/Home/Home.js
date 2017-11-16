import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {

        let heading = 'Soaring to new heigths';
        let subheading = 'Valebat fatalis heuretes est.Ubi est domesticus torus?';

        return (
            <div>
                <section class="hero">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">{heading}</h1>
                            <div class="is-two-thirds column is-paddingless">
                                <h2 class="subtitle is-4">{subheading}</h2>
                                <a href="#" class="button is-large is-primary" id="learn">Learn more</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="section">
                    <div class="container">
                        <div class="columns pd is-desktop">
                            <div class="column is-1 has-text-centered"><i class="fa fa-cog is-primery"></i></div>
                            <div class="column is-one-third-desktop">
                                <p class="title"><strong>Cur guttus peregrinatione?</strong>
                                </p>
                            </div>
                            <div class="column">
                                <p>
                                    Mirabilis messor semper talems medicina est.Crescere una ducunt ad talis
                                    mens.Absolutios tolerare, tanquam grandis resistentia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="columns pd">
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <p class="title">Persuadere virtualiter ducunt ad lotus gluten.</p>
                                    <p class="subtitle">- Fluctui</p>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <p class="title">Persuadere virtualiter ducunt ad lotus gluten.</p>
                                    <p class="subtitle">- Fluctui</p>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <p class="title">Persuadere virtualiter ducunt ad lotus gluten.</p>
                                    <p class="subtitle">- Fluctui</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
