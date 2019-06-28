import { Component, OnInit } from '@angular/core';
import { STARSHIPSDALService } from '../DAL/starships-dal.service';
import { PeoplesDalService } from '../DAL/peoples-dal.service';
import { PlanetsDalService } from '../DAL/planets-dal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion-bdd',
  templateUrl: './gestion-bdd.page.html',
  styleUrls: ['./gestion-bdd.page.scss'],
})
export class GestionBddPage implements OnInit {

  constructor(private router: Router,private STARSHIPSDALService: STARSHIPSDALService,private PlanetsDalService: PlanetsDalService,private PeoplesDalService:PeoplesDalService) { }
  AddStarShip() {
    this.router.navigate(["/new-star-ship"]);
  }
  reset(){
  
  } 
  
  setPlanets(){
    this.PlanetsDalService.setPlanets();
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
