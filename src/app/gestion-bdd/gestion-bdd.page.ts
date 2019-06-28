import { Component, OnInit } from '@angular/core';
import { STARSHIPSDALService } from '../DAL/starships-dal.service';
import { PeoplesDalService } from '../DAL/peoples-dal.service';
import { PlanetsDalService } from '../DAL/planets-dal.service';
import { TransfertDataService } from '../SERVICE/transfert-data.service';
import { PlayerService } from '../DAL/player.service';
import { Router } from '@angular/router';
import { Player } from '../BO/player';

@Component({
  selector: 'app-gestion-bdd',
  templateUrl: './gestion-bdd.page.html',
  styleUrls: ['./gestion-bdd.page.scss'],
})
export class GestionBddPage implements OnInit {

  constructor(private TransfertDataService: TransfertDataService,private PlayerService: PlayerService,private router: Router,private STARSHIPSDALService: STARSHIPSDALService,private PlanetsDalService: PlanetsDalService,private PeoplesDalService:PeoplesDalService)
   {
   this.remplissageBaseLocal();
   
   }

  async remplissageBaseLocal(){
     this.TransfertDataService.Planets = await this.PlanetsDalService.getPlanets();
   }
  AddStarShip() {
    this.router.navigate(["/new-star-ship"]);
  }
  reset(){
  
  } 
  
  setPlanets(){
    this.PlanetsDalService.setPlanets();
  }
 //FONCTION TEST D4INSCRIPTION
 setPlayer(){
   console.log(  this.TransfertDataService.Planets[0]);
  let player: Player = new Player();
  player.idUser    = 1;
  player.Pseudonyme="";
  player.name="";
  player.birth_year="";
  player.gender="";
  player.money=0;
  player.PlayerLife=0;
  player.hungryLife=0;
 // player.Planets = this.TransfertDataService.Planets[0];
   
 }

  setStarships(){
    this.STARSHIPSDALService.setStarships();
  }
  resetPeople(){
   
    this.PeoplesDalService.resetPeoples();
  }
  setPeoples(){
    this.PeoplesDalService.setPeoples();
  }
  resetStarship(){
    this.STARSHIPSDALService.resetStarship();
  }
  resetPlanets(){
    this.PlanetsDalService.resetPlanets();
  }
  ngOnInit() {
  }

}
