import React, {Component} from 'react'

import './style.css'
import swapiService from '../../services/swapiService/index'

import Header from './../header/'
import Baner  from '../bannerPlanet/'
import ItemList  from '../itemList/'
import PersonDetails  from '../personDetails/'


export default class App extends Component {

    render() {
        return (
            <div className="app">
                <Header/>
                <Baner/>

                <div className="row">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>

            </div>
        )
    }
}