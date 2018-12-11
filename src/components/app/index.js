import React, {Component} from 'react'

import './style.css'
import swapiService from '../../services/swapiService/index'

import Header from './../header/'
import Baner  from '../bannerPlanet/'
import ItemList  from '../itemList/'
import PersonDetails  from '../personDetails/'


export default class App extends Component {
    state ={
        selectedPerson: null
    }
    onItemSelected = (id) =>{
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        return (
            <div className="app">
                <Header/>
                <Baner/>

                <div className="row">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onItemSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personID={this.state.selectedPerson}/>
                    </div>
                </div>

            </div>
        )
    }
}