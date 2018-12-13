import React, {Component} from 'react'

import './style.css'
import SwapiService from '../../services/swapiService/index'

import Header from './../header/'
import Baner from '../bannerPlanet/'
import Row from '../row/'
import PeoplePage from '../peoplePage/'

import ItemList from '../itemList/'
import ItemDetails from '../itemDetails/'
import Record from '../record/'
import ErrorBoundry from '../errorBoundry/'


export default class App extends Component {
    swapiService = new SwapiService()
    state = {
        showRandomPlanet: true,
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

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    {starshipDetails}
                    <ItemList
                        getData={getAllPeople}
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </ItemList>

                    <ItemList
                        getData={getAllPlanets}
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </ItemList>

                </div>
            </ErrorBoundry>
        )
    }
}