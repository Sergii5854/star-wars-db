import React, {Component} from 'react';
import {StarshipDetails,  StarshipList } from '../swComponents/'
import Row from '../row'
import ErrorBoundry from '../errorBoundry'

export default class StarshipPage extends Component {

    state = {
        selectedItem: null,

    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {

        const {selectedItem} = this.state

        return (
            <ErrorBoundry>
                <Row left={<StarshipList onItemSelected={this.onItemSelected} />}
                     right={ <StarshipDetails itemId={selectedItem} />      }
                />
            </ErrorBoundry>

        )
    }
}