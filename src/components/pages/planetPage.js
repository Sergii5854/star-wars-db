import React, {Component} from 'react';
import {PlanetList,  PlanetDetails } from '../swComponents/'
import Row from '../row'
import ErrorBoundry from '../errorBoundry'

export default class PlanetPage extends Component {

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
                <Row left={<PlanetList onItemSelected={this.onItemSelected} />}
                     right={ <PlanetDetails itemId={selectedItem} />      }
                />
            </ErrorBoundry>

        )
    }
}