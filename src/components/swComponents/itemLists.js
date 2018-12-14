import React from 'react';
import ItemList from '../itemList';
import {withData} from '../hocHelpers';
import SwapiService from '../../services/swapiService/';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const PersonList = withData(
    withChildFunction(ItemList, renderName));

const PlanetList = withData(
    withChildFunction(ItemList, renderName));

const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName));

export {
    PersonList,
    PlanetList,
    StarshipList
};