import React, { Component } from 'react';

import './style.css'

import SwapiService from '../../services/swapiService/';
import Spinner from './../spinner/';
import ErrorIndicator from '../errorIndicator/';
import ErrorButton from '../errorButton';

export default class itemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        image: null
    }
    componentDidMount(){
        this.updateItem()
    }
    componentDidUpdate(prevProps){
        if(this.props.itemID !== prevProps.itemID){
            this.updateItem()
        }
    }

    updateItem(){
        const { itemID, getData, getImageUrl} = this.props
        if(!itemID) return

        getData(itemID)
            .then( (item) => {
                this.setState({
                    item ,
                    image: getImageUrl(item)
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
        const { item , loading, error} = this.state;

        if(!item){
            return <span>Select a item from a list</span>
        }
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null
        const content = hasData ? <ItemView item={item}/> : null


        return (
            <div className="item-details card">
                {errorMessage}
                {spinner}
                {content}
            </div>

        )
    }
}

const ItemView = ({item, image}) => {
    const {
        id, name, gender, birthYear, eyeColor
    } = item;

    return (

        <React.Fragment>

                <img className="item-image"
                     src={image} />

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
