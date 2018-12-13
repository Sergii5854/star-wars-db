import React, { Component } from 'react';

import './style.css'

import SwapiService from '../../services/swapiService/';
import Spinner from './../spinner/';
import ErrorIndicator from '../errorIndicator/';
import ErrorButton from '../errorButton';
import Record from '../record';

export default class itemDetails extends Component {

    state = {
        item: null,
        image: null
    }
    componentDidMount(){
        this.updateItem()
    }
    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {

            this.updateItem();
        }
    }

    updateItem(){
        const { itemID, getData, getImageUrl} = this.props
        if(!itemID) return false

        getData(itemID)
            .then( (item) => {
                this.setState({
                    item ,
                    image: getImageUrl(item)
                })
            })
            .catch(this.onError)
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
    const  { name } = item;


    return (

        <React.Fragment>

                <img className="item-image"
                     src={image} />

                <div className="card-body">
                    <h4>
                        {name}
                    </h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                    <ErrorButton/>
                </div>

        </React.Fragment>
    )

}
