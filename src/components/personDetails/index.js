import React, { Component } from 'react';

import './style.css'

import SwapiService from '../../services/swapiService/';
import Spinner from './../spinner/';
import ErrorIndicator from '../errorIndicator/';
import ErrorButton from '../errorButton';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        loading: true
    }
    componentDidMount(){
        this.updatePerson()
    }
    componentDidUpdate(prevProps){
        if(this.props.personID !== prevProps.personID){
            this.updatePerson()
        }
    }

    updatePerson(){
        const { personID } = this.props
        if(!personID) return

        this.swapiService
            .getPerson(personID)
            .then( (person) => {
                this.setState({
                    person ,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    onError = () =>{
        this.setState({
            error: true,
            loading: false
        });
    }


    render() {
        const { person , loading, error} = this.state;

        if(!person){
            return <span>Select a person from a list</span>
        }
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null
        const content = hasData ? <PersonView person={person}/> : null


        return (
            <div className="person-details card">
                {errorMessage}
                {spinner}
                {content}
            </div>

        )
    }
}

const PersonView = ({person}) => {
    const {
        id, name, gender, birthYear, eyeColor
    } = person;

    return (

        <React.Fragment>

                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                <div className="card-body">
                    <h4>
                        {name}
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>
                                {gender}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>
                                {birthYear}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>
                                {eyeColor}
                            </span>
                        </li>
                    </ul>
                    <ErrorButton/>
                </div>

        </React.Fragment>
    )

}
