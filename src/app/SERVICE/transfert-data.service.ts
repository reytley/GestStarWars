import { Injectable } from '@angular/core';
import { Planet } from '../BO/planet';
import { People } from '../BO/people';
import { Starship } from '../BO/starship';

import { STARSHIPSDALService } from '../DAL/starships-dal.service';

import { ApiService } from '../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

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
  constructor(private storage: Storage,private apiService: ApiService,private STARSHIPSDALService: STARSHIPSDALService) {
    this.Planets = new Array<Planet>();
    this.Peoples = new Array<People>();
    this.Starships = new Array<Starship>();
    this.idUser = 1;
    
    //Ajout des vaisseaux 
    this.STARSHIPSDALService.setStarships();
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
 

    if(starshipsTemp != null){
      console.log("listeLocal");

      storage.get('ListStarShips').then((starships) => {
        this.Starships =starships;
      });
    }else{
      console.log("listeEn ligne");
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
    console.log("Get DATA FIREBASE")
    console.log(this.STARSHIPSDALService.getStarships);
    return   this.apiService.getStarships();
  }

  

}
