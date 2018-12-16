import React  from 'react';
import {withRouter}  from 'react-router-dom';
import {PersonDetails,  PersonList } from '../swComponents/'
import Row from '../row'
import ErrorBoundry from '../errorBoundry'


 const PeoplePage = ({history, match}) => {

        const {id} =  match.params

        return (
            <ErrorBoundry>
                <Row left={<PersonList onItemSelected={
                    (id) => history.push(id)
                } />}
                     right={ <PersonDetails itemId={id} />}
                />
            </ErrorBoundry>

        )

}

export default withRouter(PeoplePage)