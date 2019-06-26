import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { People } from './people';
import { Starship } from './starship';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import 'firebase/database';
@Injectable({
  providedIn: 'root'
})
export class TransfertDataService {
  Planets: Array<Planet>;
  Peoples: Array<People>;
  Starships: Array<Starship>;
  FavoriteStarships: Array<Starship>;
  starShipDetail: Starship;
  idUser: number;
  constructor(private storage: Storage,private apiService: ApiService) {
    this.Planets = new Array<Planet>();
    this.Peoples = new Array<People>();
    this.Starships = new Array<Starship>();
    this.idUser = 1;
    storage.get('ListFavoriteStarShips').then((starshipsTemp) => {
  

    if(starshipsTemp != null){
      console.log("listeLocalFavorite");
      storage.get('ListFavoriteStarShips').then((starships) => {
        this.FavoriteStarships =starships;
        storage.set("ListFavoriteStarShips",this.FavoriteStarships);
      });
    }else{
      console.log("listeNullFavorite");
      this.FavoriteStarships = new Array<Starship>();
      storage.set("ListFavoriteStarShips",this.FavoriteStarships);

    }
  });

    storage.get('ListStarShips').then((starshipsTemp) => {
      console.log(starshipsTemp)
      console.log(starshipsTemp[0])

    if(starshipsTemp != null){
      console.log("listeLocal");

      storage.get('ListStarShips').then((starships) => {
        this.Starships =starships;
      });
    }else{
      console.log("listeEn ligne");

      this.getStarships().subscribe(

        data =>{
          let result: any = data;
       console.log(data)
       result.results.forEach(vaiseau => {
        let starShipTemp: Starship = new Starship();
      starShipTemp.name =     vaiseau.name;
        starShipTemp.model =   vaiseau.model;
        starShipTemp.crew =     vaiseau.crew;
        this.Starships.push(starShipTemp);
       });
       console.log( this.Starships);
       storage.set("ListStarShips",this.Starships);
      }
      );
     
    }
  });

 }

  favoriteAdd(StarShipFav: Starship){
   
    this.FavoriteStarships.push(StarShipFav);
    console.log()
    this.storage.set("ListFavoriteStarShips",this.FavoriteStarships);
    this.storage.get('ListFavoriteStarShips').then((starshipsTemp) => {
      console.log(starshipsTemp)
    });
    let newData = firebase.database().ref(this.idUser+'/starships')
    newData.set({
      FavoriteStarships: this.FavoriteStarships
    });
  }
  favoriteRemove(StarShipFav: Starship){
    this.FavoriteStarships.splice(this.FavoriteStarships.indexOf(StarShipFav));
    console.log()
    this.storage.set("ListFavoriteStarShips",this.FavoriteStarships);
    this.storage.get('ListFavoriteStarShips').then((starshipsTemp) => {
      console.log(starshipsTemp)
    });
  }


  getPeople(id: number){
    return  this.apiService.getPeople(id);
  }
  getStarship(id: number){
    return   this.apiService.getStarship(id);
  }
  getStarships(){
    return   this.apiService.getStarships();
  }

  

}
