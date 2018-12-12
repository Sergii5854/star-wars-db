import React, {Component} from 'react'

import './style.css'
import swapiService from '../../services/swapiService/index'

import Header from './../header/'
import Baner  from '../bannerPlanet/'
import PeoplePage  from '../peoplePage/'


import ErrorButton from '../errorButton';
import ErrorIndicator from '../errorIndicator';


export default class App extends Component {
    state ={
        showRandomPlanet: true,
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true });
    }
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ?
            <Baner/> :
            null;

        return (
            <div className="app">
                <Header/>
                {planet}

                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>

            </div>
        )
    }
}