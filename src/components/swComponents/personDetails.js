import React from 'react';

import ItemDetails from '../itemDetails';
import Record from '../record'
import {withSwapiService} from '../hocHelpers/';

// const PersonDetails = ({itemId, getData, getImageUrl}) => { // destructor
const PersonDetails = ({props}) => {
    return (
        <ItemDetails {...props}
            // itemId={itemId}
            // getData={getData}
            // getImageUrl={getImageUrl}
        >

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>


    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps)