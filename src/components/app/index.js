import React, {Component} from 'react'
import swapiService from '../../services/swapiService/index'

export default class App extends Component {

    render() {
        const getResourse = async (url) => {
            const res = await fetch(url)
            if(!res.ok) throw new  Error(`Could not fetch ${url} , received ${res.status}`)
            const body = await res.json()

            return body
        }



        const swapi = new swapiService()
        swapi.getAllPeople().then((body) => {
            console.log(body);
        }).catch((err)=>{
            console.log("error",err);
        })
        return (
            <div>
                hello
            </div>
        )
    }
}