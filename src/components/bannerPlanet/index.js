import React, {Component} from 'react';

import SwapiService from '../../services/swapiService/';
import Spinner from './../spinner/';
import ErrorIndicator from '../errorIndicator/';

import './style.css';

export default class BannerPlanet extends Component {

    swapiService = new SwapiService();

    static defaultProps = {
        updateInterval: 10000
    }
    static propTypes = {
        updateInterval: (props, propName, componentName)=>{
            const value = props[propName]

            if( typeof value === 'nunber' && !isNaN(value)) return null

            return new TypeError(`${componentName}: ${propName} - must be number`)
        }
    }

    constructor() {
        super();
        this.state = {
            planet: {},
            loading: true
        };
    }

    componentDidMount(){
        const {updateInterval} = this.props
        this.updatePlanet();
        this.interval =  setInterval( this.updatePlanet, updateInterval)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = () =>{
        this.setState({
            error: true,
            loading: false
        });
    }
    updatePlanet = () => {
        // const id = 123242 //for error check
        const id = Math.floor(Math.random() * 20) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null
        const content = hasData ? <PlanetView planet={planet}/> : null

        return (
            <div className="banner-planet jumbotron rounded">

                {errorMessage}
                {spinner}
                {content}

            </div>

        );
    }
}

// BannerPlanet.defaultProps = {
//     updateInterval: 10000
// }

const PlanetView = ({planet}) => {
    const {
        id, name, population,
        rotationPeriod, diameter
    } = planet;

    return (

        <React.Fragment>
            <img className="planet-image"
                 alt={name}
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )

}
