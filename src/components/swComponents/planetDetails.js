import React from 'react';

import ItemDetails from '../itemDetails';
import Record from '../record';

import { SwapiServiceConsumer } from '../swapiServiceContext/';

const PlanetDetails = ({ itemId }) => {
    return (

        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => { // swapiService from app
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>

                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};



export default PlanetDetails