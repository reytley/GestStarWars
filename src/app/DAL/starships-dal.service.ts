import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Starship } from '../BO/starship';
import * as firebase from 'firebase/app';
import { ApiService } from '../API/api.service';
@Injectable({
  providedIn: 'root'
})
export class STARSHIPSDALService {
  constructor(private apiService: ApiService,private storage: Storage) { }

  setStarships(){
let Starships: Array<Starship> = new Array<Starship>();
    this.apiService.getStarships().subscribe(
      data =>{
        let result: any = data;
     console.log(data)
     result.results.forEach(vaiseau => {
      let starShipTemp: Starship = new Starship();
    starShipTemp.name =     vaiseau.name;
      starShipTemp.model =   vaiseau.model;
      starShipTemp.crew =     vaiseau.crew;
      Starships.push(starShipTemp);
     });
     console.log("setStarships API STARSHIPS");
     console.log(Starships);
     
     let newData = firebase.database().ref('/starships')
     newData.set({
      Starships: Starships
     });
    }
  );
  }

    getStarships(){
      let ref = firebase.database().ref('/starships').on('value',resp => {
        console.log(resp);
      });
    }
    getStarship(id: number){
  
    }
    resetStarship(){
      let newData = firebase.database().ref('/starships').remove();
    }

    favoriteAdd(StarShipFav: Starship,idUser: number){
      let newData = firebase.database().ref(idUser+'/starships')
      newData.set({
        FavoriteStarships: StarShipFav
      });

    }

}
