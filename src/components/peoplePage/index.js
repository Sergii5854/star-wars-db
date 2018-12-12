import React, {Component} from 'react';

import './style.css'

import ItemList from '../itemList/'
import PersonDetails from '../itemDetails/'

import Row from '../row'
import ErrorBoundry from '../errorBoundry'
import swapiService from '../../services/swapiService/index'



export default class PeoplePage extends Component {
    swapiService = new swapiService()
    state = {
        selectedPerson: 3,

    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {


        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}
            >
                {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <PersonDetails personID={this.state.selectedPerson}/>
        )

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>

        )
    }
}
