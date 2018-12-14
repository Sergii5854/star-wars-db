import React, {Component} from 'react'

import './style.css'
import SwapiService from '../../services/swapiService/index'
import DummySwapiService from '../../services/dummySwapiService' // test data

import Header from './../header/'
import Baner from '../bannerPlanet/'

import {PeoplePage, PlanetPage, StarshipPage} from '../pages/'

import ErrorBoundry from '../errorBoundry/'

import { SwapiServiceProvider } from '../swapiServiceContext';


export default class App extends Component {

    state = {
        swapiService : new SwapiService(),
    }
    onServiceChange = () => {
        this.setState( ({swapiService}) =>{
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService
            console.log('changed to  ', Service.name)
            return{
                swapiService: new Service()
            }
        })

    }


    render() {


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <div className="stardb-app">
                        <Header  onServiceChange={this.onServiceChange}/>
                        <Baner/>

                        <PeoplePage/>

                        <PlanetPage/>

                        <StarshipPage/>



                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}