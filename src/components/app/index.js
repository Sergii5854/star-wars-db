import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

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
        isLoggedIn: false
    }
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })

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
        const {isLoggedIn} = this.state


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app container">
                            <Header onServiceChange={this.onServiceChange}/>

                            <Baner updateInterval={15000}/>

                            <Switch>
                                <Route path="/"
                                       render={() => <h2>Welcome to Star Wars api </h2>}
                                       exact/>

                                <Route path="/people/:id?" component={PeoplePage}/>

                                <Route path="/planets" component={PlanetPage}/>

                                <Route path="/starships" exact component={StarshipPage}/>
                                <Route path="/starships/:id"
                                       render={
                                           ({match}) => {
                                               const {id} = match.params
                                               return <StarshipDetails itemId={id}/>
                                           }
                                       }
                                />

                                {/*<Route path="/login"*/}
                                       {/*render={*/}
                                           {/*() => {*/}

                                               {/*return <LoginPage*/}
                                                   {/*isLoggedIn={isLoggedIn}*/}
                                                   {/*onLoggin={() => this.onLogin}*/}
                                               {/*/>*/}
                                           {/*}*/}
                                       {/*}*/}
                                {/*/>*/}
                                {/*<Route path="/admin"*/}
                                       {/*render={*/}
                                           {/*() => {*/}
                                               {/*return <AdminPage isLoggedIn={isLoggedIn}/>*/}
                                           {/*}*/}
                                       {/*}*/}
                                {/*/>*/}

                                <Route render={() => <h2>Page Not Found </h2>}/>
                            </Switch>


                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}