import React from 'react';

import ItemDetails from '../itemDetails';
import Record from '../record';

import { SwapiServiceConsumer } from '../swapiServiceContext/';
import { withSwapiService } from '../hocHelpers/';

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImage} >

                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export default PersonDetails