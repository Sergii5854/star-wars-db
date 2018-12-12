import React, {Component} from 'react'

import './style.css'
import SwapiService from '../../services/swapiService/index'

import Header from './../header/'
import Baner from '../bannerPlanet/'
import Row from '../row/'
import PeoplePage from '../peoplePage/'

import ItemList from '../itemList/'
import PersonDetails from '../itemDetails/'
import ErrorBoundry from '../errorBoundry/'



export default class App extends Component {
    swapiService = new SwapiService()
    state = {
        showRandomPlanet: true,
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    render() {


        const planet = this.state.showRandomPlanet ?
            <Baner/> :
            null;

        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService

        const itemList = (

            <ItemList
                onItemSelected={this.onItemSelected}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        )
        const personDetails = (
            <PersonDetails personID={this.state.selectedPerson}/>

        )


        const starshipDetails = (
            <ItemList
               itemID={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />

        )


        return (
            <div className="app">
                <Header/>
                {planet}

                <Row
                    left={itemList}
                    right={personDetails}
                />

                <Row
                    left={itemList}
                    right={starshipDetails}
                />


            </div>
        )
    }
}