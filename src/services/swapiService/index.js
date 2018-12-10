export default class SwapiService {
    _apiBase = 'https://swapi.co/api'

    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok) throw new  Error(`Could not fetch ${this._apiBase}${url} , received ${res.status}`)
        const body = await res.json()

        return await body
    }

    async getAllPeople(){
        const res = await  this.getResourse(`/people/`)
        return  res.results
    }
    getPerson(id){
        return this.getResourse(`/people/${id}`)
    }

     //
    async getAllStarships(){
        const res = await  this.getResourse(`/starships/`)
        return  res.results
    }
    getStarship(id){
        return this.getResourse(`/starships/${id}`)
    }

    //     //
    async getAllSpecies(){
        const res = await  this.getResourse(`/species/`)
        return  res.results
    }
    getSpecie(id){
        return this.getResourse(`/species/${id}`)
    }

    ////
    async getAllPlanets(){
        const res = await  this.getResourse(`/planets/`)
        return  res.results
    }
    getPlanets(id){
        return this.getResourse(`/planets/${id}`)
    }

    //
}