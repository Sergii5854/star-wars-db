import React, { Component } from 'react';

import './style.css'

import ItemList  from '../itemList/'
import PersonDetails  from '../personDetails/'
import ErrorIndicator from '../errorIndicator';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
        hasError: false
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }

    onItemSelected = (id) =>{
        this.setState({
            selectedPerson: id
        })
    }
    render() {

        if(this.state.hasError) return <ErrorIndicator/>


        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onItemSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personID={this.state.selectedPerson}/>
                </div>
            </div>


        )
    }
}
