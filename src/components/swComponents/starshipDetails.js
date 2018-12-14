import React from 'react';

import ItemDetails from '../itemDetails';
import Record from '../record';

import { SwapiServiceConsumer } from '../swapiServiceContext/';

const StarshipDetails = ({ itemId }) => {
    return (

        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>

                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="costInCredits" label="Cost" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export default StarshipDetails