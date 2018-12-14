import React, {Component} from 'react';
import {PersonDetails,  PersonList } from '../swComponents/'
import Row from '../row'
import ErrorBoundry from '../errorBoundry'

export default class PeoplePage extends Component {

    state = {
        selectedItem: null,

    }

    onItemSelected = (selectedItem) => {
        console.log(selectedItem);
        this.setState({ selectedItem })
    }

    render() {

        const {selectedItem} = this.state

        return (
            <ErrorBoundry>
                <Row left={<PersonList onItemSelected={this.onItemSelected} />}
                     right={ <PersonDetails itemId={selectedItem} />}
                />
            </ErrorBoundry>

        )
    }
}
