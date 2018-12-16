import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './style.css'
import SwapiService from '../../services/swapiService/index'
import DummySwapiService from '../../services/dummySwapiService' // test data

import Header from './../header/'
import Baner from '../bannerPlanet/'

import {PeoplePage, PlanetPage, StarshipPage, AdminPage, LoginPage} from '../pages/'

import ErrorBoundry from '../errorBoundry/'

import {SwapiServiceProvider} from '../swapiServiceContext';

import {StarshipDetails} from '../swComponents';


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

                            <Route path="/"
                                   render={() => <h2>Welcome to Star Wars api </h2>}
                                   exact/>
                            <Route path="/people" render={() => <h2>People</h2>}/>
                            <Route path="/people/:id?" component={PeoplePage}/>

                            <Route path="/planets" component={PlanetPage}/>

                            <Route path="/starships" component={StarshipPage}/>
                            <Route path="/starships/:id"
                                   render={
                                       ( {match} ) => {
                                       const {id} = match.params
                                       return <StarshipDetails itemId={id} />
                                     }
                                   }
                            />

                            <Route path="/login"
                                   render={
                                       (  ) => {

                                           return <LoginPage />
                                       }
                                   }
                            />
                            <Route path="/admin"
                                   render={
                                       (  ) => {
                                           return <LoginPage />
                                       }
                                   }
                            />


                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}