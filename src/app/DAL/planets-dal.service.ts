import { Injectable } from '@angular/core';
import { People } from '../BO/people';
import * as firebase from 'firebase/app';
import { ApiService } from '../API/api.service';
import { Storage } from '@ionic/storage';
import { Planet } from '../BO/planet';
@Injectable({
  providedIn: 'root'
})
export class PlanetsDalService {

  constructor(private apiService: ApiService,private storage: Storage) { }

  resetPlanets(){
    
  }
  getPlanets(){
    
    console.log("getPlanets");
      let Planets: Array<Planet>= new Array<Planet>();
      firebase.database().ref('Planets/').on('value',resp => {
      
      Planets = resp.val();
      console.log("Planets updated : "+ Planets);
      return Planets;
      });
      return Planets;
  }
 setPlanets(){
  let PLanets: Array<Planet> = new Array<Planet>();
      this.apiService.getPlanets().subscribe(
        data =>{
          let result: any = data;
       console.log(data)
       result.results.forEach(people => {
        let temp: Planet = new Planet();
        temp.name            = people.name;
        temp.rotation_period = people.rotation_period;
        temp.orbital_period  = people.orbital_period;
        temp.diameter        = people.diameter;
        temp.gravity         = people.gravity;
        temp.terrain         = people.terrain;
        temp.surface_water   = people.surface_water;
        temp.population      = people.population;
        temp.residents       = people.residents;
        PLanets.push(temp);
       });
       console.log("setPLanets API Planet");
       console.log(PLanets);
       
       let newData = firebase.database().ref('/Planets')
       newData.set({
        PLanets: PLanets
       });
      }
    );
    }


}
