import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './style.css'
import SwapiService from '../../services/swapiService/index'
import DummySwapiService from '../../services/dummySwapiService' // test data

import Header from './../header/'
import Baner from '../bannerPlanet/'

import {PeoplePage, PlanetPage, StarshipPage} from '../pages/'

import ErrorBoundry from '../errorBoundry/'

import {SwapiServiceProvider} from '../swapiServiceContext';


export default class App extends Component {

    state = {
        swapiService: new SwapiService,
    }
    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService
            console.log('changed to  ', Service.name)
            return {
                swapiService: new Service()
            }
        })

    }


    render() {


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>

                            <Baner updateInterval={15000}/>

                            <PeoplePage/>

                            <PlanetPage/>

                            <StarshipPage/>

                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planet" component={PlanetPage} />
                            <Route path="/starship" component={StarshipPage} />


                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
    )
    }
    }