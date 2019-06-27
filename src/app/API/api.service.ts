

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: String= "https://swapi.co/api/";
  
  constructor(private http: HttpClient) { }

  getPeoples(){
    return this.http.get(this.apiUrl+"people/")
  }
  getPeople(id: number){
    return this.http.get(this.apiUrl+"people/"+id+"/")
  }


  getPlanets(){
    return this.http.get(this.apiUrl+"planets/")
  }
  getPlanet(id: number){
    return this.http.get(this.apiUrl+"planets/"+id+"/")
  }

  getStarships(){
    return this.http.get(this.apiUrl+"starships/")
  }
  getStarship(id: number){
    return this.http.get(this.apiUrl+"starships/"+id+"/")
  }

  
}




